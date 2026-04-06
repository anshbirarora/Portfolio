import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Youtube from '../components/Youtube';
import Contact from '../components/Contact';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Youtube as YoutubeIcon } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isHovered, setIsHovered] = useState(false);

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

      {/* YouTube Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-[70] flex flex-col items-end">
        <AnimatePresence>
          {isHovered && (
            <motion.a
              href="https://youtu.be/qvN6r3tGa8Q?si=ilgNXzx7Z11sdcnn"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="mb-4 p-4 bg-paper rounded-2xl shadow-2xl flex items-center gap-3 cursor-pointer border border-ink/5"
            >
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <YoutubeIcon className="text-ink" size={20} />
              </div>
              <div className="pr-4">
                <span className="block text-[10px] font-bold uppercase tracking-tighter opacity-50">Youtube</span>
                <span className="block text-xs font-bold whitespace-nowrap">Latest Uploads</span>
              </div>
            </motion.a>
          )}
        </AnimatePresence>

        <motion.a
          href="https://youtu.be/qvN6r3tGa8Q?si=ilgNXzx7Z11sdcnn"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-[#FF0000] rounded-full shadow-2xl flex items-center justify-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <YoutubeIcon size={28} className="text-white relative z-10" />
          
          {/* Animated Ring */}
          <motion.div 
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-4 border-white/30 rounded-full"
          />
        </motion.a>
      </div>
    </div>
  );
}
