import React from 'react';

const Awards: React.FC = () => {
  const awards = [
    {
      title: "54th National Rank",
      event: "Indian Olympiad in Informatics (IOI) - First Stage",
      year: "2024",
      description: "Achieved top 54 ranking nationally in the preliminary round of India's premier competitive programming olympiad",
      category: "Programming"
    },
    {
      title: "INOI 2024 Qualification",
      event: "Indian National Olympiad in Informatics",
      year: "2024",
      description: "Qualified for the second stage of IOI, demonstrating advanced algorithmic problem-solving capabilities",
      category: "Programming"
    },
    {
      title: "Math Circle India Selection",
      event: "ICTS-TIFR Mathematics Program",
      year: "2023",
      description: "Among ~20 students nationally selected through competitive entrance examination with full scholarship",
      category: "Mathematics"
    },
    {
      title: "STEMS Computer Science Top 30",
      event: "STEMS Academic Competition",
      year: "2023",
      description: "Recognized among top 30 students nationally in computer science academic competition",
      category: "Computer Science"
    },
    {
      title: "USACO Silver Division",
      event: "USA Computing Olympiad",
      year: "2023",
      description: "Advanced to Silver division in the prestigious USA Computing Olympiad competition",
      category: "Programming"
    },
    {
      title: "CodeForces Specialist",
      event: "CodeForces Competitive Programming",
      year: "2022-Present",
      description: "Achieved and maintained Specialist rating (max 1445) representing 90+ percentile performance nationally",
      category: "Programming"
    }
  ];

  const categories = ['Programming', 'Mathematics', 'Computer Science'];
  const categoryColors = {
    'Programming': 'bg-blue-500/20 text-blue-400',
    'Mathematics': 'bg-yellow-500/20 text-yellow-400',
    'Computer Science': 'bg-purple-500/20 text-purple-400'
  };

  return (
    <section id="awards" className="py-20 px-6 bg-slate-800/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Awards</span>{' '}
            <span className="text-yellow-400">& Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-slate-800/40 p-6 rounded-xl border border-blue-500/20 hover:border-yellow-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-400 mb-2 leading-tight">
                    {award.title}
                  </h3>
                  <h4 className="text-sm text-gray-300 mb-2 leading-relaxed">
                    {award.event}
                  </h4>
                </div>
                <span className="text-yellow-400 font-semibold text-sm">
                  {award.year}
                </span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {award.description}
              </p>
              
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[award.category as keyof typeof categoryColors]}`}>
                {award.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-slate-800/40 px-8 py-4 rounded-xl border border-blue-500/20">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${categoryColors[category as keyof typeof categoryColors].replace('text-', 'bg-').replace('/20', '/60')}`}></div>
                <span className="text-gray-300 text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;