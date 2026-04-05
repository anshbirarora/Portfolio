import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { name: 'Home', href: '/', isLink: true },
    { name: 'About', href: isHome ? '#about' : '/#about', isLink: false },
    { name: 'Portfolio', href: '/portfolio', isLink: true },
    { name: 'Youtube', href: isHome ? '#youtube' : '/#youtube', isLink: false },
    { name: 'Certifications', href: 'https://drive.google.com/file/d/1dahMTD0CxomplYUbetsHHfZUY-EoJQE4/view?usp=drive_link', isLink: false, isExternal: true },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact', isLink: false },
  ];

  return (
    <footer className="py-20 px-6 md:px-12 bg-paper border-t border-ink/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-ink/10 group-hover:border-accent transition-colors">
              <img 
                src="https://i.ibb.co/VYSnYQqQ/Picsart-26-04-05-22-42-49-401-1.png" 
                alt="Anshbir Singh Arora" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter">Anshbir Singh Arora</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-8">
            {navItems.map((item) => (
              item.isLink ? (
                <Link key={item.name} to={item.href} className="text-sm font-medium hover:text-accent transition-colors">
                  {item.name}
                </Link>
              ) : (
                <a 
                  key={item.name} 
                  href={item.href} 
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[20vw] font-display font-bold leading-none text-ink/5 text-center select-none"
          >
            vidéaste
          </motion.h2>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">© 2024 Anshbir Singh Studio</p>
              <div className="flex gap-4">
                <div className="w-1 h-1 bg-accent rounded-full" />
                <div className="w-1 h-1 bg-accent rounded-full" />
                <div className="w-1 h-1 bg-accent rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
