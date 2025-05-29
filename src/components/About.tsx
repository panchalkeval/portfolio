
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const animation = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      animation.start('visible');
    }
  }, [isInView, animation]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-16 relative bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80"></div>
      <div className="section-container relative z-10" ref={containerRef}>
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={variants}
          initial="hidden"
          animate={animation}
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-4">
              I am Keval Panchal, a passionate full-stack developer with a strong focus on front-end development. 
              I specialize in building responsive web apps that blend great design with strong technical performance.
            </p>
            
            <p className="text-lg text-foreground/80 mb-6">
              I've been coding since 2019 and recently completed my Bachelor of Engineering in Computer Engineering. 
              I actively learn new technologies and stay updated with industry trends to build modern and effective solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-bold mb-2">Education</h3>
                <p className="text-foreground/70">B.Tech. in Computer Engineering</p>
                <p className="text-foreground/70">Parul university - 2021</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Experience</h3>
                <p className="text-foreground/70">4+ Years Coding Experience</p>
                <p className="text-foreground/70">1+ Years Professional Work</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-2 rounded-lg font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
            >
              Let's Talk
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="glass-panel p-6 rounded-2xl overflow-hidden">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="images/profile/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-6 glass-panel p-6 rounded-xl">
                <div className="flex justify-between mb-4">
                  <div>
                    <h3 className="font-bold">Keval Panchal</h3>
                    <p className="text-sm text-foreground/70">Full Stack Developer</p>
                  </div>
                  <div className="flex space-x-3">
                    <a href="https://www.linkedin.com/in/keval-panchal-b0278a240" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="https://github.com/panchalkeval" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-foreground/70">Location</p>
                    <p className="font-medium">Gujarat, India</p>
                  </div>

                  <div className="w-full">
                  <p className="text-sm text-foreground/70">Email</p>
                  <p className="font-medium break-words md:whitespace-nowrap">
                    kevalpanchal0602@gmail.com
                  </p>
                </div>
                
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
