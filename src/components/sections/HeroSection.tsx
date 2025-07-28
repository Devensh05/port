import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import TypewriterText from '../animations/TypewriterText';
import TextReveal from '../animations/TextReveal';
import MorphingShape from '../3D/MorphingShape';
import HolographicCard from '../3D/HolographicCard';

const HeroSection: React.FC = () => {
  const roles = [
    'Creative Developer',
    'UI/UX Designer', 
    '3D Animator',
    'Frontend Specialist',
    'Digital Artist'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background Shape */}
      <div className="absolute inset-0 opacity-20">
        <MorphingShape />
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <HolographicCard className="mb-8 rounded-full w-fit mx-auto">
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0],
                rotateY: [0, 180, 360]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 shadow-2xl"
              style={{
                background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)',
                backgroundSize: '400% 400%',
                animation: 'gradient 4s ease infinite'
              }}
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 shadow-inner">
                DP
              </div>
            </div>
          </motion.div>
        </HolographicCard>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          <TextReveal text="Hi, I'm" className="inline-block mr-4" />
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Devansh Prakash
          </motion.span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed"
        >
          <TypewriterText 
            texts={roles}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"
            speed={150}
            deleteSpeed={100}
            delayBetweenTexts={2000}
          />
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          <TextReveal 
            text="Crafting digital experiences that inspire and engage through innovative design and cutting-edge technology"
            delay={0.5}
          />
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <HolographicCard className="rounded-full">
            <motion.button
              whileHover={{ scale: 1.05, y: -2, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center gap-2">
              <Download size={20} />
              Download Resume
              </span>
            </motion.button>
          </HolographicCard>
          
          <HolographicCard className="rounded-full">
            <motion.button
              whileHover={{ scale: 1.05, y: -2, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
              </span>
            </motion.button>
          </HolographicCard>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ChevronDown size={32} />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;