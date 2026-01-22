import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'COLLECTIONS', href: '#' },
    { name: 'THE ATELIER', href: '#' },
    { name: 'ARCHIVE', href: '#' },
    { name: 'CONNECT', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Reveal overflowHidden={false}>
          <a 
            href="/" 
            className="text-2xl md:text-3xl font-display font-bold tracking-tighter hover:text-accent transition-colors duration-300"
          >
            AXON NOIR
          </a>
        </Reveal>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link, index) => (
            <Reveal key={link.name} delay={index * 0.1}>
              <a
                href={link.href}
                className="text-xs font-mono tracking-[0.2em] hover:text-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </Reveal>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          <Reveal delay={0.4}>
            <button className="hover:text-accent transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
          </Reveal>
          <Reveal delay={0.5}>
            <button className="hover:text-accent transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
            </button>
          </Reveal>
          
          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-bg z-40 flex flex-col items-center justify-center space-y-8 lg:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-bold tracking-tighter hover:text-accent transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsOpen(false)}
              className="mt-12 p-4 border border-white/20 rounded-full hover:border-accent transition-colors"
            >
              <X size={32} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
