import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary-400">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-1 w-10 h-10 bg-background rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-500 rounded-full shadow-[0_0_10px_#14b8a6]" />
              </div>

              <div className="glass-dark p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-primary-400 font-medium flex items-center gap-2 mt-1">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full self-start md:self-auto">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1.5 opacity-60">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
