import { motion } from 'motion/react';

export default function About() {
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
              <img 
                src="https://i.ibb.co/Y4mZHb6Z/Picsart-26-03-21-00-15-07-337.png" 
                alt="Portrait"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
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
            I believe that every frame tells a story, and every story is a piece of visual poetry. My philosophy is rooted in minimalism, where the silence between the shots is as important as the shots themselves.
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
