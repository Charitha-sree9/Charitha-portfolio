import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // NOTE: You can replace 'mqkvlzqd' with your own Formspree ID 
      // from https://formspree.io to receive emails to your own inbox.
      const response = await fetch('https://formspree.io/f/mqkvlzqd', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('submitted');
        setFormData({ name: '', email: '', message: '' });
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-neutral-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's build something <span className="text-brand italic">extraordinary</span> together.
            </h2>
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
              Have a project in mind or just want to chat? I'm always open to discussing new ideas 
              and opportunities. Feel free to reach out via the form or direct email.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Email Me</p>
                  <a href="mailto:daditotacharitha@gmail.com" className="text-lg font-medium text-white hover:text-brand transition-colors">
                    daditotacharitha@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">Chat on Telegram</p>
                  <a href="#" className="text-lg font-medium text-white hover:text-brand transition-colors">
                    @charitha_dev
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === 'submitted' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-neutral-400">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-brand transition-all focus:ring-1 focus:ring-brand disabled:opacity-50"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-brand transition-all focus:ring-1 focus:ring-brand disabled:opacity-50"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-brand transition-all focus:ring-1 focus:ring-brand resize-none disabled:opacity-50"
                      placeholder="How can I help you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                      <AlertCircle size={16} />
                      <span>Oops! Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-brand py-4 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

