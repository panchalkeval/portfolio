import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      // Calculate the center point of the container
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate the distance from the center
      const deltaX = (e.clientX - centerX) / 20;
      const deltaY = (e.clientY - centerY) / 20;
      
      // Apply parallax effect to elements with data-parallax attribute
      const parallaxElements = containerRef.current.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((element) => {
        const factor = parseFloat((element as HTMLElement).dataset.parallax || "1");
        (element as HTMLElement).style.transform = `translate(${deltaX * factor}px, ${deltaY * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-4 py-16 md:py-0 flex flex-col z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-6">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            <span className="text-gradient">Keval Panchal</span>
            <br />
            <span data-parallax="0.5">Full Stack Developer</span>
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto" data-parallax="0.2">
            I build exceptional digital experiences with modern technologies.
            Specializing in responsive and interactive web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="#projects" 
              className="px-8 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-8 py-3 rounded-lg font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <div className="w-6 h-10 border-2 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-2 bg-foreground mt-1 rounded animate-bounce"></div>                       
          </div>
        </motion.div>
        
    </section>
  );
};

export default Hero;
