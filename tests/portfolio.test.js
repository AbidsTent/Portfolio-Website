import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import { certifications } from '../src/content/certifications.js';

const root = new URL('../', import.meta.url);
const pagesBase = '/Portfolio-Website/';
const siteUrl = 'https://abidstent.github.io/Portfolio-Website/';
const featured = [
  ['sql-server-data-warehouse', 'SQL Server Data Warehouse', 'DWH-Project', 'warehouse-architecture.svg'],
  ['ecommerce-power-bi-analytics', 'E-commerce Power BI Analytics', 'ecommerce-powerbi-analytics', 'olist-executive-overview.png'],
  ['urban-mobility-data-platform', 'Urban Mobility Data Platform', 'urban-mobility-data-platform', 'proposed-architecture.svg'],
];

let vite;
let home;
let resolvePage;
let ProjectLinks;

before(async () => {
  vite = await createServer({
    root: fileURLToPath(root),
    base: pagesBase,
    appType: 'custom',
    server: { middlewareMode: true, hmr: false, watch: null },
  });
  const app = await vite.ssrLoadModule('/src/App.jsx');
  ({ resolvePage } = app);
  ({ default: ProjectLinks } = await vite.ssrLoadModule('/src/components/projects/ProjectLinks.jsx'));
  home = renderToStaticMarkup(createElement(app.default));
});

after(async () => {
  await vite?.close();
});

function renderedLink(html, href) {
  const link = html.match(/<a\b[^>]*>/g)?.find(tag => tag.includes(`href="${href}"`));
  assert.ok(link, `Missing link to ${href}`);
  return link;
}

test('home exposes its sections, navigation targets, and keyboard entry points', () => {
  assert.match(home, /<main\b[^>]*id="main-content"[^>]*tabindex="-1"/i);
  assert.match(home, />Skip to main content<\/a>/);
  renderedLink(home, '#main-content');
  assert.match(home, /<button\b[^>]*aria-expanded="false"[^>]*aria-controls="mobile-navigation"/);
  assert.match(home, /<nav\b[^>]*id="mobile-navigation"[^>]*hidden=""/);
  for (const section of ['hero', 'projects', 'about', 'skills', 'certifications', 'experience', 'contact']) {
    assert.match(home, new RegExp(`<section\\b[^>]*id="${section}"[^>]*tabindex="-1"`, 'i'));
    renderedLink(home, `#${section}`);
  }
  const { route, content } = resolvePage('#about');
  assert.equal(route.section, 'about');
  assert.match(renderToStaticMarkup(content), /<h2\b[^>]*>About<\/h2>/);
});

test('completed courses render between skills and experience with safe credential links', () => {
  const start = home.indexOf('<section id="certifications"');
  const end = home.indexOf('<section id="experience"');
  assert.ok(start > home.indexOf('<section id="skills"') && end > start);
  const section = home.slice(start, end);
  assert.match(section, /<h2[^>]*>Courses &amp; Certifications<\/h2>/);
  assert.match(section, /Course-completion certificates issued by LinkedIn Learning/);
  assert.equal((section.match(/<article>/g) ?? []).length, 6);
  for (const course of certifications) {
    assert.ok(section.includes(`<h3>${course.title}</h3>`));
    assert.ok(section.includes(`dateTime="${course.completedAt}"`));
    const link = renderedLink(section, course.credentialUrl);
    assert.match(link, /target="_blank"/);
    assert.match(link, /rel="noopener noreferrer"/);
    assert.ok(link.includes(`aria-label="View credential: ${course.title}"`));
  }
  const { route, content } = resolvePage('#certifications');
  assert.equal(route.section, 'certifications');
  assert.match(renderToStaticMarkup(content), /Courses &amp; Certifications/);
});

test('skills render six categories and accessible qualifications without redundant lists', () => {
  const section = home.slice(home.indexOf('<section id="skills"'), home.indexOf('<section id="certifications"'));
  const headings = [...section.matchAll(/<h3>([^<]+)<\/h3>/g)].map(match => match[1]);
  assert.deepEqual(headings, ['Languages', 'Databases', 'Business Intelligence', 'Data Engineering', 'Cloud &amp; Analytics Tools', 'Development &amp; CI/CD']);
  const skills = [...section.matchAll(/<li>([^<]+)/g)].map(match => match[1]);
  assert.equal(skills.length, 23);
  assert.equal(new Set(skills).size, skills.length);
  for (const skill of ['dbt', 'Azure Data Factory', 'Microsoft Fabric']) {
    assert.ok(section.includes(`<li>${skill}<span class="skill-qualification">Coursework</span></li>`));
  }
  assert.ok(section.includes('<li>ETL/ELT<span class="skill-qualification">ELT foundations</span></li>'));
  assert.ok(section.includes('<li>PostgreSQL<span class="skill-qualification">Foundations</span></li>'));
  assert.ok(section.includes('<li>Spark SQL<span class="skill-qualification">Foundations</span></li>'));
  assert.doesNotMatch(section, /<sup|skills-note/);
  assert.doesNotMatch(section, /skills-learning|learning-groups|Learning &amp; familiarity|Completed courses|Additional familiarity|Project work/);
});

