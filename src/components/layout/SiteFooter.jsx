import { ArrowUp } from 'lucide-react';
import { heroData } from '../../content/profile.js';
import Container from './Container.jsx';

export default function SiteFooter({ isHome }) {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <p>© {new Date().getFullYear()} {heroData.name}</p>
        <a href={isHome ? '#hero' : '#projects'}>{isHome ? 'Back to top' : 'Back to projects'}<ArrowUp size={16} aria-hidden="true" /></a>
      </Container>
    </footer>
  );
}
