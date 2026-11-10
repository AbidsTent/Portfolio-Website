import { ArrowUpRight, Github } from 'lucide-react';
import ExternalLink from '../ui/ExternalLink.jsx';
import { isWebUrl } from '../../utils/links.js';
import { projectHref } from '../../utils/routes.js';

export default function ProjectLinks({ project, includeOverview = false }) {
  const hasCaseStudy = Boolean(project.caseStudy?.sections?.length);
  return (
    <div className="project-links">
      {includeOverview && <a href={projectHref(project)} className="project-overview-link" aria-label={`${hasCaseStudy ? 'Read case study' : 'View project overview'}: ${project.title}`}>
        {hasCaseStudy ? 'Read case study' : 'Project overview'}<ArrowUpRight size={16} aria-hidden="true" />
      </a>}
      {isWebUrl(project.githubUrl) && <ExternalLink href={project.githubUrl} aria-label={`View ${project.title} source code on GitHub`} className="project-source-link"><Github size={16} aria-hidden="true" /><span>Source code</span></ExternalLink>}
      {isWebUrl(project.demoUrl) && <ExternalLink href={project.demoUrl} aria-label={`View ${project.title} demo or dashboard`} className="project-source-link">Live demo<ArrowUpRight size={16} aria-hidden="true" /></ExternalLink>}
    </div>
  );
}
