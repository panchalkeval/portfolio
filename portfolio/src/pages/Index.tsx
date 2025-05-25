
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import ThreeScene from '@/components/ThreeScene';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import useRevealAnimation from '@/hooks/useRevealAnimation';

const Index = () => {
  // Initialize reveal animations
  useRevealAnimation();

  // Update page title
  useEffect(() => {
    document.title = 'Keval Panchal | Full Stack Developer';
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <ThreeScene />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
