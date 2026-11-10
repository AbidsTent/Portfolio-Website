import Reveal from '../ui/Reveal.jsx';
import AssetImage from '../ui/AssetImage.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import ProjectStatus from './ProjectStatus.jsx';
import { projectHref } from '../../utils/routes.js';

export default function ProjectCard({ project, index = 0, prominent = false }) {
  return (
    <Reveal as="article" delay={(index % 3) * 0.05} className={`project-card ${prominent ? 'project-card--featured' : ''}`}>
      <div className="project-card-topline"><span className="project-category">{project.category}</span><span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span></div>
      {project.screenshots[0] && <AssetImage src={project.screenshots[0].src} alt={project.screenshots[0].alt} className="project-card-image" />}
      <h3><a href={projectHref(project)}>{project.title}</a></h3>
      <p className="project-summary">{project.summary}</p>
      <ul aria-label={`${project.title} technology stack`} className="technology-list">
        {project.stack.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
      <div className="project-card-footer">
        <ProjectStatus status={project.status} />
        <ProjectLinks project={project} includeOverview />
      </div>
    </Reveal>
  );
}
