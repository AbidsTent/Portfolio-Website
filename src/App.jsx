import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Main App component - renders all sections
export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
