import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import { ArrowLeft, Youtube as YoutubeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Rumourcast Intro",
    category: "Motion Branding",
    video: "https://drive.google.com/file/d/1EkBtQTiNp-hglyWyXYtSmuZZH8K8TQe7/preview",
    downloadUrl: "https://drive.google.com/file/d/1EkBtQTiNp-hglyWyXYtSmuZZH8K8TQe7/view?usp=sharing",
    overlayImage: "https://i.ibb.co/PvHH6m41/Picsart-26-03-20-20-42-44-745-jpg.jpg",
    size: "large"
  },
  {
    title: "",
    category: "Motion Branding",
    video: "https://drive.google.com/file/d/1lxbWZ4Sw63gDtVt6josRRqjEsIkBwmDG/preview",
    downloadUrl: "https://drive.google.com/file/d/1lxbWZ4Sw63gDtVt6josRRqjEsIkBwmDG/view?usp=drive_link",
    overlayImage: "https://i.ibb.co/DHxB1KTz/Picsart-26-03-20-20-44-00-079-jpg.jpg",
    size: "small"
  },
  {
    title: "Rumourcast Outro",
    category: "Motion Branding",
    video: "https://drive.google.com/file/d/110nOG_cA_AA2phvB8NAVa3oJkq2V_TPp/preview",
    downloadUrl: "https://drive.google.com/file/d/110nOG_cA_AA2phvB8NAVa3oJkq2V_TPp/view?usp=drive_link",
    overlayImage: "https://i.ibb.co/xtXbKKxX/Picsart-26-03-20-21-04-27-328-jpg.jpg",
    size: "small"
  },
  {
    title: "The Silent Watcher",
    category: "Cinematics",
    video: "https://drive.google.com/file/d/1DIsDOAoYgBwhwBkYSTZehrFhcjEBT9BR/preview",
    downloadUrl: "https://drive.google.com/file/d/1DIsDOAoYgBwhwBkYSTZehrFhcjEBT9BR/view?usp=drive_link",
    overlayImage: "https://i.ibb.co/qYKnhzGz/Picsart-26-03-20-21-31-45-731-jpg.jpg",
    size: "accent"
  },
  {
    title: "Midnight Echoes",
    category: "Cinematics",
    video: "https://drive.google.com/file/d/1cta1i_6HcolO-jwauCl3SCha7PUkRB0G/preview",
    downloadUrl: "https://drive.google.com/file/d/1cta1i_6HcolO-jwauCl3SCha7PUkRB0G/view?usp=drive_link",
    overlayImage: "https://i.ibb.co/0VvYPZVg/Picsart-26-03-20-21-46-33-739-jpg.jpg",
    size: "small"
  },
  {
    title: "Unboxing 01",
    category: "Unboxings",
    image: "https://i.ibb.co/mVF2RCYc/Picsart-26-03-20-21-58-39-278-jpg.jpg",
    overlayImage: "https://i.ibb.co/mVF2RCYc/Picsart-26-03-20-21-58-39-278-jpg.jpg",
    size: "small"
  },
  {
    title: "Unboxing 02",
    category: "Unboxings",
    image: "https://i.ibb.co/Nd3CwKwS/Picsart-26-03-20-21-59-19-528-jpg.jpg",
    overlayImage: "https://i.ibb.co/Nd3CwKwS/Picsart-26-03-20-21-59-19-528-jpg.jpg",
    size: "small"
  },
  {
    title: "Unboxing 03",
    category: "Unboxings",
    image: "https://i.ibb.co/Jj2hwp46/Picsart-26-03-20-21-59-48-308-jpg.jpg",
    overlayImage: "https://i.ibb.co/Jj2hwp46/Picsart-26-03-20-21-59-48-308-jpg.jpg",
    size: "small"
  }
];

const thumbnails = [
  { id: 1, image: 'https://i.ibb.co/d4S797qp/N4-KMx-KRA8-GY-HD-jpg.jpg' },
  { id: 2, image: 'https://i.ibb.co/0Hkbnd6/Whats-App-Image-2026-03-20-at-11-52-36-PM.jpg' },
  { id: 3, image: 'https://i.ibb.co/ks51gGmK/2026-03-21-00-01-09-jpg.jpg' },
  { id: 4, image: 'https://i.ibb.co/Wpp2HwV5/2026-03-21-00-01-28-jpg.jpg' },
  { id: 5, image: 'https://i.ibb.co/S7cLngMg/v-Agi-H0-COp-SA-HD-jpg.jpg' },
  { id: 6, image: 'https://i.ibb.co/nMgC0Fsn/2026-03-21-00-01-37-jpg.jpg' },
];

