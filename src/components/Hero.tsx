import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Download, ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="relative mb-12">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl relative">
              <span className="text-white font-bold text-5xl">PA</span>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                Puti Andini
              </span>
            </h1>
            
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 mb-6">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Quality Assurance Lead | QA Engineer | Tech Enthusiast
              </p>
            </div>
          </div>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <MapPin size={24} className="text-indigo-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-600">Location</p>
              <p className="font-semibold text-gray-900">Banten, Indonesia</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Phone size={24} className="text-indigo-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-600">Phone</p>
              <p className="font-semibold text-gray-900">087715230618</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Mail size={24} className="text-indigo-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-600">Email</p>
              <p className="font-semibold text-gray-900 text-sm">andiniputi9@gmail.com</p>
            </div>
            
            <a
              href="https://www.linkedin.com/in/puti-andini"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Linkedin size={24} className="text-indigo-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-gray-600">LinkedIn</p>
              <p className="font-semibold text-gray-900 text-sm">View Profile</p>
            </a>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/20">
              <p className="text-lg text-gray-700 leading-relaxed">
                A professional QA Engineer with a strong background in Quality Assurance. 
                Proficient in Manual test, scripting UAT, and deployment. Skilled in quick learning, 
                effective communication, hard work, and self-confidence. I thrive in dynamic environments 
                and easily adapt to new situations. Highly motivated and responsible, I excel in leading 
                a team and work under pressure.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1">
              <Download size={20} />
              Download Resume
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/60 backdrop-blur-xl text-gray-900 rounded-2xl hover:bg-white/80 transition-all duration-300 font-semibold shadow-lg border border-white/20 hover:shadow-xl hover:-translate-y-1">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;