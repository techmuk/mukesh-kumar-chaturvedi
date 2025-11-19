
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ChevronRight, Code } from 'lucide-react';

// --- PROJECT CARD ---
interface ProjectProps {
  title: string;
  company?: string;
  role?: string;
  description: string;
  environment: string;
  responsibilities: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  company, 
  description, 
  environment, 
  responsibilities,
  demoUrl,
  repoUrl,
  imageUrl
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div 
        className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => setShowModal(true)}
      >
        <div className="h-48 bg-stone-900 relative overflow-hidden">
           {imageUrl ? (
             <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
           ) : (
             <div className="w-full h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-950"></div>
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_120%,#C5A059,transparent)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10">
                    <Code size={64} strokeWidth={1} />
                </div>
             </div>
           )}
           <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-stone-900/90 to-transparent pt-12">
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-nobel-gold transition-colors">{title}</h3>
              {company && <p className="text-xs text-stone-300 uppercase tracking-wider mt-1">{company}</p>}
           </div>
        </div>

        <div className="p-6 flex-grow flex flex-col justify-between">
           <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">{description}</p>
           <div className="flex items-center text-nobel-gold text-xs font-bold uppercase tracking-widest mt-auto group-hover:translate-x-1 transition-transform">
              View Details <ChevronRight size={14} className="ml-1" />
           </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row z-10"
            >
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowModal(false); }}
                  className="absolute top-4 right-4 z-20 p-2 bg-white/80 rounded-full hover:bg-white text-stone-900 transition-colors shadow-sm"
                >
                  <X size={20} />
                </button>

                {/* Modal Sidebar / Image Area */}
                <div className="md:w-2/5 bg-stone-900 relative min-h-[150px] md:min-h-full flex flex-col justify-center p-8 text-white overflow-hidden">
                     {imageUrl ? (
                        <>
                            <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent"></div>
                        </>
                     ) : (
                        <div className="absolute inset-0">
                           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_#C5A059_0%,_transparent_50%)] opacity-20"></div>
                        </div>
                     )}
                     
                     <div className="relative z-10">
                        <div className="w-12 h-12 rounded-lg bg-nobel-gold/20 flex items-center justify-center text-nobel-gold mb-6 border border-nobel-gold/30">
                            <Code size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">{title}</h3>
                        {company && <p className="text-sm text-stone-400 uppercase tracking-wider font-medium">{company}</p>}
                        
                        <div className="mt-8 flex flex-wrap gap-2">
                            {environment.split(',').map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 bg-white/10 text-stone-200 text-xs rounded border border-white/10 backdrop-blur-sm">
                                {tech.trim()}
                                </span>
                            ))}
                        </div>
                     </div>
                </div>

                {/* Modal Content */}
                <div className="md:w-3/5 p-8 overflow-y-auto bg-white">
                    <div className="mb-8">
                      <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Project Overview</h4>
                      <p className="text-stone-600 leading-relaxed text-sm md:text-base">{description}</p>
                    </div>

                    <div className="mb-8">
                       <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Key Responsibilities</h4>
                       <ul className="space-y-3">
                          {responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-stone-600">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nobel-gold shrink-0"></span>
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                       </ul>
                    </div>

                    {(demoUrl || repoUrl) && (
                        <div className="flex flex-wrap gap-4 pt-6 border-t border-stone-100 mt-auto">
                            {demoUrl && (
                                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-all shadow-sm hover:shadow-md text-sm font-medium">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            )}
                            {repoUrl && (
                                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-200 text-stone-700 rounded-lg hover:border-stone-900 hover:text-stone-900 transition-all shadow-sm text-sm font-medium">
                                    <Github size={16} /> View Code
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- EXPERIENCE ITEM ---
interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  isLast?: boolean;
}

export const ExperienceItem: React.FC<ExperienceProps> = ({ company, role, period, isLast }) => {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Desktop: Layout with timeline in middle */}
      <div className="hidden md:flex items-center justify-between group">
        <div className="w-5/12 text-right pr-8">
           <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-nobel-gold transition-colors">{company}</h3>
           <p className="text-stone-500 font-medium text-sm mt-1">{role}</p>
        </div>
        
        <div className="w-2/12 flex justify-center relative">
           <div className="w-3 h-3 bg-stone-300 rounded-full z-10 ring-4 ring-[#F9F8F4] group-hover:bg-nobel-gold transition-colors"></div>
           {!isLast && <div className="absolute top-3 bottom-[-3rem] w-0.5 bg-stone-200"></div>}
        </div>
        
        <div className="w-5/12 pl-8">
           <span className="px-3 py-1 bg-stone-100 text-stone-600 border border-stone-200 text-xs font-bold rounded-full group-hover:border-nobel-gold/50 transition-colors">{period}</span>
        </div>
      </div>

      {/* Mobile: Layout with timeline on left */}
      <div className="md:hidden flex flex-col pb-12 relative border-l-2 border-stone-200 ml-3 pl-6">
         <div className="absolute -left-[9px] top-0 w-4 h-4 bg-stone-300 rounded-full border-4 border-[#F9F8F4]"></div>
         <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 border border-stone-200 text-xs font-bold rounded-full w-fit mb-2">{period}</span>
         <h3 className="font-serif text-lg font-bold text-stone-900">{company}</h3>
         <p className="text-stone-500 font-medium text-sm">{role}</p>
      </div>
    </div>
  );
};

// --- SKILL SECTION ---
interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all h-full group">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-stone-100 text-stone-600 rounded-lg group-hover:bg-nobel-gold/10 group-hover:text-nobel-gold transition-colors">
          {icon}
        </div>
        <h3 className="font-serif text-lg font-bold text-stone-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-3 py-1 bg-stone-50 text-stone-600 border border-stone-100 rounded-md text-sm hover:border-nobel-gold/50 hover:text-stone-900 transition-colors cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
