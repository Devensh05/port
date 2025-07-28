import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle, Play, Star, Zap } from 'lucide-react';

const TasksSection: React.FC = () => {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const taskCategories = [
    {
      title: "Docker",
      tasks: [
        "Run any tool or technology in Docker: Experiment with running software inside a Docker container.",
        "Set up and configure the Apache webserver in Docker: Deploy Apache within a Docker environment.",
        "Find a way to run the systemctl command inside a Docker container: Research methods to use systemd within Docker.",
        "Find a way to run graphical software inside a Docker container: Discover how to display GUI applications from Docker.",
        "Find a way to give sound card access to any program inside Docker: Learn how to enable audio in Docker containers.",
        "Learn how to set up Docker inside Docker (DIND): Understand the concept of running Docker within Docker.",
        "Install Firefox Browser inside Docker: Create a Docker container and install Firefox (GUI setup needed).",
        "Play VLC Inside Docker: Install VLC inside Docker and play media (use X11 or VNC for GUI).",
        "Setup Apache Server inside Docker: Install and configure Apache web server inside a Docker container."
      ]
    },
    {
      title: "Python + Docker",
      tasks: [
        "Run Linear Regression Model inside Docker: Use Python to write and execute Linear Regression inside a Docker container.",
        "Run Flask App inside Docker: Create and run a Python Flask web application from within a Docker container.",
        "Run Menu-Based Python Project inside Docker: Place your menu-based CLI project into a Docker container and execute it."
      ]
    },
    {
      title: "Terminal",
      tasks: [
        "Write a blog post on companies using Linux: Explain why they are using it and what benefits they are getting.",
        "GUI programs in Linux and find out the commands working behind them: Identify the underlying commands.",
        "Change the logo or icon of any program in Linux: Learn how to modify icons or logos for Linux applications.",
        "Add more terminals and GUI interfaces in Linux: Explore methods to enhance terminal and GUI experiences.",
        "Send an email, WhatsApp message, tweet, and SMS through the Linux terminal: Use command-line tools for these tasks.",
        "Find the command working behind the Ctrl+C and Ctrl+Z interrupt signals: Investigate the process control behind these shortcuts."
      ]
    },
    {
      title: "Python",
      tasks: [
        "Automation panel using Streamlit.",
        "Automate Panel using Gradio."
      ]
    },
    {
      title: "Github",
      tasks: [
        "Create a new folder, initialize it as a Git repository, add a file, and commit it with a meaningful message.",
        "Push the changes to a new GitHub repository: Set up and manage a repository. Create a new branch called feature1, make some changes in it, and merge it back into the main branch. Ensure there are no merge conflicts: Work with branches and resolve conflicts.",
        "Fork an existing repository from GitHub, clone it locally, make some changes, and create a pull request to the original repository: Contribute to open-source projects."
      ]
    },
    {
      title: "JavaScript",
      tasks: [
        "Take Photo Using JavaScript: Create a JavaScript function to access the webcam and capture a photo.",
        "Send Email Using JavaScript or API: Use EmailJS or a backend API to send email through a JavaScript-based interface.",
        "Send Captured Photo to Email: After capturing the photo, attach and send it via email using an email service API.",
        "Record Video on Button Click and Send via Email: Use JS MediaRecorder API to record video, then send it via email.",
        "Send WhatsApp Message Using JavaScript: Use WhatsApp web URL scheme or API to initiate a WhatsApp message from JS.",
        "Fetch Last Email Info from Gmail: Use Gmail API (OAuth required) to read and display info from the last received email."
      ]
    },
    {
      title: "Other",
      tasks: [
        "Create a blog on a case study of why Docker is used by different companies and what benefits they are getting: Research and document real-world use cases."
      ]
    }
  ];

  const handleTaskComplete = (taskId: string) => {
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };

  const handleCategorySelect = (categoryTitle: string) => {
    setSelectedCategory(selectedCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <section 
      id="tasks" 
      className="py-20 relative overflow-hidden transition-colors duration-1000"
      style={{
        background: isHovering 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
          : 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: isHovering ? [1, 1.2, 1] : [1, 1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-xl"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-xl"
        />
        
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -30, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-200 dark:bg-green-800 rounded-full opacity-20 blur-xl"
        />
        
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 blur-xl"
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              opacity: isHovering ? 0.1 : 0.05,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Animated Background Color Overlay */}
        <motion.div
          animate={{
            opacity: isHovering ? 0.3 : 0,
            background: isHovering 
              ? 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)' 
              : 'transparent'
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: isHovering ? [0, 20, 0] : [0, 0, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}

        {/* Animated Wave */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent opacity-10"
          style={{
            clipPath: "polygon(0 50%, 100% 0%, 100% 100%, 0% 100%)"
          }}
        />

        {/* Second Animated Wave */}
        <motion.div
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-transparent via-purple-200 dark:via-purple-800 to-transparent opacity-8"
          style={{
            clipPath: "polygon(0 70%, 100% 20%, 100% 100%, 0% 100%)"
          }}
        />

        {/* Glowing Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 rounded-full blur-sm"
            style={{
              left: `${15 + i * 15}%`,
              top: `${30 + (i % 2) * 30}%`,
            }}
          />
        ))}

        {/* Animated Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 dark:via-blue-300 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              top: `${40 + i * 10}%`,
              width: '200px',
            }}
          />
        ))}

        {/* Enhanced Mouse Follow Effect */}
        <motion.div
          animate={{
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.1,
          }}
          className="absolute w-12 h-12 bg-gradient-to-r from-blue-400/40 to-purple-400/40 dark:from-blue-300/40 dark:to-purple-300/40 rounded-full blur-xl pointer-events-none z-50"
        />

        {/* Enhanced Interactive Ripple Effect */}
        <motion.div
          animate={{
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            scale: [0, 1.2, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute w-24 h-24 border-2 border-blue-400/50 dark:border-blue-300/50 rounded-full pointer-events-none z-40"
        />

        {/* Second Ripple Effect */}
        <motion.div
          animate={{
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            scale: [0, 1.5, 0],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="absolute w-32 h-32 border border-purple-400/30 dark:border-purple-300/30 rounded-full pointer-events-none z-30"
        />

        {/* Cursor Trail Effect */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`trail-${i}`}
            animate={{
              x: mousePosition.x - 15 + (i * 5),
              y: mousePosition.y - 15 + (i * 5),
              scale: [0, 1, 0],
              opacity: [0, 0.3 - (i * 0.1), 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.1,
            }}
            className="absolute w-6 h-6 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full pointer-events-none z-20"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Task List
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive collection of tasks organized by technology and category
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              {completedTasks.size} tasks completed
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {taskCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                selectedCategory === category.title ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => handleCategorySelect(category.title)}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-blue-500 pb-2 flex items-center justify-between">
                  {category.title}
                  <motion.div
                    animate={{ rotate: selectedCategory === category.title ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Star className={`w-5 h-5 ${selectedCategory === category.title ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
                  </motion.div>
                </h3>
              </motion.div>
              <div className="space-y-3">
                {category.tasks.map((task, taskIndex) => {
                  const taskId = `${category.title}-${taskIndex}`;
                  const isCompleted = completedTasks.has(taskId);
                  
                  return (
                    <motion.div
                      key={taskIndex}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-3 rounded-md border-l-4 transition-all duration-300 cursor-pointer group ${
                        isCompleted 
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-500' 
                          : 'bg-gray-50 dark:bg-gray-600 border-blue-500 hover:bg-gray-100 dark:hover:bg-gray-500'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start flex-1">
                          <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTaskComplete(taskId);
                            }}
                            className={`mr-3 mt-0.5 p-1 rounded-full transition-colors ${
                              isCompleted 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-200 dark:bg-gray-500 text-gray-400 hover:bg-green-100 dark:hover:bg-green-800'
                            }`}
                          >
                            <AnimatePresence mode="wait">
                              {isCompleted ? (
                                <motion.div
                                  key="completed"
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  exit={{ scale: 0, rotate: 180 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <CheckCircle size={16} />
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="incomplete"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <div className="w-4 h-4 border-2 border-gray-400 rounded-full" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.button>
                          
                          <p className={`text-sm leading-relaxed flex-1 ${
                            isCompleted 
                              ? 'text-green-700 dark:text-green-300 line-through' 
                              : 'text-gray-700 dark:text-gray-200'
                          }`}>
                            {taskIndex + 1}. {task}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-2">
                          <motion.button
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open('https://github.com/devensh10/new.git', '_blank');
                            }}
                            className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                          >
                            <Play size={14} />
                          </motion.button>
                          
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="flex-shrink-0"
                          >
                            <ExternalLink 
                              size={16} 
                              className="text-blue-500 group-hover:text-blue-600 transition-colors" 
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TasksSection; 