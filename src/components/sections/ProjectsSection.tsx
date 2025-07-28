import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Palette, Smartphone, Layers, Globe, Utensils } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import MasonryGallery from '../gallery/MasonryGallery';

const ProjectsSection: React.FC = () => {
  const graphicalProjects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      description: 'Complete brand identity package for a tech startup',
      category: 'Branding',
      icon: Palette,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'UI/UX Mobile App',
      description: 'Modern mobile app design with intuitive user experience',
      category: 'Mobile Design',
      icon: Smartphone,
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Web Design System',
      description: 'Comprehensive design system for enterprise platform',
      category: 'Design Systems',
      icon: Layers,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const codingProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'AI Chat Interface',
      description: 'Modern chat interface with AI integration',
      tech: ['React', 'Python', 'FastAPI', 'OpenAI'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const websites = [
    {
      id: 1,
      title: 'Creative Agency Website',
      description: 'Award-winning creative agency portfolio',
      url: 'https://example.com',
      icon: Globe,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Restaurant Chain Website',
      description: 'Multi-location restaurant website with online ordering',
      url: 'https://example.com',
      icon: Utensils,
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const allProjects = [
    ...graphicalProjects.map(p => ({ ...p, type: 'graphical' })),
    ...codingProjects.map(p => ({ ...p, type: 'coding' })),
    ...websites.map(p => ({ ...p, type: 'website' }))
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Gallery */}
        <AnimatedSection direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            A curated collection of my work across different disciplines and technologies
          </p>
        </AnimatedSection>

        <MasonryGallery projects={allProjects} />

        {/* Graphical Projects */}
        <AnimatedSection direction="right">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Graphical Projects
          </h2>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {graphicalProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                z: 50
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-8 relative z-10"
                >
                  <project.icon className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                </motion.div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                >
                  <Eye size={16} />
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coding Projects */}
        <AnimatedSection direction="left">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Coding Projects
          </h2>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {codingProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                z: 50
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="aspect-video bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg mb-4 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <Github size={16} />
                  Code
                </motion.a>
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Websites Showcase */}
        <AnimatedSection direction="right">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Website Showcase
          </h2>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {websites.map((website) => (
            <motion.div
              key={website.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                z: 50
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="aspect-video bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={website.image} 
                  alt={website.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-8 relative z-10"
                >
                  <website.icon className="w-16 h-16 text-green-600 dark:text-green-400" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {website.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {website.description}
                </p>
                <motion.a
                  href={website.url}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                >
                  <ExternalLink size={16} />
                  Visit Website
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;