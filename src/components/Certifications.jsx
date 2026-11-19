import { ArrowUpRight } from 'lucide-react';
import { certifications } from '../content/certifications.js';
import Container from './layout/Container.jsx';
import ExternalLink from './ui/ExternalLink.jsx';

const completionDate = new Intl.DateTimeFormat('en-CA', {
  month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
});

export default function Certifications() {
  return (
    <section id="certifications" tabIndex={-1} className="site-section" aria-labelledby="certifications-heading">
      <Container>
        <h2 id="certifications-heading" className="section-heading">Courses &amp; Certifications</h2>
        <p className="section-intro">Completed LinkedIn Learning courses in data platforms, integration, governance, and development workflows.</p>
        <ul className="certifications-grid" aria-label="Completed courses">
          {certifications.map(course => (
            <li key={course.id} className="certificate-card">
              <article>
                <div className="certificate-meta">
                  <span>{course.issuer}</span>
                  <time dateTime={course.completedAt}>{completionDate.format(new Date(course.completedAt))}</time>
                </div>
                <h3>{course.title}</h3>
                <ul className="technology-list" aria-label={`${course.title} subjects`}>
                  {course.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
                <ExternalLink href={course.credentialUrl} aria-label={`View credential: ${course.title}`} className="credential-link">
                  View credential<ArrowUpRight size={16} aria-hidden="true" />
                </ExternalLink>
              </article>
            </li>
          ))}
        </ul>
        <p className="course-note">Course-completion certificates issued by LinkedIn Learning.</p>
      </Container>
    </section>
  );
}
