import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Product Entry Table',
    description: 'A dynamic data management system focusing on CRUD operations. Built with React and structured for scalability.',
    tech: ['React', 'CSS', 'JavaScript'],
    features: ['CRUD functionality', 'Image upload via URL/Blob', 'Real-time Input validation'],
    github: '#',
    live: '#'
  },
  {
    title: 'Food Ordering Application',
    description: 'A responsive web application for ordering food with dynamic menus and cart management.',
    tech: ['React', 'Context API', 'CSS'],
    features: ['API integration', 'Fully Responsive UI', 'State Management'],
    github: '#',
    live: '#'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-outfit mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass rounded-2xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-48 bg-gray-800 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors z-0"></div>
                <h3 className="text-3xl font-bold text-white/20 uppercase tracking-widest z-10 font-outfit">Project</h3>
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative z-20 -mt-10 bg-slate-900/80 backdrop-blur-md mx-4 rounded-xl border border-white/5 group-hover:border-blue-500/20 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-6 space-y-2">
                  <h4 className="text-sm font-semibold text-gray-200">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-blue-300">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a href={project.github} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">
                    <FaGithub size={16} /> View Code
                  </a>
                  <a href={project.live} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium shadow-lg shadow-blue-500/20">
                    <ExternalLink size={16} /> Live Demo
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
