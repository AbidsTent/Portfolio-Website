import Reveal from '../ui/Reveal.jsx';
import AssetImage from '../ui/AssetImage.jsx';
import ProjectIcon from './ProjectIcon.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import ProjectStatus from './ProjectStatus.jsx';
import { projectHref } from '../../utils/routes.js';

export default function ProjectCard({ project, index = 0, prominent = false }) {
  const cover = project.screenshots[0];
  const cardClass = prominent ? 'project-card--featured' : 'project-card--compact';

  return (
    <Reveal as="article" delay={(index % 3) * 0.05} className={`project-card ${cardClass}`}>
      {(prominent || cover) && (
        <div className="project-cover" data-artwork={project.artwork}>
          <span className="project-cover-icon"><ProjectIcon artwork={project.artwork} size={28} /></span>
          {cover && <AssetImage src={cover.src} alt={cover.alt} className="project-cover-image" />}
        </div>
      )}
      <div className="project-card-body">
        <div className="project-card-copy">
          <div className="project-card-meta">
            <p className="project-category">{project.category}</p>
            <ProjectStatus status={project.status} />
          </div>
          <h3><a href={projectHref(project)}>{project.title}</a></h3>
          <p className="project-summary">{project.cardSummary ?? project.summary}</p>
          <ul aria-label={`${project.title} technology stack`} className="technology-list">
            {project.stack.slice(0, 3).map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div className="project-card-footer">
          <ProjectLinks project={project} includeOverview />
        </div>
      </div>
    </Reveal>
  );
}