const clientWorks = [
  { 
    id: 1, 
    video: 'https://drive.google.com/file/d/1YXPrhdys4-f10thbKxXJkuMM07cv2rzw/view?usp=drive_link',
    thumbnail: 'https://i.ibb.co/2YLxyFC8/Whats-App-Image-2026-04-05-at-11-35-18-PM.jpg'
  },
  { 
    id: 2, 
    video: 'https://drive.google.com/file/d/1SMFQYZif9AP888uNIFlWob3CKb9RgoIB/view?usp=drive_link',
    thumbnail: 'https://i.ibb.co/pjdWYkHP/Whats-App-Image-2026-04-05-at-11-40-49-PM.jpg'
  },
  { 
    id: 3, 
    video: 'https://drive.google.com/file/d/1NuwAvdIEB6iT9YCd3Fv6TrKZG9KWQE4E/view?usp=drive_link',
    thumbnail: 'https://i.ibb.co/XxKkysFy/1775412921751.png'
  },
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

export default function PortfolioPage() {
  const categories = ["Motion Branding", "Cinematics", "Unboxings"];

  return (
    <div className="bg-paper min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mb-12">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl"
            >
              Full Work Archive
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-xs text-sm text-ink/50 uppercase tracking-widest font-bold"
            >
              Explore the complete collection of visual storytelling and creative direction.
            </motion.p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-24 last:mb-0">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-display">
                  {category} {category === 'Unboxings' ? '(Images)' : '(Video)'}
                  <span className="text-sm md:text-base font-sans ml-4 opacity-50 font-normal lowercase tracking-normal italic">
                    {category === 'Unboxings' ? 'Unwrapped & Reviewed' : '(Click to view videos)'}
                  </span>
                </h2>
                <div className="h-px flex-1 bg-ink/10" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">
                  {projects.filter(p => p.category === category).length} Projects
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project => project.category === category)
                  .map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`group relative rounded-[32px] overflow-hidden cursor-pointer ${
                        project.size === 'large' ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                      } ${project.size === 'accent' ? 'bg-accent' : 'bg-ink/5'}`}
                    >
                      {project.video ? (
                        <div className={`w-full h-full ${project.category === 'Unboxings' ? 'aspect-video' : 'aspect-square'} relative group/video`}>
                          <iframe 
                            src={project.video} 
                            className="w-full h-full border-0"
                            allow="autoplay"
                            referrerPolicy="no-referrer"
                          />
                          <a 
                            href={project.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 opacity-100 transition-opacity duration-300 backdrop-blur-sm overflow-hidden group/overlay"
                          >
                            <img 
                              src={(project as any).overlayImage || "https://i.ibb.co/DHxB1KTz/Picsart-26-03-20-20-44-00-079-jpg.jpg"} 
                              alt="Download Link"
                              className={`absolute inset-0 w-full h-full object-cover ${project.category === 'Unboxings' ? 'aspect-video' : 'aspect-square'}`}
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-ink/20 group-hover/overlay:bg-transparent transition-colors duration-500 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center shadow-xl transform group-hover/overlay:scale-110 transition-transform duration-500">
                                <YoutubeIcon size={24} className="text-ink" />
                              </div>
                            </div>
                          </a>
                        </div>
                      ) : project.size !== 'accent' ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            project.category === 'Unboxings' 
                              ? 'aspect-video' 
                              : 'grayscale group-hover:grayscale-0 group-hover:scale-110 aspect-square'
                          }`}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className={`w-full h-full ${project.category === 'Unboxings' ? 'aspect-video' : 'aspect-square'} flex flex-col items-center justify-center p-12 text-center`}>
                          <div className="w-20 h-20 rounded-full border-2 border-ink/20 flex items-center justify-center mb-6">
                            <div className="w-2 h-2 bg-ink rounded-full animate-ping" />
                          </div>
                          <h3 className="text-3xl mb-2">Featured Work</h3>
                          <p className="text-sm opacity-60">Explore the latest creative direction</p>
                        </div>
                      )}

                      <div className={`absolute inset-0 ${
                        project.category === 'Motion Branding' || project.category === 'Unboxings' || project.category === 'Cinematics'
                          ? 'opacity-100' 
                          : 'bg-ink/40 opacity-0 group-hover:opacity-100'
                      } transition-opacity duration-500 flex flex-col justify-end p-8 ${project.video ? 'pointer-events-none' : ''}`}>
                        <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                        <h3 className={`${(project as any).titleColor === 'black' ? 'text-ink' : 'text-paper'} text-2xl font-display`}>{project.title}</h3>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}

          {/* Thumbnails Section */}
          <div className="mt-32">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-display">Thumbnails</h2>
              <div className="h-px flex-1 bg-ink/10" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">
                {thumbnails.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {thumbnails.map((thumb, i) => (
                <motion.div
                  key={thumb.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-video bg-ink/5 rounded-[32px] overflow-hidden border border-ink/10 group relative flex items-center justify-center"
                >
                  <img 
                    src={thumb.image} 
                    alt={`Thumbnail ${thumb.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Client Works Section */}
          <div className="mt-32">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-display">
                Client Works (Short Videos)
                <span className="text-sm md:text-base font-sans ml-4 opacity-50 font-normal lowercase tracking-normal italic block md:inline">
                  (Click to view videos)
                </span>
              </h2>
              <div className="h-px flex-1 bg-ink/10" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">
                {clientWorks.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientWorks.map((work, i) => (
                <motion.a
                  key={work.id}
                  href={work.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-video bg-ink/5 rounded-[32px] overflow-hidden border border-ink/10 group relative block"
                >
                  <div className="absolute inset-0 bg-ink/40 opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    {work.thumbnail && (
                      <img 
                        src={work.thumbnail} 
                        alt={`Client Work ${work.id}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="relative z-10 w-12 h-12 rounded-full bg-accent/80 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                      <YoutubeIcon size={24} className="text-ink" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* AI Explorations Section */}
          <div className="mt-32">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-display">
                AI Explorations (Video)
                <span className="text-sm md:text-base font-sans ml-4 opacity-50 font-normal lowercase tracking-normal italic block md:inline">
                  (Click to view videos)
                </span>
              </h2>
              <div className="h-px flex-1 bg-ink/10" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">
                {aiWorks.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
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
                  className={`${i === 3 ? 'aspect-video' : 'aspect-square'} bg-ink/5 rounded-[32px] overflow-hidden border border-ink/10 group relative block ${i === 3 ? 'lg:col-start-2' : ''}`}
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
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
