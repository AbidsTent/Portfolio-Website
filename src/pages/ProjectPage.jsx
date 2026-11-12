import { ArrowLeft } from 'lucide-react';
import Container from '../components/layout/Container.jsx';
import ProjectLinks from '../components/projects/ProjectLinks.jsx';
import ProjectStatus from '../components/projects/ProjectStatus.jsx';
import AssetImage from '../components/ui/AssetImage.jsx';

export default function ProjectPage({ project }) {
  return (
    <article className="site-section detail-page">
      <Container width="narrow">
        <a href="#projects" className="back-link">
          <ArrowLeft size={16} aria-hidden="true" /> Back to projects
        </a>
        <header className="detail-header">
          <p className="project-category">{project.category}</p>
          <h1 tabIndex={-1}>{project.title}</h1>
          <p className="detail-summary">{project.summary}</p>
          <div className="detail-actions">
            <ProjectStatus status={project.status} />
            <ProjectLinks project={project} />
          </div>
        </header>
        {project.stack.length > 0 && (
          <section className="detail-section">
            <h2>Technology</h2>
            <ul aria-label="Technology stack" className="technology-list">
              {project.stack.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
          </section>
        )}
        {project.caseStudy?.sections.map(({ title, body }) => (
          <section key={title} className="detail-section section-copy">
            <h2>{title}</h2>
            <p>{body}</p>
          </section>
        ))}
        {project.screenshots.map(({ src, alt }) => (
          <AssetImage key={src} src={src} alt={alt} className="project-card-image" />
        ))}
      </Container>
    </article>
  );
}
