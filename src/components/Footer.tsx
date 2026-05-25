import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Mail, Radio, ShieldCheck, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contact@wahjoc.com', label: 'Email' },
];

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About Network' },
  { href: '#portfolio', label: 'Our Channels' },
  { href: '#contact', label: 'Get In Touch' },
];

const mediaChannels = [
  'Wahjoc News Digital Stream',
  'Wahjoc Tech & Content Platform',
  'Wahjoc Community & Media Hub',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t  bg-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Profile */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={logo} 
                alt="Wahjoc Logo" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </motion.div>
            <p className="text-stone-600 text-sm max-w-xs leading-relaxed font-medium">
              An emerging digital broadcasting network establishing specialized content streams and modern media channels.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center
                    bg-white/80 border border-stone-200 text-stone-600
                    hover:text-accent-800 hover:border-accent-800/30
                    transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Hub Navigation */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-stone-900 font-bold text-sm uppercase tracking-wider mb-4"
            >
              Navigation
            </motion.h4>
            <ul className="space-y-2.5">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-stone-600 hover:text-accent-800 font-medium transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Core Media Channels */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-900 font-bold text-sm uppercase tracking-wider mb-4"
            >
              Media Vectors
            </motion.h4>
            <ul className="space-y-2.5">
              {mediaChannels.map((channel, index) => (
                <motion.li
                  key={channel}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="text-stone-600 text-sm font-medium flex items-start gap-2"
                >
                  <Radio className="w-4 h-4 text-accent-800 mt-0.5 flex-shrink-0" />
                  <span>{channel}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Central Directory Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-stone-900 font-bold text-sm uppercase tracking-wider mb-4"
            >
              Network Desk
            </motion.h4>
            <div className="space-y-3">
              <p className="text-stone-600 text-sm font-medium leading-relaxed">
                Open to collaborations, content partnerships, and media syndication inquiries as we scale our network footprint.
              </p>
              <div className="flex items-center gap-3 text-stone-600 font-medium text-sm pt-1">
                <Mail className="w-4 h-4 text-accent-800 flex-shrink-0" />
                <a href="mailto:contact@wahjoc.com" className="hover:text-accent-800 transition-colors">
                  contact@wahjoc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-stone-600 text-sm font-medium flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-accent-800" /> Digital Channels Platform Hub
          </p>
          <p className="text-stone-500 font-medium text-sm">
            &copy; {currentYear} Wahjoc Network. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}