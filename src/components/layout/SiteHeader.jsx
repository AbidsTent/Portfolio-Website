import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { homeSections } from '../../content/site.js';
import { heroData } from '../../content/profile.js';
import Container from './Container.jsx';

const navigation = homeSections.filter(section => section.id !== 'hero');

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = event => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => {
      if (!desktop.matches) return;
      if (headerRef.current?.querySelector('#mobile-navigation')?.contains(document.activeElement)) {
        headerRef.current?.querySelector('.personal-brand')?.focus();
      }
      setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  const links = navigation.map(section => (
    <a key={section.id} href={`#${section.id}`} onClick={() => setOpen(false)} className={section.id === 'contact' ? 'navigation-contact' : ''}>
      {section.label}{section.id === 'contact' && <ArrowUpRight size={15} aria-hidden="true" />}
    </a>
  ));

  return (
    <header ref={headerRef} className="site-header">
      <a href="#main-content" className="skip-link" onClick={event => {
        event.preventDefault();
        setOpen(false);
        document.getElementById('main-content')?.focus();
      }}>Skip to main content</a>
      <Container className="header-inner">
        <a href="#hero" aria-label={`as. ${heroData.name}, home`} className="personal-brand" onClick={() => setOpen(false)}>
          <span className="brand-initials" aria-hidden="true">as<span>.</span></span>
          <span>{heroData.name}</span>
        </a>
        <nav className="desktop-navigation" aria-label="Main navigation">{links}</nav>
        <button ref={buttonRef} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(value => !value)}>
          <span>{open ? 'Close' : 'Menu'}</span>{open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </Container>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Main navigation" hidden={!open}>{links}</nav>
    </header>
  );
}
