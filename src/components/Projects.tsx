
import { useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hindu Scriptures",
    description: "Hindu Scriptures is a comprehensive platform for exploring and learning about Hindu texts and scriptures.",    
    image: "/images/projects/hindu scriptures.png",
    tags: ["Html", "CSS", "Java Script", "Express"],
    demoUrl: "https://hinduscriptures.onrender.com/",
    codeUrl: "https://github.com/panchalkeval/Search-Engine"
  },
  {
    id: 2,
    title: "Fit Life",
    description: "Fit Life is a fitness and health application that helps users track their workouts and nutrition.",
    image: "/images/projects/fit-life.png",
    tags: ["React", "CSS", "Node.js","API Integration", "MongoDB"],
    demoUrl: "https://fitlife-khaki.vercel.app",
    codeUrl: "https://github.com/panchalkeval/FITLIFE.git"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "Modern portfolio website built with React and Framer Motion for smooth animations.",
    image: "/images/projects/portfolio.png",
    tags: ["React", "JavaScript", "CSS", "Framer Motion"],
    demoUrl: "https://panchalkeval.netlify.app/",
    codeUrl: "https://github.com/panchalkeval/portfolio"
  },
  {
    id: 4,
    title: "Music App",
    description: "A simple and easy-to-use music app to listen to songs, make playlists, and get song suggestions you’ll love.",
    image: "/images/projects/music.jpg",
    tags: ["Html", "CSS", "JavaScript"],
    demoUrl: "https://github.com/panchalkeval/music-app",
    codeUrl: "https://github.com/panchalkeval/music-app"
  }
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const animation = useAnimation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section id="projects" className="py-16 relative">
      <div className="section-container" ref={containerRef}>
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mt-4">
            Explore my latest work showcasing modern web applications and creative digital solutions
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={projectVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="glass-panel overflow-hidden border-0 group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-2 flex-wrap mb-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6 pt-4">
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button variant="ghost" className="group" asChild>
            <a href="https://github.com/panchalkeval" target="_blank" rel="noopener noreferrer">
              <span>View All Projects</span>
              <svg 
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
