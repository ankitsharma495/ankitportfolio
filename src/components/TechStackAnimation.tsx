import React from 'react';

const TechStackAnimation = () => {
  const techStack = [
    'MongoDB', 'React JS', 'Node.js', 'Express.js', 
    'JavaScript', 'TypeScript', 'Tailwind CSS', 'Git',
    'AWS', 'Docker', 'PostgreSQL', 'REST APIs'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {techStack.map((tech, index) => (
          <div
            key={tech}
            className={`absolute text-gray-400/30 font-semibold select-none animate-float-${index % 4}`}
            style={{
              left: `${(index * 25 + Math.random() * 20 + 5) % 85}%`,
              top: `${(index * 19 + Math.random() * 15 + 10) % 75}%`,
              fontSize: `${Math.random() * 0.7 + 1}rem`,
              animationDelay: `${index * 0.8}s`,
              animationDuration: `${10 + (index % 4) * 3}s`
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackAnimation;