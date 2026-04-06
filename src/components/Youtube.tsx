import { motion } from 'motion/react';
import { ArrowRight, Youtube as YoutubeIcon } from 'lucide-react';

const youtubeVideos = [
  { 
    id: '01', 
    title: 'Rumour Hindi', 
    url: 'https://youtube.com/@rumourhindi?si=eNivIYem3yYvpdzF',
    views: 'Primary Creative Hub', 
    date: 'High-Production Narratives',
    profilePic: 'https://i.ibb.co/G3CxV4g9/1772851292127.png'
  },
  { 
    id: '02', 
    title: 'Rumour Plays', 
    url: 'https://youtube.com/@rumourplays?si=v59JkOUuwxbKdW2D',
    views: 'Technical Lab', 
    date: 'Interactive & Live Content',
    profilePic: 'https://i.ibb.co/S4HRbzxH/Picsart-26-03-21-09-55-28-315.png'
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

const aiWorks = [
  { 
    id: 1, 
    video: 'https://drive.google.com/file/d/1nFXBpJLZ7irIUm6autbiS2pxaZwMNcGU/view?usp=drive_link', 
    thumbnail: 'https://i.ibb.co/Nd8VpMHL/Whats-App-Image-2026-04-05-at-11-58-02-PM-1.jpg', 
    title: 'AI Exploration 01' 
  },
  { 
    id: 2, 
    video: 'https://drive.google.com/file/d/1lVf9ehxSeQ0JZj9zj60o2999FUUH9x6a/view?usp=drive_link', 
    thumbnail: 'https://i.ibb.co/HfgK6bVq/Whats-App-Image-2026-04-05-at-11-58-02-PM.jpg', 
    title: 'AI Exploration 02' 
  },
  { 
    id: 3, 
    video: 'https://drive.google.com/file/d/1YzjWcDulEHjSi21A_eEheUKuTr7O0EwW/view?usp=drive_link', 
    thumbnail: 'https://i.ibb.co/TBpn64G4/Whats-App-Image-2026-04-05-at-11-58-01-PM.jpg', 
    title: 'AI Exploration 03' 
  },
  { 
    id: 4, 
    video: 'https://drive.google.com/file/d/1d_oo7848haezUuQMVPN2bsth0jViHRl5/view?usp=drive_link', 
    thumbnail: 'https://i.ibb.co/VYCYjtCs/Whats-App-Image-2026-04-06-at-12-16-40-AM.jpg', 
    title: 'AI Exploration 04' 
  },
];

const ytVideos = [
  {
    id: 1,
    url: 'https://youtu.be/qvN6r3tGa8Q?si=dYxrj3Xtecfvg9OH',
    thumbnail: 'https://i.ibb.co/5gMNvG2n/2026-04-06-15-34-09-jpg.jpg',
    title: 'Featured Video',
    language: 'English'
  },
  {
    id: 2,
    url: 'https://youtu.be/G93Zoc1bQO8?si=bq-Ri2bWYu7rCY7z',
    thumbnail: 'https://i.ibb.co/GBnj0Z9/2026-04-06-15-43-46-jpg.jpg',
    title: 'Second Video',
    language: 'English'
  },
  {
    id: 3,
    url: 'https://youtu.be/sEP9NldTimk?si=yCsQXRm43BvrzB-B',
    thumbnail: 'https://img.youtube.com/vi/sEP9NldTimk/maxresdefault.jpg',
    title: 'Third Video',
    language: 'English'
  },
  {
    id: 4,
    url: 'https://youtu.be/rgHUOumamJo?si=wwQQAPvmfxzUZkUi',
    thumbnail: 'https://i.ibb.co/TD3x0Jb7/Whats-App-Image-2026-04-06-at-4-47-23-PM.jpg',
    title: 'Fourth Video',
    language: 'Hindi'
  },
  {
    id: 5,
    url: 'https://youtu.be/f8qHT1CjhQc?si=_JBaAZSK4E9bNAOk',
    thumbnail: 'https://i.ibb.co/GQnS83wv/Whats-App-Image-2026-04-06-at-4-51-31-PM.jpg',
    title: 'Fifth Video',
    language: 'Hindi'
  },
  {
    id: 6,
    url: 'https://youtu.be/nAu4ipql3Uw?si=SoTVkD_RHnQtYKdj',
    thumbnail: 'https://i.ibb.co/V0XtTVXn/Whats-App-Image-2026-04-06-at-4-53-03-PM.jpg',
    title: 'Sixth Video',
    language: 'Hindi'
  }
];

export default function Youtube() {
  return (
    <section className="pb-32 pt-0 px-6 md:px-12 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-4 mb-4"
          >
            <YoutubeIcon size={32} className="text-[#FF0000]" />
            <h3 className="text-3xl md:text-4xl font-display italic">Youtube Content</h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-60 font-display italic max-w-3xl"
          >
            Where creative humor meets professional precision. My filmmaking journey began in childhood, evolving into a diverse portfolio that spans high-energy entertainment and sophisticated cinematic branding. This archive serves as definitive proof of my versatility and long-standing commitment to visual excellence.
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
              <div className="flex items-center gap-6 md:gap-12">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold opacity-30">{item.id}</span>
                  {item.profilePic && (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-ink/10 flex-shrink-0">
                      <img 
                        src={item.profilePic} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>
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

        {/* YT Videos Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:text-left"
          >
            <h3 className="text-4xl md:text-5xl font-display italic mb-4">YT Videos</h3>
            <div className="w-20 h-1 bg-accent mx-auto md:mx-0" />
          </motion.div>

          {/* English Videos */}
          <div className="mb-16">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-[0.3em] opacity-40 mb-8"
            >
              English
            </motion.h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ytVideos.filter(v => v.language === 'English').map((video, i) => (
                <motion.a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-video bg-ink/5 rounded-2xl overflow-hidden border border-ink/10 group relative block"
                >
                  <div className="absolute inset-0 bg-ink/40 opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#FF0000]/90 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                      <YoutubeIcon size={24} className="text-white" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Hindi Videos */}
          <div>
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-[0.3em] opacity-40 mb-8"
            >
              Hindi
            </motion.h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ytVideos.filter(v => v.language === 'Hindi').map((video, i) => (
                <motion.a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-video bg-ink/5 rounded-2xl overflow-hidden border border-ink/10 group relative block"
                >
                  <div className="absolute inset-0 bg-ink/40 opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#FF0000]/90 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                      <YoutubeIcon size={24} className="text-white" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
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

        {/* AI Explorations Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:text-left"
          >
            <h3 className="text-4xl md:text-5xl font-display italic mb-4">
              AI Explorations (Video)
              <span className="text-sm md:text-base font-sans ml-4 opacity-50 font-normal lowercase tracking-normal italic block md:inline">
                (Click to view videos)
              </span>
            </h3>
            <div className="w-20 h-1 bg-accent mx-auto md:mx-0" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto md:mx-0">
            {aiWorks.map((work, i) => (
              <motion.a
                key={work.id}
                href={work.video}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${i === 3 ? 'aspect-video' : 'aspect-square'} bg-ink/5 rounded-2xl overflow-hidden border border-ink/10 group relative block ${i === 3 ? 'lg:col-start-2' : ''}`}
              >
                <div className="absolute inset-0 bg-ink/40 opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  {work.thumbnail && (
                    <img 
                      src={work.thumbnail} 
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="relative z-10 w-12 h-12 rounded-full bg-accent/80 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                    <YoutubeIcon size={24} className="text-ink" />
                  </div>
                </div>
                {/* Fallback if no thumbnail */}
                {!work.thumbnail && (
                  <div className="w-full h-full flex items-center justify-center bg-ink/5">
                    <YoutubeIcon size={48} className="opacity-10" />
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
