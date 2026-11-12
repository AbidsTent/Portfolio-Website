import { homeSections } from '../content/site.js';

const homeSectionIds = new Set(homeSections.map(({ id }) => id));

export function projectHref({ slug }) {
  return `#/projects/${slug}`;
}

export function resolveRoute(hash = '') {
  const path = hash.replace(/^#\/?/, '').replace(/\/$/, '');
  if (!path || homeSectionIds.has(path)) {
    return { page: 'home', section: path || 'hero' };
  }

  const project = /^projects?\/([a-z0-9]+(?:-[a-z0-9]+)*)$/.exec(path);
  if (project) return { page: 'project', slug: project[1] };

  return { page: 'not-found' };
}
