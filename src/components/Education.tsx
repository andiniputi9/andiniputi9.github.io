import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Star } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 mb-6">
            <BookOpen size={24} className="text-indigo-600" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Academic Foundation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Academic foundation in Information Systems supporting my career in Quality Assurance.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border border-white/20 hover:-translate-y-2 group">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={40} className="text-white" />
              </div>
              
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    Bachelor's Degree in Information System
                  </h3>
                  <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Universitas Insan Pembangunan Indonesia
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                    <Calendar size={20} className="text-indigo-600" />
                    <span className="font-semibold text-gray-700">2016 - 2020</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                    <MapPin size={20} className="text-purple-600" />
                    <span className="font-semibold text-gray-700">Indonesia</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50/50 to-blue-50/50 rounded-2xl p-8 border border-gray-200/50 mb-8">
                  <h4 className="font-bold text-gray-900 mb-6 text-xl flex items-center gap-3">
                    <Star size={24} className="text-yellow-500" />
                    Relevant Coursework & Skills Developed
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Software Development Life Cycle",
                      "Database Management Systems",
                      "System Analysis & Design",
                      "Project Management",
                      "Quality Assurance Principles",
                      "Information Security"
                    ].map((course, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-xl hover:shadow-md transition-all duration-300 group/item">
                        <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full group-hover/item:scale-125 transition-transform"></div>
                        <span className="text-gray-700 font-medium group-hover/item:text-indigo-600 transition-colors">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl border-l-4 border-indigo-600">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-lg font-bold">"</span>
                    </div>
                    <p className="text-gray-700 italic text-lg leading-relaxed">
                      My Information Systems education provided a solid foundation in understanding 
                      software systems, database management, and quality assurance principles that 
                      directly support my current role as a QA Engineer and team leader.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;