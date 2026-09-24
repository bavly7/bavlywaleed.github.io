import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface/50 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary-400">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A comprehensive overview of my expertise across AI/ML, backend engineering, and system architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-dark p-6 rounded-xl border border-white/5 hover:border-primary-500/20 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 bg-white/5 hover:bg-primary-500/10 text-gray-300 hover:text-primary-300 rounded-md border border-white/5 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
