import React from 'react';
import { Heart, Code, Coffee, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-indigo-600/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl">
            <span className="text-white font-bold text-3xl">PA</span>
          </div>
          
          <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Puti Andini
          </h3>
          <p className="text-gray-300 mb-8 text-lg font-medium">
            Quality Assurance Lead | QA Engineer | Tech Enthusiast
          </p>
          
          <div className="flex justify-center items-center gap-3 text-gray-300 mb-12 flex-wrap">
            <span className="text-lg">Made with</span>
            <div className="flex items-center gap-2">
              <Heart size={20} className="text-red-400 animate-pulse" />
              <Code size={20} className="text-blue-400" />
              <Coffee size={20} className="text-yellow-500" />
              <Sparkles size={20} className="text-purple-400" />
            </div>
            <span className="text-lg">in Indonesia</span>
          </div>
          
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-400 font-medium">
                © 2024 Puti Andini. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-gray-400 font-medium">
                <span>Built with</span>
                <div className="flex items-center gap-1">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-semibold">React</span>
                  <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm font-semibold">TypeScript</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-semibold">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;