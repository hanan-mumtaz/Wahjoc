import { motion } from 'framer-motion';
import { Eye, Target, Award, Users } from 'lucide-react';

const pillars = [
  {
    icon: Eye,
    title: 'Editorial Clarity',
    description: 'We cutting through the noise to deliver information with direct context and zero fluff.',
  },
  {
    icon: Target,
    title: 'Niche Verticals',
    description: 'Building deep domain expertise across dedicated tracks—Journalism, Tech Infrastructure, and Community Media.',
  },
  {
    icon: Users,
    title: 'Audience-First Architecture',
    description: 'Designing high-performance, distraction-free digital interfaces tailored purely for modern readers.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-12 md:py-20 lg:py-32 bg-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Heading Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <span className="text-xs font-bold text-accent-800 uppercase tracking-widest block">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
                Architecting the modern <br />
                <span className="text-accent-800">Media Footprint.</span>
              </h2>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-stone-600 text-lg md:text-xl font-medium leading-relaxed"
            >
              Wahjoc is a fresh, fast-scaling media platform designed to host a network of highly targeted digital channels. We don't believe in hyper-generalized news networks that try to speak to everyone at once. Instead, we architect dedicated content ecosystems focusing on deep domain authority.
            </motion.p>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const PillarIcon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-stone-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-accent-50 border border-accent-200/50 rounded-xl inline-flex mb-6">
                    <PillarIcon className="w-6 h-6 text-accent-800" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-stone-600 font-medium text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Network Trajectory Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-stone-900 to-stone-800 text-stone-100 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Launching Our Baseline Stations</h4>
            <p className="text-stone-400 text-sm font-medium">Currently staging infrastructure layouts for News streams and Technical hubs.</p>
          </div>
          <div className="flex gap-4 items-center">
            <span className="h-2 w-2 rounded-full bg-accent-800 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent-400">Phase 01 Active</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}