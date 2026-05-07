import { motion } from 'motion/react';
import { User, MapPin, Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function About() {
  const education = [
    {
      institution: 'S.J.C. Institute of Technology, Chickaballapur',
      degree: 'Engineering (B.E)',
      period: 'Dec 2022 – Present',
      location: 'Chickaballapur, Karnataka',
      result: 'CGPA : 9.09'
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate',
      period: 'Jun 2020 – Apr 2022',
      location: 'Ananthapuramu, Andhra Pradesh',
      result: '90%'
    },
    {
      institution: 'Lakshmi Synergy School',
      degree: 'Secondary Education',
      period: 'Jun 2019 – Apr 2020',
      location: 'Ananthapuramu, Andhra Pradesh',
      result: '88.5%'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-6">
               <User size={14} />
               <span>Professional Profile</span>
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Dedication to <span className="text-brand">Innovation</span> & Excellence.
            </h2>
            <p className="mt-8 text-lg text-neutral-400 leading-relaxed">
              I am an enthusiastic Computer Science student at S.J.C. Institute of Technology with a strong foundation in programming and problem-solving. My journey in tech is driven by a passion for building efficient solutions and a desire to solve real-world problems through code.
            </p>
            <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
              Skilled in Java, Python, and SQL, with a focus on MERN stack development. I thrive in collaborative environments and am a proactive coder, always looking for opportunities to learn and grow.
            </p>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <MapPin size={20} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs font-medium text-neutral-500 uppercase">Location</p>
                  <p className="font-medium text-white">Chickaballapur, Karnataka (S.J.C.I.T)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                  <Briefcase size={20} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs font-medium text-neutral-500 uppercase">Focus</p>
                  <p className="font-medium text-white">Software Engineering & Web Technologies</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
               <GraduationCap size={14} />
               <span>Education History</span>
            </div>
            
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-800">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-neutral-950 border-2 border-brand z-10" />
                  <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                       <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                       <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brand px-2 py-1 rounded-md bg-brand/10">
                         {edu.result}
                       </span>
                    </div>
                    <p className="text-brand font-medium text-sm mb-4">{edu.degree}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-neutral-500">
                       <span className="flex items-center gap-1">
                         <Calendar size={12} /> {edu.period}
                       </span>
                       <span className="flex items-center gap-1">
                         <MapPin size={12} /> {edu.location}
                       </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
