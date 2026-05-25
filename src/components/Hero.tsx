import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Radio, Newspaper, Cpu, Globe, Signal } from 'lucide-react';

const channels = [
  {
    id: 1,
    name: 'Wahjoc News',
    icon: Newspaper,
    status: 'Live Updates',
    headline: 'Digital journalism redefined for the modern age.',
    color: 'text-stone-900 bg-stone-100 border-stone-200'
  },
  {
    id: 2,
    name: 'Wahjoc Tech',
    icon: Cpu,
    status: 'Latest Insight',
    headline: 'Exploring the frontiers of software & digital architecture.',
    color: 'text-accent-800 bg-accent-50 border-accent-200'
  },
  {
    id: 3,
    name: 'Wahjoc Hub',
    icon: Globe,
    status: 'Community Feed',
    headline: 'Connecting regional voices through shared narratives.',
    color: 'text-stone-700 bg-stone-50 border-stone-200'
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  // Automatic cycling to show the network is "alive"
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % channels.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Safe reference extraction for dynamic JSX icon components
  const ActiveIcon = channels[activeTab].icon;

  return (
    <section id="hero" className="relative min-h-screen md:min-h-[85vh] flex items-center justify-center bg-stone-50 overflow-hidden pt-20 md:pt-24 pb-8 md:pb-12">
      {/* Aesthetic background design shadow masks - reduced on mobile */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent-800/5 rounded-full blur-[60px] md:blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-stone-200/50 rounded-full blur-[60px] md:blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Brand Statement */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm"
            >
              <Signal className="w-4 h-4 text-accent-800 animate-pulse" />
              <span className="text-xs font-bold text-stone-600 uppercase tracking-widest">
                Digital Media Network Launching
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-accent-800 leading-[1.05] tracking-tight"
            >
              The Future of <br />
              <span className="text-accent-800">Specialized Media.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-stone-600 text-lg md:text-xl max-w-xl font-medium leading-relaxed"
            >
              Wahjoc is a modern broadcasting ecosystem establishing independent digital channels across journalism, technology, and community.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-stone-50 bg-accent-800 hover:bg-accent-900 transition-all duration-300 shadow-lg shadow-accent-800/10"
              >
                <span>Enter Channels</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-stone-900 bg-white border border-stone-200 hover:bg-stone-50 transition-all duration-300"
              >
                <span>Network Inquiry</span>
              </a>
            </motion.div>
          </div>

          {/* Right Side: Dynamic Channel Dashboard */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-md border border-stone-200 rounded-3xl p-8 shadow-2xl relative z-10"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-accent-800/5 rounded-lg">
                    <Radio className="w-5 h-5 text-accent-800" />
                  </div>
                  <span className="font-bold text-stone-900">Network Feed</span>
                </div>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === activeTab ? 'w-6 bg-accent-800' : 'w-1.5 bg-stone-200'}`} />
                  ))}
                </div>
              </div>

              <div className="min-h-[160px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border text-xs font-bold uppercase tracking-wider ${channels[activeTab].color}`}>
                      <ActiveIcon className="w-3.5 h-3.5" />
                      {channels[activeTab].status}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-stone-900 mb-2 leading-tight">
                        {channels[activeTab].name}
                      </h3>
                      <p className="text-stone-600 font-medium leading-relaxed">
                        {channels[activeTab].headline}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <a href="#portfolio" className="w-full py-3 text-sm font-bold text-stone-400 hover:text-accent-800 transition-colors flex items-center justify-center gap-2 group">
                  View Full Media Directory 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Decorative Card Stacks behind the main dashboard background layout */}
            <div className="absolute top-4 -right-4 w-full h-full bg-stone-200/40 border border-stone-200 rounded-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}