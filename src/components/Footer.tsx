
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ankit Sharma</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, 
              functional web experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:haquedot@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={18} className="mr-3" />
                ankitsharmaa0709@gmail.com
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://github.com/ankitsharma495"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ankit-sharma-495/"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:ankitsharmaa0709@gmail.com"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ankit Sharma. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by Ankit Sharma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
