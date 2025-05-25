
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-background/80 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-gradient">KEVAL PANCHAL</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium text-foreground/80 hover:text-primary transition-colors">Home</a>
          <a href="#about" className="font-medium text-foreground/80 hover:text-primary transition-colors">About</a>
          <a href="#projects" className="font-medium text-foreground/80 hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="font-medium text-foreground/80 hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="font-medium text-foreground/80 hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel m-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4 p-6">
            <a href="#home" className="font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="font-medium text-foreground/80" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="font-medium text-foreground/80" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#skills" className="font-medium text-foreground/80" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
            <a href="#contact" className="font-medium text-foreground/80" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
