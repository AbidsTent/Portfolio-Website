import { useEffect, useSyncExternalStore } from 'react';
import SiteHeader from '../components/layout/SiteHeader.jsx';
import SiteFooter from '../components/layout/SiteFooter.jsx';
import HomePage from '../pages/HomePage.jsx';
import ProjectPage from '../pages/ProjectPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import { projects } from '../content/projects.js';
import { siteMetadata } from '../content/site.js';
import { resolveRoute } from '../utils/routes.js';

function subscribe(callback) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}

export default function App() {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => '');
  const route = resolveRoute(hash);
  const project = route.page === 'project' ? projects.find(item => item.slug === route.slug) : null;
  const isHome = route.page === 'home';

  useEffect(() => {
    const title = isHome ? siteMetadata.title : `${project?.title || 'Page not found'} | ${siteMetadata.name}`;
    const description = project?.summary || siteMetadata.description;
    document.title = title;
    for (const key of ['description', 'og:description', 'twitter:description']) {
      document.querySelector(`meta[name="${key}"], meta[property="${key}"]`)?.setAttribute('content', description);
    }
    for (const key of ['og:title', 'twitter:title']) {
      document.querySelector(`meta[name="${key}"], meta[property="${key}"]`)?.setAttribute('content', title);
    }
  }, [isHome, project]);

  useEffect(() => {
    // Run after React has mounted the destination, including direct fragment loads.
    const frame = requestAnimationFrame(() => {
      if (!hash) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
      const target = isHome
        ? document.getElementById(route.section)
        : document.querySelector('main h1');
      if (!target) return;
      if (hash) target.focus({ preventScroll: true });
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, isHome, route.section]);

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        {isHome ? <HomePage /> : project ? <ProjectPage key={project.id} project={project} /> : <NotFoundPage />}
      </main>
      <SiteFooter isHome={isHome} />
    </div>
  );
}
