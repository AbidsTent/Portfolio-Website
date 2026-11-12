import Container from '../components/layout/Container.jsx';

export default function NotFoundPage() {
  return (
    <section className="site-section detail-page">
      <Container width="narrow" className="section-copy">
        <h1 tabIndex={-1}>Page not found</h1>
        <p>This address doesn’t match a portfolio page.</p>
        <a href="#projects" className="back-link">Browse projects</a>
      </Container>
    </section>
  );
}
