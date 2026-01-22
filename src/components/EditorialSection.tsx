import Reveal from '@/components/motion/Reveal';
import { ArrowRight } from 'lucide-react';

const EditorialSection = () => {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Visual Column */}
        <div className="lg:col-span-7 relative">
          <Reveal animation="fade-up" delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden group">
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
              <img 
                src="///IMG:high fashion avant-garde model cyberpunk noir|portrait|grainy///" 
                alt="Editorial Look 01" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-accent/20 -z-10 translate-x-8 translate-y-8" />
            </div>
          </Reveal>

          {/* Floating Secondary Image */}
          <div className="absolute -bottom-12 -right-6 md:-right-12 w-1/2 md:w-2/5 aspect-square z-20 hidden md:block">
            <Reveal animation="fade-left" delay={0.4}>
              <div className="relative h-full w-full p-1 bg-bg border border-accent/30 overflow-hidden">
                <img 
                  src="///IMG:abstract digital glitch fabric texture|square|high-contrast///" 
                  alt="Texture Detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <Reveal animation="fade-left">
            <span className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-6 block">
              Collection _001 / Cyber-Vogue
            </span>
          </Reveal>
          
          <Reveal animation="fade-left" delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.85] mb-8 uppercase italic">
              The <span className="text-accent">Void</span> <br />
              Draped in <br />
              Light.
            </h2>
          </Reveal>

          <Reveal animation="fade-left" delay={0.2}>
            <p className="text-text/70 text-lg md:text-xl leading-relaxed mb-10 max-w-md">
              A radical synthesis of Parisian craftsmanship and neo-tokyo aesthetics. Our garments are programmed to respond to the city's pulse.
            </p>
          </Reveal>

          <Reveal animation="fade-left" delay={0.3}>
            <div className="flex items-center gap-8 group cursor-pointer">
              <div className="relative h-px w-24 bg-accent origin-left transition-transform duration-500 group-hover:scale-x-150" />
              <button className="font-mono text-xs uppercase tracking-widest flex items-center gap-2 hover:text-accent transition-colors">
                View Editorial <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>

          {/* Stats/Meta info at the bottom of text */}
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <Reveal animation="fade-up" delay={0.4}>
              <div>
                <p className="font-mono text-[10px] text-white/40 uppercase mb-2">Location</p>
                <p className="text-sm">Sector 7 / Paris Prime</p>
              </div>
            </Reveal>
            <Reveal animation="fade-up" delay={0.5}>
              <div>
                <p className="font-mono text-[10px] text-white/40 uppercase mb-2">Fabrication</p>
                <p className="text-sm">Liquid Carbon Silk</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Background Text Overlay (Brutalist element) */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 -rotate-90 select-none opacity-[0.03] pointer-events-none hidden xl:block">
        <span className="font-display text-[20rem] leading-none whitespace-nowrap uppercase">
          Axon Noir
        </span>
      </div>
    </section>
  );
};

export default EditorialSection;
