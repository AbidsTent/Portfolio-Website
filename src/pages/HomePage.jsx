import Contact from '../components/Contact.jsx';
import Experience from '../components/Experience.jsx';
import Hero from '../components/Hero.jsx';
import Skills from '../components/Skills.jsx';
import Container from '../components/layout/Container.jsx';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import { about } from '../content/profile.js';
import { additionalProjects, featuredProjects } from '../content/projects.js';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="projects" tabIndex={-1} className="site-section">
        <Container>
          <h2 className="section-heading">Featured projects</h2>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} prominent />
            ))}
          </div>
          {additionalProjects.length > 0 && (
            <>
              <h2 className="section-heading additional-heading">Additional work</h2>
              <div className="additional-projects">
                {additionalProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
      <section id="about" tabIndex={-1} className="site-section">
        <Container className="about-layout">
          <h2 className="section-heading">About</h2>
          <div className="about-copy">
            {about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Container>
      </section>
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
