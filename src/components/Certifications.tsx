import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Java, SQL',
      issuer: 'HackerRank',
      type: 'Technical skill verification',
      icon: <Award className="text-brand" size={20} />
    },
    {
      title: 'Python Essentials 1 & 2',
      issuer: 'Cisco',
      type: 'Fundamental programming paradigms',
      icon: <ShieldCheck className="text-purple-400" size={20} />
    },
    {
      title: 'Interactive Skills & Creative Thinking',
      issuer: 'Infosys Springboard',
      type: 'Professional development',
      icon: <Award className="text-brand" size={20} />
    },
    {
      title: 'Communicating to Succeed',
      issuer: 'Infosys Springboard',
      type: 'Soft skills & Leadership',
      icon: <CheckCircle2 className="text-brand" size={20} />
    }
  ];

  return (
    <section id="certifications" className="py-24 sm:py-32 bg-neutral-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Validated expertise through industry-recognized programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-brand/50 transition-all hover:-translate-y-1"
            >
              <div className="mb-4 p-2 rounded-lg bg-neutral-950 w-fit border border-neutral-800">
                {cert.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-brand text-xs font-semibold mb-3 uppercase tracking-wider">{cert.issuer}</p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {cert.type}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
