import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-paper/80 backdrop-blur-md border-b border-ink/5"
    >
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-ink/10 group-hover:border-accent transition-colors">
          <img 
            src="https://i.ibb.co/VYSnYQqQ/Picsart-26-04-05-22-42-49-401-1.png" 
            alt="Anshbir Singh Arora" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="font-display font-bold text-lg tracking-tighter hidden sm:block">Anshbir Singh Arora</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          item.isLink ? (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
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

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-50">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          EST. 2016
        </div>
        <button className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-ink mb-1.5" />
          <div className="w-6 h-0.5 bg-ink" />
        </button>
      </div>
    </motion.nav>
  );
}
