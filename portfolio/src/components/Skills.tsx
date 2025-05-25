
import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const skills = [
  { 
    category: "Frontend", 
    technologies: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ]
  },
  { 
    category: "Backend", 
    technologies: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 75 },
    ]
  },
  { 
    category: "Frameworks/Libraries", 
    technologies: [
      { name: "Material UI", level: 80 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Redux", level: 70 },
      { name: "Bootstrap", level: 80 },
    ]
  },
  { 
    category: "Other", 
    technologies: [
      { name: "Git", level: 85 },
      { name: "RESTful API", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "Figma", level: 80 },
    ]
  },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start('visible');
    }
  }, [isInView, animation]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
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
    <section id="skills" className="py-16 relative bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80"></div>
      <div ref={containerRef} className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mt-4">
            Specialized in creating responsive and interactive web applications with modern technologies
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={animation}
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div 
              key={groupIndex}
              className="glass-panel p-6 rounded-xl"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
              
              <div className="space-y-6">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <div className="flex justify-between mb-2">
                      <span>{tech.name}</span>
                      <span>{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${tech.level}%` : 0 }}
                        transition={{ duration: 1, delay: 0.2 * techIndex }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={animation}
        >
          <motion.div variants={itemVariants} className="glass-panel p-6 rounded-xl">
            <div className="text-4xl font-bold mb-2 text-gradient">4+</div>
            <div className="text-foreground/80">Years Coding</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-panel p-6 rounded-xl">
            <div className="text-4xl font-bold mb-2 text-gradient">9+</div>
            <div className="text-foreground/80">Projects Completed</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-panel p-6 rounded-xl">
            <div className="text-4xl font-bold mb-2 text-gradient">1+</div>
            <div className="text-foreground/80">Years Experience</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-panel p-6 rounded-xl">
            <div className="text-4xl font-bold mb-2 text-gradient">4</div>
            <div className="text-foreground/80">Technologies</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
