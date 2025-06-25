import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'Every test case is meticulously designed and executed with attention to detail, ensuring comprehensive coverage and reliable results.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Adaptation',
      description: 'Staying current with latest testing methodologies and tools to provide cutting-edge QA solutions for modern applications.',
    },
    {
      icon: Users,
      title: 'Collaboration & Communication',
      description: 'Working closely with development teams to integrate quality practices throughout the software development lifecycle.',
    },
    {
      icon: Award,
      title: 'Excellence & Continuous Improvement',
      description: 'Committed to delivering exceptional quality while continuously refining processes and expanding expertise.',
    },
  ];

  const experience = [
    {
      year: '2019-2024',
      role: 'Senior QA Engineer',
      company: 'TechCorp Solutions',
      achievements: [
        'Led QA for 15+ enterprise applications',
        'Implemented automation framework reducing testing time by 60%',
        'Mentored 5 junior QA engineers',
      ],
    },
    {
      year: '2017-2019',
      role: 'QA Automation Engineer',
      company: 'Digital Innovations Inc.',
      achievements: [
        'Developed comprehensive test automation suite',
        'Achieved 95% test coverage across web applications',
        'Specialized in API and database testing',
      ],
    },
    {
      year: '2015-2017',
      role: 'Junior QA Tester',
      company: 'StartupTech',
      achievements: [
        'Performed manual testing for mobile applications',
        'Created detailed test documentation and reports',
        'Collaborated with cross-functional agile teams',
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Passionate About
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Quality</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A dedicated Quality Assurance professional with 5+ years of experience ensuring software excellence through comprehensive testing strategies and innovative automation solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">My QA Journey</h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  My journey in Quality Assurance began with a fascination for finding the perfect balance between functionality and user experience. What started as curiosity about "what could go wrong" evolved into a systematic approach to ensuring software excellence.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Over the years, I've had the privilege of working with diverse teams across various industries - from fintech startups to healthcare enterprises. Each project has taught me that quality isn't just about finding bugs; it's about understanding user needs, business requirements, and technical constraints.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Today, I combine manual testing expertise with advanced automation skills to deliver comprehensive QA solutions. My goal is to help teams ship confidently while maintaining the highest quality standards.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Core Values</h3>
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl flex-shrink-0">
                    <value.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{value.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl shadow-lg p-6 ml-8">
                    <div className="absolute -left-4 top-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="text-sm text-blue-600 font-medium mb-2">{exp.year}</div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{exp.role}</h4>
                    <p className="text-slate-600 mb-4">{exp.company}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {index < experience.length - 1 && (
                    <div className="absolute left-0 top-14 w-px h-16 bg-slate-200 ml-4"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Personal Touch */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-12">
              <h4 className="text-xl font-bold text-slate-800 mb-4">Beyond Testing</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                When I'm not hunting down bugs or writing test cases, you'll find me contributing to open-source testing frameworks, writing technical blogs about QA best practices, or mentoring aspiring testers in the community.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I believe that great software is built by great teams, and quality is everyone's responsibility - not just the QA team's.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;