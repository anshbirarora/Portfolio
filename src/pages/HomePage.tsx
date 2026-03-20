import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Youtube from '../components/Youtube';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-accent selection:text-ink">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Youtube />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-accent rounded-full shadow-2xl z-40 flex items-center justify-center group"
      >
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 border-2 border-ink rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-ink rounded-full group-hover:scale-150 transition-transform" />
        </div>
      </motion.button>
    </div>
  );
}
