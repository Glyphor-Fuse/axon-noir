import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-bg overflow-hidden flex flex-col justify-end px-6 pb-12 pt-32 md:px-12 md:pb-16 lg:pt-0">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent z-10" />
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="w-full h-full"
        >
          <img 
            src="///IMG:avant-garde digital fashion model glitch brutalist|landscape|dark-noir///" 
            alt="Axon Noir Collection" 
            className="w-full h-full object-cover grayscale brightness-75 contrast-125"
          />
        </motion.div>
        
        {/* Acidic Atmospheric Glows */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/3 -right-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-20 w-full max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          {/* Main Title Section */}
          <div className="lg:col-span-8 flex flex-col">
            <Reveal direction="up" delay={0.2}>
              <div className="flex flex-col space-y-0">
                <span className="font-mono text-xs md:text-sm tracking-[0.4em] text-accent uppercase mb-4 block">
                  Spring/Summer 2077 // Collection
                </span>
                <h1 className="font-display text-[16vw] lg:text-[11vw] leading-[0.8] tracking-tighter uppercase text-text mix-blend-difference">
                  AXON<br />
                  <span className="italic flex items-center">
                    NOIR
                    <span className="inline-block w-[10vw] h-[2px] bg-accent ml-4 hidden lg:block" />
                  </span>
                </h1>
              </div>
            </Reveal>
          </div>

          {/* Descriptive / CTA Section */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-10 lg:pb-8">
            <Reveal direction="up" delay={0.4}>
              <div className="space-y-6">
                <p className="font-mono text-sm md:text-base text-text/60 max-w-sm uppercase tracking-wider leading-relaxed border-l-2 border-accent/30 pl-6">
                  Synthesizing biological grace with algorithmic precision. We define the silhouette of the digital diaspora.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-5 bg-accent text-bg font-display text-lg uppercase tracking-tight flex items-center gap-3 overflow-hidden"
                  >
                    <span className="relative z-10">Enter The Void</span>
                    <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </motion.button>

                  <button className="px-8 py-5 border border-text/20 font-display text-lg uppercase tracking-tight hover:border-accent transition-colors">
                    Archives
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Dynamic Footer Data Bar */}
        <div className="mt-20 lg:mt-32 pt-10 border-t border-text/10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <Reveal direction="up" delay={0.6}>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-accent mb-2 tracking-widest">Protocol</span>
              <span className="text-xl font-display uppercase tracking-tight">Cyber-Couture</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.7}>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-accent mb-2 tracking-widest">Origin</span>
              <span className="text-xl font-display uppercase tracking-tight">Paris // 01.NET</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.8}>
            <div className="flex flex-col hidden lg:flex">
              <span className="text-[10px] font-mono uppercase text-accent mb-2 tracking-widest">Transmission</span>
              <span className="text-xl font-display uppercase tracking-tight">Encrypted_SSL</span>
            </div>
          </Reveal>
          
          <Reveal direction="up" delay={0.9}>
            <div className="flex flex-col items-end text-right">
              <span className="text-[10px] font-mono uppercase text-text/40 mb-2 tracking-widest">Current Status</span>
              <span className="text-xl font-display flex items-center gap-3 uppercase tracking-tight">
                <span className="w-2 h-2 bg-accent animate-pulse rounded-full" />
                Live Feed
              </span>
            </div>
          </Reveal>
        </div>
      </div>
      
      {/* Brutalist Decorative Elements */}
      <div className="absolute top-0 right-0 p-8 hidden lg:block">
        <div className="font-mono text-[10px] leading-tight text-text/20 uppercase vertical-text tracking-[0.5em] [writing-mode:vertical-rl]">
          AXON_NOIR_SYSTEMS // VER_4.0.2 // (C) 2077
        </div>
      </div>
    </section>
  );
};

export default Hero;
