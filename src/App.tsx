import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import StickyNavbar from './components/layout/StickyNavbar';
import Sidebar from './components/Sidebar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import TasksSection from './components/sections/TasksSection';
import ChatBot from './components/chatbot/ChatBot';
import ParticleBackground from './components/3D/ParticleBackground';
import FloatingElements from './components/3D/FloatingElements';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';

const MainPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* 3D Background Elements */}
      <ParticleBackground />
      <FloatingElements />
      
      <StickyNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="pt-16 relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TasksSection />
        <ContactSection />
      </main>
      
      {/* Chatbot */}
      <ChatBot />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;