import { motion } from 'motion/react';
import { ArrowUpRight, Youtube, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[15vw] lg:text-[10vw] leading-[0.85] mb-8">
            Anshbir<br />Singh Arora
          </h1>
          
          <div className="max-w-md mb-12">
            <p className="text-lg text-ink/70 leading-relaxed mb-8">
              I bridge the gap between creative charisma and data-driven strategy. Turning complex logistics into scroll-stopping human stories.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link 
                to="/portfolio"
                className="px-8 py-4 bg-ink text-paper rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-ink transition-all flex items-center gap-2 group"
              >
                View Portfolio
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <div className="flex gap-2">
              {[
                { Icon: Youtube, href: 'https://youtu.be/N-7Ok80VGpg?si=wUsbN-ofCptPLHrc' },
                { Icon: Instagram, href: 'https://www.instagram.com/reel/DTKN7pwAopW/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==' },
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href !== '#' ? "_blank" : undefined}
                  rel={href !== '#' ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, backgroundColor: '#F5A623' }}
                  className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-display font-bold">+182k</span>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">VIEWS IN LONG FORMAT ON YOUTUBE</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold">+214k</span>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">VIEWS COMBINED INCLUDING FEW SHORTS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-accent/20 group">
            <img 
              src="https://i.ibb.co/F4D6Hv4f/Picsart-26-03-20-19-11-27-230-jpg.jpg" 
              alt="Featured Creator"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply pointer-events-none" />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-12 h-12 bg-paper rounded-full flex items-center justify-center shadow-xl"
            >
              <div className="w-8 h-8 rounded-full border-2 border-ink/10 flex items-center justify-center">
                <div className="w-1 h-1 bg-ink rounded-full" />
              </div>
            </motion.div>

            <motion.a 
              href="https://youtu.be/qvN6r3tGa8Q?si=ilgNXzx7Z11sdcnn"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 -left-6 p-4 bg-paper rounded-2xl shadow-2xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Youtube className="text-ink" size={20} />
              </div>
              <div className="pr-4">
                <span className="block text-[10px] font-bold uppercase tracking-tighter opacity-50">Youtube</span>
                <span className="block text-xs font-bold">Latest Uploads</span>
              </div>
            </motion.a>
          </div>

          {/* Abstract Shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-ink/5 rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
