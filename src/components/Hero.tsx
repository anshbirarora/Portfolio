import { motion } from 'motion/react';
import { ArrowUpRight, Youtube, Instagram, Linkedin, Twitter } from 'lucide-react';
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
              I bridge the gap between creative vision and data-driven strategy. Specializing in high-end motion branding and cinematic storytelling that turns complex concepts into scroll-stopping human experiences.
            </p>
            
            <div className="flex mb-12">
              <div className="flex gap-6">
                {[
                  { Icon: Youtube, href: 'https://youtu.be/N-7Ok80VGpg?si=wUsbN-ofCptPLHrc' },
                  { Icon: Instagram, href: 'https://www.instagram.com/reel/DTKN7pwAopW/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/anshbir-singh-arora-59a7763b8' },
                  { Icon: Twitter, href: '#' }
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target={href !== '#' ? "_blank" : undefined}
                    rel={href !== '#' ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1, backgroundColor: '#F5A623' }}
                    className="w-14 h-14 rounded-full border border-ink/10 flex items-center justify-center transition-colors hover:border-accent"
                  >
                    <Icon size={20} />
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
              src="https://i.ibb.co/1GxN6MHJ/Picsart-26-04-06-17-30-07-194-jpg.jpg" 
              alt="Featured Creator"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply pointer-events-none" />
          </div>

          {/* Abstract Shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-ink/5 rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
