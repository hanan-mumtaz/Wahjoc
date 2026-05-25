import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark overlay backdrop for focus */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Slide out drawer using logo background cream */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-72 z-50
            bg-brand-cream/95 backdrop-blur-xl border-l border-primary-200 shadow-2xl"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                {/* Brand logo duplicated in mobile drawer */}
                <img
                  src={logo}
                  alt="Wahjoc Logo"
                  className="h-8 w-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl flex items-center justify-center
                  bg-brand-dark/5 border border-brand-dark/10 text-brand-dark hover:text-brand-red"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <nav className="flex-1">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="block px-4 py-3 rounded-xl text-brand-dark/70 hover:text-brand-red
                        hover:bg-brand-dark/5 transition-all duration-300 font-medium"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="pt-6 border-t border-brand-dark/10">
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center
                      bg-brand-dark/5 border border-brand-dark/10 text-brand-dark/60
                      hover:text-brand-red hover:border-accent-300 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
  className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500  ${
    isScrolled
      ? 'backdrop-blur-xl bg-primary-100 border-b border-accent-800 shadow-sm'
      : 'bg-transparent'
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 md:h-20">
      
      {/* Logo Section - Completely updated layout container */}
      <motion.a
        href="#hero"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center"
      >
        <img
          src={logo}
          alt="Wahjoc Logo"
          className="h-8 md:h-10 w-auto object-contain"
          loading="eager"
          decoding="async"
        />
      </motion.a>

      {/* Desktop Navigation links */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{ y: -1 }}
            className="px-4 py-2 rounded-lg text-brand-dark/70 hover:text-brand-red
            hover:bg-brand-dark/5 transition-all duration-300 text-sm font-medium"
          >
            {link.label}
          </motion.a>
        ))}

        {/* Social links block divider */}
        <div className="flex items-center gap-2 ml-4 pl-4 border-l border-brand-dark/10">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center
              text-brand-dark/60 hover:text-brand-red hover:bg-brand-dark/5
              transition-all duration-300"
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Mobile menu activation burger */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center
        bg-brand-dark/5 border border-brand-dark/10 text-brand-dark hover:text-brand-red"
      >
        <Menu className="w-5 h-5" />
      </motion.button>
    </div>
  </div>
</motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}