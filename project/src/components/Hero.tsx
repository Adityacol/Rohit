import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    'Mathematician',
    'Researcher', 
    'Competitive Programmer',
    'Student at Stanford & Harvard'
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const currentText = roles[currentRole];
    
    if (isTyping) {
      // Typing phase
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 80);
      } else {
        // Finished typing, wait then start erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Erasing phase
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Finished erasing, move to next role
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayText, currentRole, isTyping, roles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-blue-400">Rohit</span>{' '}
          <span className="text-yellow-400">L.</span>
        </h1>
        
        <div className="text-2xl md:text-4xl mb-8 h-12 flex items-center justify-center">
          <span className="text-gray-300">Prospective </span>
          <span className="text-blue-400 ml-2 min-w-0">
            {displayText}
            <span className="border-r-2 border-yellow-400 ml-1 animate-pulse">
              &nbsp;
            </span>
          </span>
        </div>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          CodeForces Specialist • Independent Researcher • Math Circle India Scholar
          <br />
          Dual enrolled at Stanford ULO & Harvard Extension
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View Research
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;