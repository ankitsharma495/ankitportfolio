
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import TechStackAnimation from './TechStackAnimation';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add this file to the public folder
    link.download = 'Ankit_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <TechStackAnimation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Ankit Sharma
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            Full Stack Developer & Tech Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web experiences. 
            I love turning complex problems into simple, elegant solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={downloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
            <a 
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ankitsharma495" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/ankitsharma90" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ankitsharmaa0709  @gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-blue-600 transition-colors duration-200 animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
