import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import HolographicCard from '../3D/HolographicCard';
import InteractiveGeometry from '../3D/InteractiveGeometry';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI/UX Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Performance Optimization', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { name: 'User Experience', icon: Heart, color: 'from-red-500 to-rose-500' }
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-10">
        <InteractiveGeometry />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="left">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate developer and designer with a keen eye for creating beautiful, 
                functional digital experiences. With expertise spanning from frontend development 
                to creative design, I bring ideas to life through code and creativity.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in tech started with a curiosity about how things work, which evolved 
                into a passion for building solutions that make a difference. I believe in the 
                power of good design and clean code to solve real-world problems.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => (
                <HolographicCard
                  key={skill.name}
                  className="rounded-xl"
                >
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5, rotateY: 10 }}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <motion.div 
                      whileHover={{ rotateY: 180, scale: 1.1 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}
                    >
                      <skill.icon size={24} className="text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h3>
                  </motion.div>
                </HolographicCard>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;