test('the homepage features the approved three projects in order', () => {
  const start = home.indexOf('>Featured projects</h2>');
  const end = home.indexOf('>Additional work</h2>');
  assert.ok(start >= 0 && end > start);
  const featuredMarkup = home.slice(start, end);
  const headings = [...featuredMarkup.matchAll(/<h3><a\b[^>]*>([^<]+)<\/a><\/h3>/g)].map(match => match[1]);
  assert.deepEqual(headings, featured.map(([, title]) => title));
  assert.match(home.slice(end), /<h3><a\b[^>]*>Finmate<\/a><\/h3>/);
  assert.doesNotMatch(home, /Sales &amp; Inventory Analysis/);
});

test('the homepage links to the matching case studies and project repositories', () => {
  for (const [slug, title, repo] of featured) {
    const href = `#/projects/${slug}`;
    renderedLink(home, href);
    const { content } = resolvePage(href);
    const detail = renderToStaticMarkup(content);
    assert.match(detail, /<h1\b[^>]*tabindex="-1"/i);
    assert.ok(detail.includes(`>${title}</h1>`), `Unexpected detail page for ${slug}`);
    renderedLink(detail, '#projects');
    const repoUrl = `https://github.com/AbidsTent/${repo}`;
    for (const html of [home, detail]) {
      const link = renderedLink(html, repoUrl);
      assert.match(link, /target="_blank"/);
      assert.match(link, /rel="noopener noreferrer"/);
    }
  }
  const archive = renderToStaticMarkup(resolvePage('#/project/sales-inventory-analysis').content);
  assert.match(archive, /Sales &amp; Inventory Analysis/);
});

test('Finmate presents a completed academic team project in Additional Work with verified limits', () => {
  const { project, content } = resolvePage('#/projects/finmate');
  assert.equal(project.id, 1);
  assert.equal(project.status, 'Completed');
  assert.ok(!project.featured);
  assert.equal(project.demoUrl, null);
  assert.match(project.summary, /academic team project/);
  const html = renderToStaticMarkup(content);
  assert.match(html, />Completed<\/span>/);
  assert.match(html, /Investment records/);
  assert.match(html, /prices entered by the user/);
  assert.match(html, /JWT authentication, bcrypt password hashing/);
  assert.match(html, /browser localStorage/);
  assert.match(html, /individual feature ownership still needs confirmation/);
  assert.match(html, /Recorded contributions/);
  assert.match(html, /Repository commits under my account/);
  assert.doesNotMatch(html, /Status unconfirmed|<video|review-assets\/|\.mp4/);
  renderedLink(html, 'https://github.com/AbidsTent/finmate');
  const additional = home.slice(home.indexOf('>Additional work</h2>'), home.indexOf('<section id="about"'));
  assert.match(additional, />Finmate<\/a>/);
  assert.match(additional, />Completed<\/span>/);
});

test('Finmate uses the three reviewed local screenshots with captions, alt text and implementation sources', async () => {
  const { project, content } = resolvePage('#/projects/finmate');
  const media = project.caseStudy.sections.flatMap(section => section.media ? [section.media] : []);
  const expected = [
    ['new-account-dashboard.webp', 1010, 598, '02:43.500', 'frontend/src/pages/Home.jsx'],
    ['expense-entry.webp', 500, 372, '01:40.000', 'frontend/src/pages/Expenses.jsx'],
    ['investment-entry.webp', 612, 458, '01:40.000', 'frontend/src/components/investments/InvestmentForm.jsx'],
  ];
  const html = renderToStaticMarkup(content);
  assert.equal(media.length, expected.length);
  assert.equal((html.match(/<figure\b/g) ?? []).length, 3);
  for (const [index, [filename, width, height, timestamp, source]] of expected.entries()) {
    const figure = media[index];
    assert.deepEqual([figure.width, figure.height], [width, height]);
    assert.ok(figure.alt.length > 20);
    assert.ok(figure.caption.includes(timestamp));
    const image = html.match(/<img\b[^>]*>/g).find(tag => tag.includes(filename));
    assert.ok(image, `Missing screenshot ${filename}`);
    assert.match(image, /loading="lazy"/);
    assert.match(image, /decoding="async"/);
    assert.ok(image.includes(`width="${width}"`) && image.includes(`height="${height}"`));
    assert.ok(image.includes('src/assets/projects/finmate/'));
    const bytes = await readFile(new URL(`src/assets/projects/finmate/${filename}`, root));
    assert.equal(bytes.subarray(0, 4).toString(), 'RIFF');
    assert.equal(bytes.subarray(8, 12).toString(), 'WEBP');
    assert.equal(bytes.subarray(12, 16).toString(), 'VP8L');
    const dimensions = bytes.readUInt32LE(21);
    assert.deepEqual([(dimensions & 0x3fff) + 1, ((dimensions >>> 14) & 0x3fff) + 1], [width, height]);
    const link = renderedLink(html, `https://github.com/AbidsTent/finmate/blob/88b211dd12b3ca28f20bed3e8f0baebc3065ff39/${source}`);
    assert.match(link, /rel="noopener noreferrer"/);
  }
  assert.doesNotMatch(html, /<video|review-assets\/|\.mp4/);
});

