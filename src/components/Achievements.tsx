import { motion } from 'motion/react';
import { Trophy, Star, Presentation, CheckCircle } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 sm:p-16">
          <div className="absolute top-0 right-0 -m-8 w-64 h-64 bg-brand/10 rounded-full blur-[100px]" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-2xl bg-brand/20 flex items-center justify-center text-brand">
                  <Trophy size={64} className="sm:size-80" />
                </div>
                <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-yellow-500 shadow-2xl">
                  <Star fill="currentColor" size={24} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">
                <Presentation size={14} />
                <span>Featured Achievement</span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
                IEEE Conference <span className="text-brand">Research Presentation</span>
              </h2>
              <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
                Presented a research paper on <span className="text-white font-medium italic">"Text Detection from Scene Images using YOLO and Tesseract OCR"</span> at an IEEE international conference.
              </p>
              <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-neutral-950/50 border border-neutral-800 border-dashed">
                <div className="text-brand">
                  <CheckCircle size={20} className="hidden sm:block" />
                </div>
                <p className="text-sm text-neutral-300">
                  Published research exploring high-accuracy computer vision models for complex scene understanding.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


