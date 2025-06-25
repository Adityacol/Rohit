import React from 'react';
import { MessageCircle, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Get</span>{' '}
            <span className="text-yellow-400">In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Let's connect and discuss opportunities in mathematics, research, or technology
          </p>
        </div>

        <div className="bg-slate-800/40 p-8 md:p-12 rounded-xl border border-blue-500/20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/30 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">New Delhi, Delhi, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-400/30 transition-colors duration-300">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/rohitl-2b3a14212" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      linkedin.com/in/rohitl-2b3a14212
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-400/30 transition-colors duration-300">
                    <MessageCircle className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Discord</h4>
                    <a 
                      href="https://discordapp.com/users/809687391106891787" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      Connect on Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Current Focus
              </h3>
              
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-102">
                  <h4 className="text-white font-semibold mb-2">Research Interests</h4>
                  <p className="text-gray-400 text-sm">
                    Group Theory, Abstract Algebra, Theoretical Computer Science
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-102">
                  <h4 className="text-white font-semibold mb-2">Academic Status</h4>
                  <p className="text-gray-400 text-sm">
                    Dual enrolled at Stanford ULO & Harvard Extension School
                  </p>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-102">
                  <h4 className="text-white font-semibold mb-2">Seeking</h4>
                  <p className="text-gray-400 text-sm">
                    Research collaborations, mentorship opportunities, academic discussions
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Open to discussing research opportunities, academic collaborations, or simply connecting with fellow mathematicians and programmers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/rohitl-2b3a14212"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
              <a
                href="https://discordapp.com/users/809687391106891787"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;