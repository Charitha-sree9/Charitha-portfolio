import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Chatling — Language Learning AI',
      description: 'An AI-powered chatbot developed at SJC Institute that acts as a virtual tutor, offering real-time conversation practice, grammar correction, and vocabulary building.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800',
      tags: ['MERN', 'AI Chat', 'Education', 'Sep–Dec 2024'],
      link: '#',
      github: '#'
    },
    {
      id: '2',
      title: 'Text Detection & Recognition System',
      description: 'Research project utilizing YOLO and Tesseract OCR to identify and recognize text from scene images. Developed using Google Colab and image processing techniques.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      tags: ['YOLO', 'OCR', 'Python', 'Dec 2024–Present'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-neutral-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              A collection of projects I've built that showcase my technical skills.
            </p>
          </div>
          <a href="#" className="text-brand font-semibold flex items-center gap-2 hover:underline">
            View All Work <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-neutral-800 text-neutral-400 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-neutral-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <a href={project.link} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-brand transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-white transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
