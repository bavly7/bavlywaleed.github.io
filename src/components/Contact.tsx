import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary-500/10 text-primary-400 rounded-full mb-8 border border-primary-500/20">
            <Mail size={32} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Let's build something <span className="text-primary-400">intelligent.</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, complex engineering problems, and innovative AI architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:bavly.waleed777@gmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group"
            >
              <Mail size={20} />
              bavly.waleed777@gmail.com
            </a>
            
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
            
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
