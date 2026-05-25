import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Radio } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', desk: 'general', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Operational simulation logic hook
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Correspondence Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-accent-800 uppercase tracking-widest block">
                Central Desk
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
                Network <br />
                <span className="text-accent-800">Correspondence.</span>
              </h2>
              <p className="text-stone-600 font-medium text-base leading-relaxed pt-2">
                Have a secure news tip, an independent software breakdown you want reviewed, or a media collaboration proposal? Reach out to our central desk handlers.
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm">
                <div className="p-2.5 bg-accent-50 rounded-lg border border-accent-100">
                  <Mail className="w-5 h-5 text-accent-800" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">Secure Operations Desk</h4>
                  <a href="mailto:contact@wahjoc.com" className="text-sm font-bold text-stone-800 hover:text-accent-800 transition-colors">
                    contact@wahjoc.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm">
                <div className="p-2.5 bg-stone-100 rounded-lg border border-stone-200">
                  <Radio className="w-5 h-5 text-stone-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">Network Distribution Status</h4>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Accepting Inquiries
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Router */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-stone-200 rounded-3xl p-8 shadow-xl relative"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Your Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:border-accent-800 focus:bg-white transition-all"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:border-accent-800 focus:bg-white transition-all"
                        placeholder="name@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Dynamic Desk Router Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Route To Specialized Desk</label>
                    <select 
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-bold text-stone-800 focus:outline-none focus:border-accent-800 focus:bg-white transition-all cursor-pointer"
                      value={formState.desk}
                      onChange={(e) => setFormState({...formState, desk: e.target.value})}
                    >
                      <option value="general">General Operations Network Desk</option>
                      <option value="editorial">Editorial Desk (News Tips & Stories)</option>
                      <option value="technical">Technical Desk (Software Systems & Code Content)</option>
                      <option value="syndication">Distribution Desk (Media Partnerships)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">Correspondence Details</label>
                    <textarea 
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-medium focus:outline-none focus:border-accent-800 focus:bg-white transition-all resize-none"
                      placeholder="Provide detailed information regarding your inquiry..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-accent-800 hover:bg-accent-900 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md shadow-accent-800/10 flex items-center justify-center gap-2"
                  >
                    <span>Dispatch Inward Transmission</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Success Layout State */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="inline-flex p-3 bg-emerald-50 border border-emerald-200 rounded-2xl mb-2 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">Transmission Logged</h3>
                  <p className="text-stone-600 font-medium text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="text-stone-900 font-bold">{formState.name}</span>. Your message has been routed directly to the <span className="text-accent-800 font-bold uppercase text-xs tracking-wider">[{formState.desk} desk]</span> for validation review.
                  </p>
                  <div className="pt-4">
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold text-stone-400 hover:text-accent-800 transition-colors uppercase tracking-widest"
                    >
                      Dispatched another transmission
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}