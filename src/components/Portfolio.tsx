import React from 'react';
import { ExternalLink, Github, Star, TrendingUp, Users, Clock } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform Testing',
      category: 'Web Application',
      description: 'Comprehensive testing suite for a multi-vendor e-commerce platform handling 100K+ daily transactions.',
      image: 'https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Selenium', 'TestNG', 'Jenkins', 'API Testing'],
      metrics: {
        'Bug Detection': '99.2%',
        'Test Coverage': '95%',
        'Performance': '+40%',
      },
      highlights: [
        'Automated 200+ test cases',
        'Reduced testing time by 60%',
        'Zero critical bugs in production',
      ],
    },
    {
      title: 'Mobile Banking App QA',
      category: 'Mobile Application',
      description: 'End-to-end testing for a secure mobile banking application with focus on security and performance.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Appium', 'Cypress', 'Security Testing', 'Performance Testing'],
      metrics: {
        'Security Score': '100%',
        'App Rating': '4.8/5',
        'Crash Rate': '<0.1%',
      },
      highlights: [
        'Passed security compliance audit',
        'Optimized app performance by 35%',
        'Cross-platform compatibility achieved',
      ],
    },
    {
      title: 'Healthcare SaaS Platform',
      category: 'Web Application',
      description: 'Quality assurance for HIPAA-compliant healthcare management system serving 50+ hospitals.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Playwright', 'REST API', 'Database Testing', 'Compliance Testing'],
      metrics: {
        'Uptime': '99.9%',
        'Data Accuracy': '100%',
        'Compliance': 'HIPAA Certified',
      },
      highlights: [
        'HIPAA compliance verification',
        'Automated critical user journeys',
        'Load tested for 10K concurrent users',
      ],
    },
    {
      title: 'IoT Device Management',
      category: 'IoT Platform',
      description: 'Testing framework for IoT device management platform connecting 1M+ devices globally.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['API Testing', 'IoT Protocols', 'Load Testing', 'Real-time Monitoring'],
      metrics: {
        'Device Connectivity': '99.8%',
        'Data Throughput': '1M msg/sec',
        'Response Time': '<100ms',
      },
      highlights: [
        'Tested 50+ device types',
        'Real-time data validation',
        'Scalability testing completed',
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Project
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Showcase of successful QA projects across various industries, demonstrating expertise in comprehensive testing solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                {/* Project Info */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600 mb-1">{value}</div>
                      <div className="text-xs text-slate-600">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-4 mt-6">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm font-medium">View Details</span>
                  </button>
                  <button className="flex items-center space-x-2 text-slate-600 hover:text-slate-700 transition-colors">
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">Test Suite</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
            Quality Assurance Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, number: '40%', label: 'Average Performance Improvement' },
              { icon: Users, number: '50+', label: 'Satisfied Clients' },
              { icon: Star, number: '99.9%', label: 'Bug Detection Rate' },
              { icon: Clock, number: '60%', label: 'Faster Testing Cycles' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-xl shadow-lg mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;