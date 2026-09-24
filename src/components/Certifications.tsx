import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { Award, CheckCircle2 } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-surface/30 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Licenses & <span className="text-primary-400">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Continuous learning and validation of expertise in AI, Data Science, and Machine Learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-dark p-6 rounded-xl border border-white/5 hover:border-primary-500/30 transition-all flex items-start gap-4 group"
            >
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary-500/20 group-hover:text-primary-400 transition-colors text-gray-400">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1 leading-tight group-hover:text-primary-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-sm text-gray-400 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 size={14} className="text-primary-500" />
                  {cert.issuer}
                </div>
                {(cert.year || cert.grade) && (
                  <div className="flex items-center gap-3 mt-3">
                    {cert.year && (
                      <span className="text-xs font-mono px-2.5 py-1 bg-white/5 text-gray-500 rounded-md">
                        {cert.year}
                      </span>
                    )}
                    {cert.grade && (
                      <span className="text-xs font-mono px-2.5 py-1 bg-primary-500/10 text-primary-400 rounded-md border border-primary-500/20">
                        Grade: {cert.grade}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
