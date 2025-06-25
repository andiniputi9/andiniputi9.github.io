import React from 'react';
import { Calendar, MapPin, Users, Target, Briefcase, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "PT Bank Syariah Indonesia Tbk.",
      position: "Sistem Integration Test Lead",
      duration: "August 2024 - Present",
      location: "Jakarta, Indonesia",
      description: "Leading system integration testing for Core Banking Upgrade project at Indonesia's largest Sharia bank.",
      highlights: [
        "Managing 25-member test team for Core Banking Upgrade R24 (Themenos)",
        "Overseeing 66 Sharia-compliant funding products and 715 financing products",
        "Coordinating testing for 95 surrounding applications",
        "Reviewed 250,000+ test scenarios",
        "Managing JIRA, Xray, Zephyr, ALM for comprehensive test execution"
      ],
      isCurrentRole: true,
      color: "from-emerald-500 to-teal-600"
    },
    {
      company: "Tester Work",
      position: "Quality Assurance Tester",
      duration: "July 2022 - Present",
      location: "London Area, United Kingdom",
      description: "Manual testing specialist focusing on cross-platform application testing.",
      highlights: [
        "Performing manual testing across multiple platforms (TikTok, Facebook, WhatsApp, Instagram)",
        "Conducting exploratory testing to improve user experience",
        "Executing comprehensive test cycles and bug validation",
        "Cross-platform testing expertise"
      ],
      isCurrentRole: true,
      color: "from-blue-500 to-indigo-600"
    },
    {
      company: "KlikDokter",
      position: "QA Lead",
      duration: "September 2022 - August 2024",
      location: "Jakarta, Indonesia",
      description: "Led quality assurance for Indonesia's leading digital healthcare platform (Kalbe Farma family).",
      highlights: [
        "Led 13-member QA team covering manual and automated testing",
        "Collaborated with cross-functional teams (Engineers, PMO, PO, Product Design)",
        "Implemented comprehensive test automation frameworks",
        "Maintained application quality with minimal production issues",
        "Conducted team coaching and knowledge sharing sessions"
      ],
      isCurrentRole: false,
      color: "from-purple-500 to-pink-600"
    },
    {
      company: "KlikDokter",
      position: "QA Engineer",
      duration: "September 2021 - September 2022",
      location: "Jakarta Raya, Indonesia",
      description: "Comprehensive testing across web, mobile, and API platforms.",
      highlights: [
        "Designed test scenarios for web, Android, iOS, and API platforms",
        "Participated in full SDLC including deployment processes",
        "Conducted SQL database queries and load testing",
        "Active participant in Agile ceremonies (sprint planning, reviews, standups)"
      ],
      isCurrentRole: false,
      color: "from-indigo-500 to-purple-600"
    },
    {
      company: "PT Bank Central Asia Tbk",
      position: "Software Tester",
      duration: "September 2020 - September 2021",
      location: "Jakarta Raya, Indonesia",
      description: "Quality assurance for Indonesia's largest private bank established since 1957.",
      highlights: [
        "Developed comprehensive test scenarios aligned with banking requirements",
        "Conducted User Acceptance Testing (UAT) validation",
        "Collaborated with development teams for bug resolution",
        "Monitored QA metrics and performed regression testing"
      ],
      isCurrentRole: false,
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-indigo-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 mb-6">
            <Briefcase size={24} className="text-indigo-600" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 4 years of comprehensive experience in Quality Assurance, 
            leading teams and ensuring software quality across various industries.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-indigo-600 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-white/20 hover:-translate-y-2 group">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {exp.position}
                        </h3>
                        <p className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
                          {exp.company}
                        </p>
                      </div>
                      {exp.isCurrentRole && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-xl shadow-lg">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          Current
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2 px-3 py-1 bg-gray-100/50 rounded-lg">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-gray-100/50 rounded-lg">
                        <MapPin size={16} />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 flex items-center gap-3 text-lg">
                        <div className={`w-8 h-8 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center`}>
                          <Target size={16} className="text-white" />
                        </div>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start gap-3 group/item">
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;