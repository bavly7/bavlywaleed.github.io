import { motion } from 'framer-motion';
import { Code2, Network, Eye, Database } from 'lucide-react';

export function About() {
  const stats = [
    { label: "AI Engineering", icon: <Network size={24} />, desc: "End-to-end architectures" },
    { label: "Agentic Systems", icon: <BrainCircuit size={24} />, desc: "ReAct, LangGraph" },
    { label: "Computer Vision", icon: <Eye size={24} />, desc: "YOLO, Transformers" },
    { label: "Production APIs", icon: <Database size={24} />, desc: "FastAPI, PostgreSQL" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-primary-400">Me</span>
              </h2>
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  I am an AI Engineer based in Giza, Egypt, with a Computer Science degree from Suez University. My core focus is bridging the gap between theoretical machine learning models and practical, production-ready systems.
                </p>
                <p>
                  I specialize in building intelligent workflows using Agentic AI, large-scale Retrieval-Augmented Generation (RAG), Computer Vision, and robust Backend APIs. Rather than just wrapping LLMs, I architect systems that feature dynamic execution routing, rolling memory, persistent state, and anti-hallucination guardrails.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-dark p-6 rounded-xl border border-white/5 hover:border-primary-500/30 transition-colors group"
              >
                <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform origin-left">
                  {stat.icon}
                </div>
                <h3 className="font-semibold text-white text-lg mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-400">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Just adding a quick BrainCircuit icon fallback in case it's not imported properly above
function BrainCircuit(props: any) {
  return <Code2 {...props} />; // Placeholder, will fix import
}
