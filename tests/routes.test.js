import assert from 'node:assert/strict';
import { test } from 'node:test';
import { isWebUrl } from '../src/utils/links.js';
import { projectHref, resolveRoute } from '../src/utils/routes.js';

test('the default fragment and section links resolve to the homepage', () => {
  for (const hash of [undefined, '', '#', '#/', '#hero']) {
    assert.deepEqual(resolveRoute(hash), { page: 'home', section: 'hero' });
  }
  for (const section of ['projects', 'about', 'skills', 'experience', 'contact']) {
    assert.deepEqual(resolveRoute(`#${section}`), { page: 'home', section });
  }
  assert.deepEqual(resolveRoute('#/projects/'), { page: 'home', section: 'projects' });
});

test('project links and legacy singular paths resolve the same slug', () => {
  const slug = 'sql-server-data-warehouse';
  const link = projectHref({ slug });
  assert.equal(link, '#/projects/sql-server-data-warehouse');
  for (const hash of [link, '#/project/sql-server-data-warehouse', `${link}/`]) {
    assert.deepEqual(resolveRoute(hash), { page: 'project', slug });
  }
});

test('unknown sections and malformed project paths resolve to the fallback', () => {
  for (const hash of ['#unknown', '#/projects/one/two', '#/projects/a%2Fb', '#/projects/%ZZ']) {
    assert.deepEqual(resolveRoute(hash), { page: 'not-found' });
  }
});

test('external project links require an HTTP or HTTPS URL', () => {
  assert.equal(isWebUrl('https://github.com/AbidsTent/Portfolio-Website'), true);
  assert.equal(isWebUrl('http://example.com/demo'), true);
  for (const url of [null, undefined, '', '#projects', '/demo', 'javascript:alert(1)', 'mailto:team@example.com']) {
    assert.equal(isWebUrl(url), false);
  }
});
