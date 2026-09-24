import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Activity, Network, Fingerprint, Share2, Maximize2 } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';

const iconMap: Record<string, any> = {
  "pulsefit": <Activity className="text-primary-400" size={32} />,
  "agentic-rag-retail": <Network className="text-primary-400" size={32} />,
  "kyc": <Fingerprint className="text-primary-400" size={32} />,
  "social-media": <Share2 className="text-primary-400" size={32} />
};

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const activeProject = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Real-world systems demonstrating my expertise in building scalable, intelligent AI architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all cursor-pointer flex flex-col h-full relative"
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Abstract decorative background */}
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500 origin-top-right">
                {iconMap[project.id]}
              </div>

              <div className="p-8 flex-1 flex flex-col z-10">
                {project.badge && (
                  <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-semibold rounded-full w-fit mb-4 border border-primary-500/20">
                    {project.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <h4 className="text-sm text-gray-400 font-medium mb-4">{project.subtitle}</h4>
                )}
                <p className="text-gray-300 text-sm mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded-md border border-white/5">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded-md border border-white/5">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="px-8 py-4 bg-white/5 border-t border-white/5 flex items-center justify-between text-sm text-gray-400 font-medium group-hover:text-white transition-colors z-10">
                <span>View Architecture & Details</span>
                <Maximize2 size={16} className="group-hover:text-primary-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && activeProject && (
          <ProjectModal 
            project={activeProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: typeof projects[0], onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface glass-dark border border-white/10 rounded-2xl overflow-y-auto shadow-2xl flex flex-col"
      >
        <div className="sticky top-0 bg-surface/80 backdrop-blur-md border-b border-white/10 p-6 flex items-start justify-between z-10">
          <div>
            {project.badge && (
              <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-semibold rounded-full w-fit mb-2 border border-primary-500/20">
                {project.badge}
              </span>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-10">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Activity size={18} className="text-primary-400" />
              Overview
            </h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Network size={18} className="text-primary-400" />
                Key Engineering Highlights
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {project.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1 opacity-60">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Code2 size={18} className="text-primary-400" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-sm px-3 py-1 bg-white/5 text-gray-300 rounded-md border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Network size={18} className="text-primary-400" />
              System Architecture
            </h3>
            <div className="bg-black/50 border border-white/10 rounded-xl p-6 font-mono text-sm text-primary-100 whitespace-pre-wrap flex justify-center items-center overflow-x-auto text-center leading-relaxed">
              {project.architecture}
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-white/10">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-medium border border-white/10"
            >
              <Github size={18} />
              View Source
              <ExternalLink size={14} className="ml-1 opacity-50" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Code2(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
}
