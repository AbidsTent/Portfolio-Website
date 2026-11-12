import { skillGroups } from '../content/skills.js';
import Container from './layout/Container.jsx';

export default function Skills() {
  return (
    <section id="skills" tabIndex={-1} className="site-section">
      <Container>
        <h2 className="section-heading">Skills &amp; technologies</h2>
        <div className="skills-grid">
          {skillGroups.map(({ name, skills }) => (
            <div key={name} className="skill-category">
              <h3>{name}</h3>
              <ul className="technology-list">
                {skills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
