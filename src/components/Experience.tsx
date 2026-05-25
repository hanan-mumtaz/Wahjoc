import { motion } from 'framer-motion';
import { PenTool, Terminal, Film, Radio, ShieldAlert } from 'lucide-react';

const classifications = [
  {
    role: 'Editorial & News Desks',
    specialization: 'Journalism & Public Affairs',
    icon: PenTool,
    description: 'Responsible for investigative reporting, verify facts, and writing transparent, un-biased news summaries covering critical regional and global structural events.',
    capabilities: ['Source Verification', 'Fact Checking', 'Real-time News Despatch']
  },
  {
    role: 'Technical Desks',
    specialization: 'Software Architecture & Computing',
    icon: Terminal,
    description: 'Curators focused entirely on deep-dive technical documentation, analyzing software design patterns, OOP concepts, coding systems, and engineering trends.',
    capabilities: ['Architecture Analysis', 'Code Review & Analysis', 'Tech Staging Docs']
  },
  {
    role: 'Creative & Production Desks',
    specialization: 'Media Layout & Visual Streams',
    icon: Film,
    description: 'The engine managing layout aesthetics, digital streams, interactive user interfaces, and the overall deployment architecture of the media hubs.',
    capabilities: ['Visual Layout Control', 'UI/UX Fluid Dynamics', 'Broadcast Assets']
  }
];

export default function TeamSpecializations() {
  return (
    <section id="team-specializations" className="relative py-12 md:py-20 lg:py-32 bg-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold text-accent-800 uppercase tracking-widest block">
            Network Classification
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Specialized Desk <span className="text-accent-800">Classifications</span>
          </h2>
          <p className="text-stone-600 text-lg font-medium">
            Our newsroom architecture partitions team focus into distinct, disciplined domains. This preserves strict content specialization across every feed we deploy.
          </p>
        </div>

        {/* Classifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {classifications.map((item, index) => {
            const DeskIcon = item.icon;
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon and Specialty Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent-50 border border-accent-200/60 rounded-xl">
                      <DeskIcon className="w-6 h-6 text-accent-800" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-800 block">
                        {item.specialization}
                      </span>
                      <h3 className="text-xl font-bold text-stone-900">
                        {item.role}
                      </h3>
                    </div>
                  </div>

                  <p className="text-stone-600 font-medium text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Scope Capabilities */}
                <div className="pt-4 border-t border-stone-100">
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
                    Core Mandate Scope:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-xs font-semibold px-2.5 py-1 bg-stone-100 rounded-md text-stone-700"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Operational Guardrail Note */}
        <div className="mt-12 p-4 rounded-xl bg-accent-50/60 border border-accent-200/50 flex items-center gap-3 max-w-2xl mx-auto justify-center">
          <ShieldAlert className="w-4 h-4 text-accent-800 flex-shrink-0" />
          <p className="text-xs font-bold text-accent-900 uppercase tracking-wide text-center">
            Cross-desk verification protocols active to avoid domain contamination.
          </p>
        </div>

      </div>
    </section>
  );
}