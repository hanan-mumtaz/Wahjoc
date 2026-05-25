import { motion } from 'framer-motion';
import { Newspaper, Cpu, Globe, ExternalLink, ArrowUpRight, Radio } from 'lucide-react';

const channels = [
  {
    title: 'Wahjoc News',
    subtitle: 'Digital Journalism Stream',
    icon: Newspaper,
    description: 'A dedicated public affairs and reporting stream engineered to deliver transparent, objective journalism covering critical structural events.',
    status: 'Staging Online',
    statusColor: 'bg-accent-800 text-white',
    metrics: ['Unbiased Reporting', 'Data-Driven Focus', 'Real-Time Updates'],
    link: '#contact'
  },
  {
    title: 'Wahjoc Tech',
    subtitle: 'Software & Architecture Content',
    icon: Cpu,
    description: 'An independent tech publication exploring code mechanics, Object-Oriented Design systems, cloud scaling, and digital engineering insights.',
    status: 'Staging Online',
    statusColor: 'bg-accent-800 text-white',
    metrics: ['C# & Architecture', 'OOP Deep Dives', 'Tech Ecosystems'],
    link: '#contact'
  },
  {
    title: 'Wahjoc Hub',
    subtitle: 'Community Culture Platform',
    icon: Globe,
    description: 'A community-driven digital vector connecting unique cultural voices, local content creators, and regional audience stories.',
    status: 'In Development',
    statusColor: 'bg-stone-200 text-stone-700',
    metrics: ['Shared Narratives', 'Creator Spotlights', 'Interactive Forums'],
    link: '#contact'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent-50 border border-accent-200 text-xs font-bold uppercase tracking-wider text-accent-800">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            Network Directory
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Explore Our <span className="text-accent-800">Media Channels</span>
          </h2>
          <p className="text-stone-600 text-lg font-medium max-w-2xl">
            Our network architecture partitions content into highly targeted vectors. Select a channel to review its core publication directive.
          </p>
        </div>

        {/* Channels Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {channels.map((channel, index) => {
            const ChannelIcon = channel.icon;
            return (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-stone-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-stone-300/80 transition-all duration-300 relative overflow-hidden group"
              >
                <div>
                  {/* Card Header Elements */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-stone-100 rounded-2xl border border-stone-200 group-hover:bg-accent-50 group-hover:border-accent-200 transition-colors duration-300">
                      <ChannelIcon className="w-6 h-6 text-stone-700 group-hover:text-accent-800 transition-colors duration-300" />
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md ${channel.statusColor}`}>
                      {channel.status}
                    </span>
                  </div>

                  {/* Channel Meta Details */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-accent-800 uppercase tracking-wider block">
                      {channel.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-stone-900">
                      {channel.title}
                    </h3>
                    <p className="text-stone-600 font-medium text-sm leading-relaxed pt-2">
                      {channel.description}
                    </p>
                  </div>
                </div>

                {/* Tracking Framework Badges & Navigation Action */}
                <div className="mt-6 pt-6 border-t border-stone-100 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {channel.metrics.map((metric) => (
                      <span 
                        key={metric} 
                        className="text-xs font-semibold px-2.5 py-1 bg-stone-50 border border-stone-200 rounded-lg text-stone-600"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <a
                    href={channel.link}
                    className="w-full py-3 px-4 rounded-xl border border-stone-200 font-bold text-sm text-stone-800 hover:text-white hover:bg-stone-900 hover:border-stone-900 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Access Channel Platform</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Staging Disclaimer */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold text-stone-400 uppercase tracking-widest mt-12"
        >
          Unified Database Indexing &bull; Broadcasters Active on Core Vectors Only
        </motion.p>

      </div>
    </section>
  );
}