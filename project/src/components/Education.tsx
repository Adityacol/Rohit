import React from 'react';

const Education: React.FC = () => {
  const educations = [
    {
      institution: "Stanford Continuing Studies",
      degree: "Mathematics and Physics",
      period: "June 2023 - May 2025",
      description: "Advanced coursework in Multivariable Calculus, Group Theory, Linear Algebra, Optics, Relativity, and Quantum Mechanics",
      highlight: "Current"
    },
    {
      institution: "Harvard Extension School",
      degree: "Theoretical Computer Science",
      period: "August 2024 - December 2024",
      description: "Specialized focus on theoretical aspects of computer science and algorithmic complexity",
      highlight: "Current"
    },
    {
      institution: "ICTS - TIFR Math Circle India",
      degree: "Advanced Mathematics Program",
      period: "2023 - Present",
      description: "Among ~20 students nationally selected through entrance exam with full scholarship",
      highlight: "Selective"
    },
    {
      institution: "Harvard CS50",
      degree: "CS50x Computer Science Certificate",
      period: "July 2022 - August 2023",
      description: "Completed all assignments including AI automated game final project. Mastered 4 programming languages",
      highlight: "Certified"
    },
    {
      institution: "Wolsey Hall Oxford",
      degree: "IGCSE Curriculum",
      period: "May 2021 - July 2023",
      description: "Mathematics, Additional Mathematics, English, Economics, Physics, Computer Science. Scored 89-90 in internals",
      highlight: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-slate-800/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Education</span>{' '}
            <span className="text-yellow-400">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/30 p-8 rounded-xl border border-blue-500/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-102"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-1">
                    {edu.institution}
                  </h3>
                  <h4 className="text-xl text-gray-300 mb-2">{edu.degree}</h4>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">{edu.period}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    edu.highlight === 'Current' ? 'bg-green-500/20 text-green-400' :
                    edu.highlight === 'Selective' ? 'bg-yellow-500/20 text-yellow-400' :
                    edu.highlight === 'Certified' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {edu.highlight}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;