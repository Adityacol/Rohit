import React from 'react';

const Research: React.FC = () => {
  const experiences = [
    {
      title: "Independent Research Paper",
      organization: "Columbia Journal of Undergraduate Mathematics",
      period: "2024",
      description: "Authored a comprehensive 10-page research paper on 'Automorphisms of the Symmetric Group S₆'. The paper explores advanced group theory concepts and their applications in abstract algebra.",
      type: "Research",
      status: "Under Review"
    },
    {
      title: "Student Researcher",
      organization: "Euler Circle",
      period: "April 2023 - July 2023",
      description: "Engaged in advanced coursework on Transition to Proofs: Analysis. Conducted independent research and developed technical writing skills through structured paper composition.",
      type: "Research",
      status: "Completed"
    },
    {
      title: "Competitive Programming",
      organization: "CodeForces",
      period: "2022 - Present",
      description: "Achieved Specialist rating (max 1445) through consistent performance in weekly contests. Ranked in 90+ percentile nationally among predominantly college-level participants.",
      type: "Competition",
      status: "Ongoing"
    },
    {
      title: "YouTube Content Creator",
      organization: "Personal Channel",
      period: "2022 - Present",
      description: "Created and maintained a YouTube channel featuring Japanese guitar covers. Achieved 45,000+ impressions through consistent content creation and musical performance.",
      type: "Creative",
      status: "Active"
    }
  ];

  return (
    <section id="research" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Research</span>{' '}
            <span className="text-yellow-400">& Experience</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/40 p-8 rounded-xl border border-blue-500/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-gray-300 mb-2">{exp.organization}</h4>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    exp.type === 'Research' ? 'bg-blue-500/20 text-blue-400' :
                    exp.type === 'Competition' ? 'bg-yellow-500/20 text-yellow-400' :
                    exp.type === 'Creative' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {exp.type}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    exp.status === 'Under Review' ? 'bg-orange-500/20 text-orange-400' :
                    exp.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    exp.status === 'Ongoing' || exp.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {exp.status}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;