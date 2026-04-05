import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const images = [
  "https://i.ibb.co/Y4mZHb6Z/Picsart-26-03-21-00-15-07-337.png",
  "https://i.ibb.co/GvSmt5ZX/1775415572022.png",
  "https://i.ibb.co/KxgGTfyR/Picsart-26-04-05-23-12-12-111.png"
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-32 bg-ink text-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-150" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-paper/10">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={images[currentImageIndex]}
                  src={images[currentImageIndex]} 
                  alt="Portrait"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
            
            {/* Decorative Crosshairs */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-accent" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl mb-8"
          >
            About Anshbir Singh
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-paper/60 leading-relaxed"
          >
            I believe that every frame tells a story, and every story is a piece of visual poetry. With a highly skilled professional background, I am uniquely adaptive—seamlessly transitioning my style to represent everything from high-end enterprise and serious productions to vibrant social media content and casual, authentic storytelling.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Cinematic", desc: "Crafting experiences that feel like high-end film productions." },
            { title: "Editing", desc: "Expert post-production using industry-standard tools like DaVinci Resolve, Premiere Pro, and After Effects." },
            { title: "Minimal", desc: "Stripping away the noise to reveal the core essence of the subject." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-8 rounded-3xl border border-paper/5 hover:border-accent/30 transition-colors group"
            >
              <span className="block text-accent text-xs font-bold uppercase tracking-widest mb-4">0{i+1}</span>
              <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-sm text-paper/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
