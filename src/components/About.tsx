
import React from 'react';
import { MapPin, Mail, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto lg:mx-0 flex items-center justify-center text-white text-6xl font-bold">
              MH
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-3 text-blue-600" size={20} />
                <span>Noida, India</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="mr-3 text-blue-600" size={20} />
                <span>ankitsharmaa0709@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate Full Stack Developer with a love for  
                creating digital experiences that make a difference. I specialize in 
                modern web technologies and love bringing ideas to life through clean, 
                efficient code.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My journey in tech started with a curiosity about how things work, 
                and has evolved into a career dedicated to building applications that 
                solve real-world problems. I believe in continuous learning and staying 
                updated with the latest industry trends.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Bachelor of Technology in Computer Science</h4>
                  <p className="text-gray-600">Roorkee Institute of Technology• 2021-2025</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Full Stack Web Development</h4>
                  <p className="text-gray-600">Explorin Academy• 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
