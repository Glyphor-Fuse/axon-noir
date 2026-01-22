import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialSection from './components/EditorialSection';
import DigitalSilk from './components/DigitalSilk';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-bg text-text selection:bg-accent selection:text-bg min-h-screen font-sans overflow-x-hidden">
      {/* Cinematic Overlay - Grain/Noise */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Navbar />
          
          <main>
            <section id="hero">
              <Hero />
            </section>

            <section id="editorial" className="relative z-10">
              <EditorialSection />
            </section>

            <section id="digital-silk" className="relative z-10 bg-bg">
              <DigitalSilk />
            </section>
          </main>

          <Footer />
        </motion.div>
      </AnimatePresence>

      {/* Background Acid Glow - Fixed Elements */}
      <div className="fixed top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-accent/5 blur-[100px] rounded-full pointer-events-none z-0" />
    </div>
  );
};

export default App;