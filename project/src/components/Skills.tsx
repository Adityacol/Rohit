import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Mathematics",
      skills: [
        { name: "Group Theory", level: 90 },
        { name: "Linear Algebra", level: 85 },
        { name: "Mathematical Analysis", level: 80 },
        { name: "Abstract Algebra", level: 85 },
        { name: "Multivariable Calculus", level: 90 },
        { name: "Number Theory", level: 75 }
      ]
    },
    {
      title: "Computer Science",
      skills: [
        { name: "Algorithms & Data Structures", level: 95 },
        { name: "Competitive Programming", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 90 },
        { name: "HTML", level: 80 },
        { name: "Theoretical CS", level: 85 }
      ]
    },
    {
      title: "Physics",
      skills: [
        { name: "Quantum Mechanics", level: 75 },
        { name: "Relativity", level: 70 },
        { name: "Optics", level: 80 },
        { name: "Classical Mechanics", level: 85 }
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Research Writing", level: 85 },
        { name: "Guitar Playing", level: 80 },
        { name: "Teaching/Tutoring", level: 85 },
        { name: "Content Creation", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Skills</span>{' '}
            <span className="text-yellow-400">& Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/30 p-8 rounded-xl border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-yellow-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-yellow-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/40 p-8 rounded-xl border border-blue-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Certifications & Credentials</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-lg">CS50x Certificate</div>
                <div className="text-gray-400 text-sm">Harvard University</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-lg">CodeForces Specialist</div>
                <div className="text-gray-400 text-sm">Max Rating: 1445</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold text-lg">IGCSE Graduate</div>
                <div className="text-gray-400 text-sm">Wolsey Hall Oxford</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;