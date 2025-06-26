
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experiences } from '../data/experience.js';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center text-blue-600 mb-2">
                    <Briefcase size={18} className="mr-2" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>
                
                <div className="flex flex-col lg:items-end space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
