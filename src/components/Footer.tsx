import { motion } from 'framer-motion';
import { Instagram, Twitter, Disc as Discord, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg border-t border-white/10 pt-24 pb-12 overflow-hidden text-text">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Structural Accents */}
      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          
          {/* Brand Manifesto Section */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] mb-8">
                AXON<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">NOIR™</span>
              </h2>
              <p className="text-text/60 max-w-sm font-mono text-xs uppercase tracking-[0.15em] leading-relaxed">
                A digital couture house synthesizing high-fashion editorial aesthetics with brutalist kinetic energy. 
                Redefining the silhouette of the digital frontier for the post-human era.
              </p>
            </motion.div>

            <div className="flex gap-4">
              {[
                { icon: <Instagram size={18} />, label: 'Instagram' },
                { icon: <Twitter size={18} />, label: 'X (Twitter)' },
                { icon: <Discord size={18} />, label: 'Discord' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.8)' }}
                  className="w-14 h-14 flex items-center justify-center border border-white/10 transition-colors bg-white/[0.02]"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 pt-4">
            <div className="space-y-8">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30">Atelier</h3>
              <ul className="space-y-4">
                {['Collections', 'Archive', 'Bespoke', 'Process'].map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-white transition-colors">
                      <span className="text-text/60 group-hover:text-text">{item}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30">Protocol</h3>
              <ul className="space-y-4">
                {['Shipping', 'Returns', 'Privacy', 'Security'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm uppercase tracking-[0.2em] text-text/60 hover:text-text transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-8">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30">Transmissions</h3>
              <div className="relative">
                <p className="text-[10px] font-mono uppercase text-text/40 mb-4 tracking-wider">
                  Subscribe for drop alerts and architectural updates.
                </p>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="ENTER_IDENTITY"
                    className="w-full bg-transparent border-b border-white/10 py-4 font-mono text-[10px] focus:outline-none focus:border-white transition-colors uppercase tracking-widest placeholder:text-white/20"
                  />
                  <button className="absolute right-0 bottom-4 text-[10px] font-mono text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Infrastructure Details */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-12 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">Core System v2.0.77 — Stable</span>
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
              &copy; {currentYear} AXON NOIR COUTURE / ALL RIGHTS RESERVED
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 text-[9px] font-mono uppercase tracking-[0.3em] text-white/20">
            <span>Terminal: Paris / Neo-District 09</span>
            <span>Latency: 14ms / Data Encrypted</span>
          </div>
        </div>
      </div>

      {/* Extreme Kinetic Typography Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none translate-y-1/2">
        <span className="text-[30vw] font-display font-black leading-none uppercase block">
          DIGITAL COUTURE
        </span>
      </div>
    </footer>
  );
};

export default Footer;
