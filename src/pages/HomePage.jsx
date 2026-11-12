import Contact from '../components/Contact.jsx';
import Hero from '../components/Hero.jsx';
import Skills from '../components/Skills.jsx';
import Container from '../components/layout/Container.jsx';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import { heroData } from '../content/profile.js';
import { additionalProjects, featuredProjects } from '../content/projects.js';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="about" tabIndex={-1} className="site-section">
        <Container width="narrow" className="section-copy">
          <h2>About</h2>
          <p>{heroData.about}</p>
          <p>{heroData.experience}</p>
        </Container>
      </section>
      <section id="projects" tabIndex={-1} className="site-section">
        <Container>
          <h2 className="section-heading">Featured projects</h2>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <h2 className="section-heading additional-heading">Additional work</h2>
          <div className="project-grid">
            {additionalProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <Skills />
      <Contact />
    </>
  );
}
