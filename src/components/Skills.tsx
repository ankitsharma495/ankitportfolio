
import React from 'react';
import { skillsData } from '../data/skills.js';

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", skills: skillsData.frontend, color: "bg-blue-100 text-blue-800" },
    { title: "Backend", skills: skillsData.backend, color: "bg-green-100 text-green-800" },
    { title: "Tools & Platforms", skills: skillsData.tools, color: "bg-purple-100 text-purple-800" },
    { title: "Other Skills", skills: skillsData.other, color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className={`px-4 py-2 rounded-full text-sm font-medium ${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
