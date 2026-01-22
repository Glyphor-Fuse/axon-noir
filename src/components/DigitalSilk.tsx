import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from '@/components/motion/Reveal';

const DigitalSilk = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-32 overflow-hidden bg-bg border-y border-white/5"
    >
      {/* Background Kinetic Text Stream */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <motion.div 
          style={{ x: yText }}
          className="text-[25vw] font-black uppercase whitespace-nowrap text-white leading-none tracking-tighter"
        >
          AXON_SYSTEM_VOID_AXON_SYSTEM_VOID_AXON_SYSTEM_VOID
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Visual Canvas */}
          <div className="lg:col-span-7 relative">
            <Reveal overflow={false}>
              <motion.div 
                style={{ scale }}
                className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-neutral-900 border border-white/10"
              >
                <img 
                  src="///IMG:high-fashion digital couture iridescent liquid fabric movement|portrait|editorial///" 
                  alt="Axon Noir Digital Silk"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
                
                {/* Acid Accent Flare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay opacity-60" />
                
                {/* Technical Overlay */}
                <div className="absolute top-4 left-4 p-4 border-l border-t border-accent/40">
                  <span className="block text-[10px] font-mono text-accent uppercase tracking-widest">
                    Fabric_Type: Digital_Silk_V.4
                  </span>
                  <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    Refraction: Kinetic_Mesh
                  </span>
                </div>
              </motion.div>
            </Reveal>

            {/* Floating Detail Card */}
            <motion.div 
              style={{ y: yImage }}
              className="absolute -bottom-12 -right-4 md:-right-12 bg-white text-black p-8 md:p-12 max-w-[280px] shadow-2xl"
            >
              <Reveal>
                <span className="block text-[10px] font-mono mb-4 border-b border-black/10 pb-2 uppercase tracking-[0.2em]">
                  [ 0x_PROTOTYPE ]
                </span>
                <p className="text-sm font-medium leading-tight uppercase mb-6">
                  The intersection of generative code and tactile luxury. A garment that exists between bytes and silk.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-black" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">View Schema</span>
                </div>
              </Reveal>
            </motion.div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-5 pt-12 lg:pt-24">
            <Reveal>
              <h3 className="text-accent font-mono text-xs mb-6 tracking-[0.4em] uppercase">
                // MATERIAL RESEARCH
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-6xl md:text-8xl font-display font-light text-text leading-[0.85] mb-12">
                LIQUID <br />
                <span className="italic text-accent">GHOST</span> <br />
                COUTURE
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-8 max-w-sm">
                <p className="text-text/60 text-lg leading-relaxed font-light">
                  Our Digital Silk is woven from high-frequency data streams, creating a material that reacts to the biometric rhythms of the wearer.
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                  <div>
                    <span className="block text-[10px] font-mono text-white/30 uppercase mb-2">Composition</span>
                    <span className="block text-sm text-text uppercase">98% Data / 2% Silk</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-white/30 uppercase mb-2">Weight</span>
                    <span className="block text-sm text-text uppercase">0.0004 Grams</span>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 text-white hover:text-accent transition-colors duration-300"
                >
                  <span className="text-xs font-mono uppercase tracking-[0.3em]">Explore the Loom</span>
                  <div className="h-[1px] w-12 bg-white/20 group-hover:bg-accent transition-all duration-300" />
                </motion.button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Kinetic Scanner Line */}
      <motion.div 
        animate={{ 
          top: ["0%", "100%"],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute left-0 right-0 h-[1px] bg-accent/30 z-20 pointer-events-none"
      />
    </section>
  );
};

export default DigitalSilk;