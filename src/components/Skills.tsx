import React from 'react';
import { Shield, Database, Settings, Users, Globe, Award, Zap, Code, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Quality Assurance",
      icon: Shield,
      skills: [
        { name: "Manual Testing", level: 95 },
        { name: "Test Planning & Strategy", level: 90 },
        { name: "User Acceptance Testing", level: 88 },
        { name: "Regression Testing", level: 92 },
        { name: "API Testing", level: 85 },
        { name: "Cross-platform Testing", level: 90 }
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Technical Skills",
      icon: Settings,
      skills: [
        { name: "JIRA & Test Management", level: 95 },
        { name: "SQL Database Queries", level: 80 },
        { name: "Load Testing", level: 75 },
        { name: "Test Automation", level: 70 },
        { name: "Deployment Processes", level: 85 },
        { name: "System Integration", level: 88 }
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Leadership & Management",
      icon: Users,
      skills: [
        { name: "Team Leadership", level: 92 },
        { name: "Project Management", level: 88 },
        { name: "Stakeholder Communication", level: 90 },
        { name: "Process Improvement", level: 85 },
        { name: "Risk Assessment", level: 80 },
        { name: "Performance Monitoring", level: 87 }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Industry Knowledge",
      icon: Database,
      skills: [
        { name: "Banking Systems", level: 95 },
        { name: "Healthcare Technology", level: 85 },
        { name: "Sharia Banking Compliance", level: 90 },
        { name: "Enterprise Resource Planning", level: 75 },
        { name: "Food Safety Standards", level: 70 },
        { name: "Warehouse Operations", level: 80 }
      ],
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const languages = [
    { name: "Bahasa Indonesia", level: "Native", flag: "🇮🇩" },
    { name: "English", level: "Limited Working", flag: "🇬🇧" },
    { name: "Korean", level: "Elementary", flag: "🇰🇷" }
  ];

  const certifications = [
    { name: "Software Testing: Process, Technique & Tools", icon: Award }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-to-br from-pink-200/20 to-indigo-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 mb-6">
            <Brain size={24} className="text-indigo-600" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Expertise & Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set spanning quality assurance, leadership, 
            and technical expertise across multiple industries.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm font-bold text-gray-500 bg-gray-100/50 px-3 py-1 rounded-lg">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200/50 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-1000 shadow-sm`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages and Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                Languages
              </h3>
            </div>

            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-2xl border border-gray-100/50 hover:shadow-lg transition-all duration-300 group/item">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-semibold text-gray-700 group-hover/item:text-indigo-600 transition-colors">
                      {lang.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-600 bg-white/80 px-4 py-2 rounded-xl shadow-sm">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-6 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-2xl border-l-4 border-yellow-500 hover:shadow-lg transition-all duration-300 group/item">
                  <div className="flex items-center gap-3">
                    <cert.icon size={24} className="text-yellow-600 group-hover/item:scale-110 transition-transform" />
                    <span className="font-semibold text-gray-700 group-hover/item:text-yellow-700 transition-colors">
                      {cert.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;