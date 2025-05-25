
import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Image } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
    alt: "Professional workspace setup",
    title: "Workspace"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
    alt: "Modern laptop setup",
    title: "Development"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    alt: "Creative workspace",
    title: "Design Process"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    alt: "Technology and coding",
    title: "Coding"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
    alt: "Web development",
    title: "Web Development"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    alt: "Project planning",
    title: "Planning"
  }
];

const Photos = () => {
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="photos" className="py-12 relative bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background/80"></div>
      <div ref={containerRef} className="section-container relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Visual Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mt-4">
            Capturing moments from my development journey and creative process
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={animation}
        >
          {photos.map((photo) => (
            <motion.div 
              key={photo.id}
              className="group relative overflow-hidden rounded-xl glass-panel"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Image size={16} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-foreground/70 max-w-lg mx-auto">
            Each image tells a story of innovation, creativity, and the passion that drives my work in web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Photos;
