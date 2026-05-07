import { motion } from 'motion/react';
import { Cpu, Layout, BarChart, Wrench, User } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Cpu className="text-brand" size={24} />,
      skills: ['Java', 'SQL', 'Python (Basics)', 'OS', 'Networks', 'Cryptography']
    },
    {
      title: 'Web Design',
      icon: <Layout className="text-brand" size={24} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Tailwind CSS']
    },
    {
      title: 'Data Analytics',
      icon: <BarChart className="text-brand" size={24} />,
      skills: ['SQL', 'Data Visualization', 'Problem Solving']
    },
    {
      title: 'Tools',
      icon: <Wrench className="text-brand" size={24} />,
      skills: ['VS Code', 'Git & Github', 'Eclipse', 'Jupyter Notebook', 'Postman']
    },
    {
      title: 'Soft Skills',
      icon: <User className="text-brand" size={24} />,
      skills: ['Leadership', 'Communication', 'Teamwork', 'Clean Code', 'Time Mgmt']
    }
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Tech Stacks
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            I've mastered a variety of tools and technologies to build scalable 
            and efficient digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-brand/50 transition-colors group"
            >
              <div className="mb-6 p-3 rounded-xl bg-brand/10 w-fit group-hover:bg-brand/20 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3 text-neutral-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
