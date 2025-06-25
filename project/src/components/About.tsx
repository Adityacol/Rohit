import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">About</span>{' '}
            <span className="text-yellow-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Passionate About Mathematics & Computer Science
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a prospective mathematician with a deep passion for theoretical research and competitive programming. 
              Currently dual-enrolled at Stanford Continuing Studies and Harvard Extension School, I focus on advanced 
              mathematics including group theory, linear algebra, and mathematical analysis.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My research interests span pure mathematics and theoretical computer science. I've authored a 10-page 
              research paper on "Automorphisms of the Symmetric Group S₆" submitted to the Columbia Journal of 
              Undergraduate Mathematics.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond academics, I'm a competitive programmer ranked as Specialist on CodeForces, placing me in the 
              90+ percentile nationally. I also maintain a YouTube channel featuring Japanese guitar covers with 
              45,000+ impressions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/20">
              <div className="text-3xl text-yellow-400 font-bold mb-2">1445</div>
              <div className="text-gray-400">Max CodeForces Rating</div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/20">
              <div className="text-3xl text-yellow-400 font-bold mb-2">~20</div>
              <div className="text-gray-400">Students in Math Circle India</div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/20">
              <div className="text-3xl text-yellow-400 font-bold mb-2">45K+</div>
              <div className="text-gray-400">YouTube Impressions</div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/20">
              <div className="text-3xl text-yellow-400 font-bold mb-2">54th</div>
              <div className="text-gray-400">National Rank in IOI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;