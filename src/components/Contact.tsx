import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-300/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/10 to-pink-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 mb-6">
            <Mail size={24} className="text-indigo-600" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing Quality Assurance opportunities, sharing
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          {/* Contact Information */}
          <div className="flex-1 bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <a href="mailto:andiniputi9@gmail.com" className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-blue-200/30">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Email</p>
                  <p className="text-indigo-600 font-medium">andiniputi9@gmail.com</p>
                </div>
              </a>

              <a href="tel:+6287715230618" className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-emerald-200/30">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">Phone</p>
                  <p className="text-emerald-600 font-medium">+62 877-1523-0618</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/puti-andini" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-blue-200/30"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">LinkedIn</p>
                  <p className="text-blue-600 font-medium">linkedin.com/in/puti-andini</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50/50 to-slate-50/50 rounded-2xl border border-gray-200/30">
                <div className="w-14 h-14 bg-gradient-to-r from-gray-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Location</p>
                  <p className="text-gray-600 font-medium">Banten, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="flex-1 bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Quality Assurance',
                'Team Leadership',
                'Test Automation',
                'Banking Systems',
                'Healthcare Tech',
                'Manual Testing',
                'API Testing',
                'System Integration'
              ].map((expertise, index) => (
                <div key={index} className="px-4 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-xl text-sm font-semibold text-center border border-indigo-200/30 hover:shadow-md transition-all duration-300 hover:scale-105">
                  {expertise}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;