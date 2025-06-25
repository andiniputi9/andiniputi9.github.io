import React from 'react';
import { Code, Database, Globe, Smartphone, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Testing Frameworks',
      skills: [
        { name: 'Selenium WebDriver', level: 95 },
        { name: 'Cypress', level: 90 },
        { name: 'Jest/React Testing Library', level: 85 },
        { name: 'Playwright', level: 80 },
      ],
    },
    {
      icon: Database,
      title: 'API & Database',
      skills: [
        { name: 'REST API Testing', level: 95 },
        { name: 'GraphQL Testing', level: 85 },
        { name: 'SQL Database Testing', level: 90 },
        { name: 'MongoDB Testing', level: 80 },
      ],
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: [
        { name: 'Cross-browser Testing', level: 95 },
        { name: 'Responsive Testing', level: 90 },
        { name: 'Accessibility Testing', level: 85 },
        { name: 'Performance Testing', level: 88 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Testing',
      skills: [
        { name: 'iOS Testing', level: 85 },
        { name: 'Android Testing', level: 90 },
        { name: 'React Native Testing', level: 80 },
        { name: 'Mobile Automation', level: 85 },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS Testing', level: 80 },
        { name: 'Docker/Containerization', level: 75 },
        { name: 'CI/CD Integration', level: 85 },
        { name: 'Load Testing (JMeter)', level: 88 },
      ],
    },
    {
      icon: GitBranch,
      title: 'Tools & Methodologies',
      skills: [
        { name: 'Agile/Scrum', level: 95 },
        { name: 'JIRA/Test Management', level: 90 },
        { name: 'Git Version Control', level: 85 },
        { name: 'Test Case Design', level: 95 },
      ],
    },
  ];

  const certifications = [
    'ISTQB Certified Tester Foundation Level',
    'Selenium WebDriver Certified',
    'AWS Certified Cloud Practitioner',
    'Agile Testing Certified Professional',
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code className="h-4 w-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Skills &
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Proficient in modern testing tools, frameworks, and methodologies to deliver comprehensive quality assurance solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-xl">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Professional Certifications
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Continuously updating skills and knowledge through industry-recognized certifications and training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100"
              >
                <div className="bg-green-500 p-2 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;