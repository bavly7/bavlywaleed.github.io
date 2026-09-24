import { motion } from 'framer-motion';
import { Mail, ArrowRight, BrainCircuit } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-400 font-mono tracking-widest uppercase mb-4 flex items-center gap-2">
              <BrainCircuit size={18} />
              Bavly Waleed
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              AI Engineer <br />
              <span className="text-gradient">Building Intelligent Systems</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Specializing in Agentic AI, large-scale RAG systems, Computer Vision, and production-ready backends. I build end-to-end AI systems from models and agents to APIs and deployment.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#projects" 
                className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center gap-2 group"
              >
                View Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 ml-4">
                <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-md text-gray-300 hover:text-white transition-colors border border-white/10">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-md text-gray-300 hover:text-white transition-colors border border-white/10">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:bavly.waleed777@gmail.com" className="p-3 bg-white/5 hover:bg-white/10 rounded-md text-gray-300 hover:text-white transition-colors border border-white/10">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract AI Visualization */}
        <div className="flex-1 hidden lg:flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md aspect-square"
          >
             {/* Using abstract shapes to represent neural networks / nodes */}
            <div className="absolute inset-0 rounded-full border border-primary-500/20 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-gray-600/30 animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-12 rounded-full border border-primary-500/10 animate-[spin_20s_linear_infinite]" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full flex items-center justify-center border-4 border-primary-500/30 shadow-[0_0_40px_rgba(20,184,166,0.3)] overflow-hidden">
               <img src="/profile.png" alt="Bavly Waleed" className="w-full h-full object-cover object-top" />
            </div>

            {/* Orbiting nodes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full shadow-[0_0_10px_#14b8a6]" />
            <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
            <div className="absolute top-1/4 left-0 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
