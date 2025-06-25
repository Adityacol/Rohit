import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Research from './components/Research';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Awards />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;