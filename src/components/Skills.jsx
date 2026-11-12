import { skills, badgeColors } from '../data/portfolioData.jsx';
import Container from './layout/Container.jsx';
import Reveal from './ui/Reveal.jsx';

const categories = [...new Set(skills.map(skill => skill.category))];

export default function Skills() {
  return (
    <section id="skills" tabIndex={-1} className="site-section">
      <Container>
        <h2 className="section-heading">Skills &amp; technologies</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(category => (
            <Reveal key={category} className="skill-category">
              <h3>{category}</h3>
              <ul className="technology-list">
                {skills.filter(skill => skill.category === category).map(({ name, icon: Icon }) => (
                  <li key={name} className={badgeColors[category]}>
                    <Icon size={15} aria-hidden="true" /> {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