test('invalid optional project URLs are omitted from rendered links', () => {
  const html = renderToStaticMarkup(createElement(ProjectLinks, {
    project: { slug: 'example', title: 'Example', githubUrl: '/wrong', demoUrl: 'javascript:alert(1)' },
    includeOverview: true,
  }));
  renderedLink(html, '#/projects/example');
  assert.doesNotMatch(html, /Source code|Live demo|javascript:|href="\/wrong"/);
});

test('an unknown project and an invalid route render the accessible 404', () => {
  for (const hash of ['#/projects/project-that-does-not-exist', '#/projects/nested/path']) {
    const html = renderToStaticMarkup(resolvePage(hash).content);
    assert.match(html, /<h1\b[^>]*tabindex="-1"[^>]*>Page not found<\/h1>/i);
    assert.match(html, />Browse projects<\/a>/);
    renderedLink(html, '#projects');
  }
});

test('the résumé action resolves under the Pages base and points to a PDF', async () => {
  const resumePath = 'resume/Abid_Sharier.pdf';
  const link = renderedLink(home, pagesBase + resumePath);
  assert.match(link, /target="_blank"/);
  assert.match(home, /View Résumé \(PDF\)/);
  const bytes = await readFile(new URL(`public/${resumePath}`, root));
  assert.equal(bytes.subarray(0, 5).toString(), '%PDF-');
});

test('featured case studies render their local media and attribution', async () => {
  const captions = [/Data With Baraa/, /Year and Category both set to All/, /Proposed architecture/];
  for (const [index, [slug, , repo, file]] of featured.entries()) {
    const html = renderToStaticMarkup(resolvePage(`#/projects/${slug}`).content);
    const image = html.match(/<img\b[^>]*>/g)?.find(tag => tag.includes(file));
    assert.ok(image, `Missing rendered image for ${slug}`);
    const [, path] = image.match(/src="[^"]*\/(src\/assets\/[^"]+)"/) ?? [];
    assert.ok(path && path.endsWith(`/${file}`), `Media must reference a local asset: ${slug}`);
    assert.ok((await stat(new URL(path, root))).size > 0);
    assert.match(image, /alt="[^"]+"/);
    assert.match(html, captions[index]);
    assert.ok(html.includes(`https://github.com/AbidsTent/${repo}/blob/`), `Missing attribution: ${slug}`);
  }
  assert.match(home, /<img\b[^>]*olist-executive-overview\.png/);
  assert.match(home, /<img\b[^>]*alt="Portrait of Abid Sharier"/);
});

test('branding metadata points to local icons and a 1200 × 630 preview on the public URL', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /<link rel="icon" type="image\/svg\+xml"[^>]*href="\/branding\/favicon\.svg"/);
  assert.match(html, /<link rel="icon" type="image\/png"[^>]*href="\/branding\/favicon-32\.png"/);
  assert.match(await readFile(new URL('public/branding/favicon.svg', root), 'utf8'), /^<svg\b/);
  assert.ok((await stat(new URL('public/branding/favicon-32.png', root))).size > 0);
  assert.ok(html.includes(`property="og:url" content="${siteUrl}"`));
  assert.ok(html.includes(`property="og:image" content="${siteUrl}branding/social-preview.png"`));
  assert.match(html, /property="og:image:width" content="1200"/);
  assert.match(html, /property="og:image:height" content="630"/);
  const preview = await readFile(new URL('public/branding/social-preview.png', root));
  assert.equal(preview.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  assert.deepEqual([preview.readUInt32BE(16), preview.readUInt32BE(20)], [1200, 630]);
});
