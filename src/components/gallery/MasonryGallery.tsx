import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  type: 'graphical' | 'coding' | 'website';
  category?: string;
  tech?: string[];
  github?: string;
  live?: string;
  url?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface MasonryGalleryProps {
  projects: Project[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [columns, setColumns] = useState(3);

  const filters = ['all', 'graphical', 'coding', 'website'];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  const getColumnProjects = (columnIndex: number) => {
    return filteredProjects.filter((_, index) => index % columns === columnIndex);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'graphical': return 'from-purple-500 to-pink-500';
      case 'coding': return 'from-blue-500 to-cyan-500';
      case 'website': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'graphical': return 'Design';
      case 'coding': return 'Development';
      case 'website': return 'Website';
      default: return 'Project';
    }
  };

  return (
    <div className="mb-20">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filterType) => (
          <motion.button
            key={filterType}
            onClick={() => setFilter(filterType)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === filterType
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400'
            }`}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: columns }, (_, columnIndex) => (
          <div key={columnIndex} className="space-y-6">
            <AnimatePresence>
              {getColumnProjects(columnIndex).map((project, index) => (
                <motion.div
                  key={`${project.id}-${filter}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    layout: { duration: 0.3 }
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    rotateX: 5,
                    rotateY: 5
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${getTypeColor(project.type)} flex items-center justify-center`}>
                        {project.icon && (
                          <project.icon size={48} className="text-white" />
                        )}
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Eye size={32} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(project.type)} text-white text-sm font-semibold rounded-full`}>
                        {getTypeLabel(project.type)}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    {project.category && (
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {project.category}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    {project.tech && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                {selectedProject.image ? (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className={`w-full h-64 bg-gradient-to-br ${getTypeColor(selectedProject.type)} flex items-center justify-center`}>
                    {selectedProject.icon && (
                      <selectedProject.icon size={64} className="text-white" />
                    )}
                  </div>
                )}
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(selectedProject.type)} text-white text-sm font-semibold rounded-full`}>
                    {getTypeLabel(selectedProject.type)}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {selectedProject.category && (
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {selectedProject.category}
                  </div>
                )}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                {selectedProject.tech && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                  )}
                  {(selectedProject.live || selectedProject.url) && (
                    <motion.a
                      href={selectedProject.live || selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      {selectedProject.live ? 'Live Demo' : 'Visit Website'}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryGallery;