import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
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
    title: "Tech Unboxing 01",
    category: "Unboxings",
    image: "https://i.ibb.co/mVF2RCYc/Picsart-26-03-20-21-58-39-278-jpg.jpg",
    overlayImage: "https://i.ibb.co/mVF2RCYc/Picsart-26-03-20-21-58-39-278-jpg.jpg",
    size: "small"
  },
  {
    title: "Tech Unboxing 02",
    category: "Unboxings",
    image: "https://i.ibb.co/Nd3CwKwS/Picsart-26-03-20-21-59-19-528-jpg.jpg",
    overlayImage: "https://i.ibb.co/Nd3CwKwS/Picsart-26-03-20-21-59-19-528-jpg.jpg",
    size: "small"
  },
  {
    title: "Tech Unboxing 03",
    category: "Unboxings",
    image: "https://i.ibb.co/Jj2hwp46/Picsart-26-03-20-21-59-48-308-jpg.jpg",
    overlayImage: "https://i.ibb.co/Jj2hwp46/Picsart-26-03-20-21-59-48-308-jpg.jpg",
    size: "small"
  }
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
              Full Portfolio
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
                            className="absolute inset-0 opacity-100 transition-opacity duration-300 backdrop-blur-sm overflow-hidden"
                          >
                            <img 
                              src={(project as any).overlayImage || "https://i.ibb.co/DHxB1KTz/Picsart-26-03-20-20-44-00-079-jpg.jpg"} 
                              alt="Download Link"
                              className={`absolute inset-0 w-full h-full object-cover ${project.category === 'Unboxings' ? 'aspect-video' : 'aspect-square'}`}
                              referrerPolicy="no-referrer"
                            />
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
