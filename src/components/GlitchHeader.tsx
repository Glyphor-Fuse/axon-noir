import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const GlitchHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const glitchVariants = {
    initial: { x: 0, opacity: 1 },
    hover: {
      x: [0, -2, 2, -1, 1, 0],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: "mirror" as const,
      }
    }
  };

  const navLinks = [
    { name: 'COLLECTIONS', href: '#' },
    { name: 'ARCHIVE', href: '#' },
    { name: 'LAB', href: '#' },
    { name: 'CONTACT', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12">
      <nav className="flex justify-between items-center max-w-[1800px] mx-auto">
        {/* Brand Identity */}
        <motion.div 
          className="relative group cursor-pointer"
          whileHover="hover"
          initial="initial"
        >
          <motion.div 
            className="flex flex-col"
            variants={glitchVariants}
          >
            <span className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-white leading-none">
              AXON
            </span>
            <span className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-white leading-none ml-4">
              NOIR
            </span>
          </motion.div>
          
          {/* Glitch Overlay Layers */}
          <motion.div 
            className="absolute top-0 left-0 flex flex-col opacity-0 group-hover:opacity-70 -z-10 translate-x-1 text-cyan-400"
            variants={glitchVariants}
            aria-hidden="true"
          >
            <span className="text-2xl md:text-3xl font-display font-bold tracking-tighter leading-none">AXON</span>
            <span className="text-2xl md:text-3xl font-display font-bold tracking-tighter leading-none ml-4">NOIR</span>
          </motion.div>
          
          <motion.div 
            className="absolute top-0 left-0 flex flex-col opacity-0 group-hover:opacity-70 -z-10 -translate-x-1 text-rose-500"
            variants={glitchVariants}
            aria-hidden="true"
          >
            <span className="text-2xl md:text-3xl font-display font-bold tracking-tighter leading-none">AXON</span>
            <span className="text-2xl md:text-3xl font-display font-bold tracking-tighter leading-none ml-4">NOIR</span>
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-[10px] font-mono tracking-[0.4em] text-white/70 hover:text-white transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
          
          <button className="ml-4 px-8 py-3 bg-white text-black text-[10px] font-mono font-bold tracking-[0.2em] hover:bg-zinc-200 transition-all duration-300">
            ESTABLISH_LINK
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-black z-40 flex flex-col items-start justify-center p-12 gap-8 md:hidden"
      >
        {navLinks.map((link, idx) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
            transition={{ delay: idx * 0.1 }}
            className="text-5xl font-display font-bold tracking-tighter text-white hover:italic"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </motion.a>
        ))}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-[10px] font-mono tracking-[0.5em] text-zinc-500"
        >
          © 2077 AXON NOIR CORP
        </motion.div>
      </motion.div>
    </header>
  );
};

export default GlitchHeader;
