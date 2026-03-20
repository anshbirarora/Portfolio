import { motion } from 'motion/react';
import { ArrowRight, Youtube as YoutubeIcon } from 'lucide-react';

const youtubeVideos = [
  { 
    id: '01', 
    title: 'Rumour Hindi', 
    url: 'https://youtube.com/@rumourhindi?si=eNivIYem3yYvpdzF',
    views: 'Main Channel', 
    date: 'Hindi Content' 
  },
  { 
    id: '02', 
    title: 'Rumour Plays', 
    url: 'https://youtube.com/@rumourplays?si=v59JkOUuwxbKdW2D',
    views: 'Tech Channel', 
    date: 'Plays & Streams' 
  },
];

const thumbnails = [
  { id: 1, image: 'https://i.ibb.co/d4S797qp/N4-KMx-KRA8-GY-HD-jpg.jpg' },
  { id: 2, image: 'https://i.ibb.co/0Hkbnd6/Whats-App-Image-2026-03-20-at-11-52-36-PM.jpg' },
  { id: 3, image: 'https://i.ibb.co/ks51gGmK/2026-03-21-00-01-09-jpg.jpg' },
  { id: 4, image: 'https://i.ibb.co/Wpp2HwV5/2026-03-21-00-01-28-jpg.jpg' },
  { id: 5, image: 'https://i.ibb.co/S7cLngMg/v-Agi-H0-COp-SA-HD-jpg.jpg' },
  { id: 6, image: 'https://i.ibb.co/nMgC0Fsn/2026-03-21-00-01-37-jpg.jpg' },
];

export default function Youtube() {
  return (
    <section id="youtube" className="py-32 px-6 md:px-12 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl mb-4 flex items-center justify-center md:justify-start gap-4"
          >
            <YoutubeIcon size={48} className="text-accent md:w-16 md:h-16" />
            <span>Youtube</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-60 font-display italic"
          >
            Look more at my work on my youtube channel
          </motion.p>
        </div>

        <div className="space-y-0">
          {youtubeVideos.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-ink/10 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-ink/[0.02] transition-colors px-4 rounded-xl"
            >
              <div className="flex items-center gap-8 md:gap-16">
                <span className="text-sm font-bold opacity-30">{item.id}</span>
                <div>
                  <h3 className="text-2xl md:text-4xl font-display italic group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
                <div className="text-right md:text-left">
                  <span className="block text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Channel Info</span>
                  <span className="text-sm font-medium">{item.views} • {item.date}</span>
                </div>
                
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ink/20 hover:bg-ink hover:text-paper transition-all group/btn"
                >
                  <span className="text-xs font-bold uppercase tracking-widest">Visit Channel</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Thumbnails Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:text-left"
          >
            <h3 className="text-4xl md:text-5xl font-display italic mb-4">Thumbnails</h3>
            <div className="w-20 h-1 bg-accent mx-auto md:mx-0" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {thumbnails.map((thumb, i) => (
              <motion.div
                key={thumb.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-video bg-ink/5 rounded-2xl overflow-hidden border border-ink/10 group relative flex items-center justify-center"
              >
                {thumb.image ? (
                  <img 
                    src={thumb.image} 
                    alt={`Thumbnail ${thumb.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-20 group-hover:opacity-40 transition-opacity">
                    Thumbnail Placeholder {thumb.id}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
