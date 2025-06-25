import React from 'react';
import { Bug, Zap, BarChart3, Shield, TestTube, Settings, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bug,
      title: 'Manual Testing',
      description: 'Comprehensive manual testing including functional, usability, and exploratory testing to ensure optimal user experience.',
      features: ['Functional Testing', 'Usability Testing', 'Exploratory Testing', 'Regression Testing'],
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Test Automation',
      description: 'Advanced automation frameworks using Selenium, Cypress, and other modern tools to accelerate testing cycles.',
      features: ['Selenium WebDriver', 'Cypress Testing', 'API Automation', 'CI/CD Integration'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: 'Performance Testing',
      description: 'Load, stress, and performance testing to ensure your application handles real-world traffic efficiently.',
      features: ['Load Testing', 'Stress Testing', 'Volume Testing', 'Performance Monitoring'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Security Testing',
      description: 'Comprehensive security testing to identify vulnerabilities and ensure your application is protected.',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Security Audits', 'Compliance Testing'],
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: TestTube,
      title: 'API Testing',
      description: 'Thorough API testing including REST and GraphQL endpoints to ensure reliable backend functionality.',
      features: ['REST API Testing', 'GraphQL Testing', 'Data Validation', 'Error Handling'],
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Settings,
      title: 'QA Consulting',
      description: 'Strategic QA consulting to establish best practices, processes, and quality frameworks for your team.',
      features: ['Process Optimization', 'Tool Selection', 'Team Training', 'Quality Frameworks'],
      gradient: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            <span>Professional Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Comprehensive QA
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From manual testing to automation and performance optimization, we provide end-to-end quality assurance solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-slate-200"
            >
              <div className="p-8">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="group/btn flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Need a Custom QA Solution?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific quality assurance needs and create a tailored testing strategy.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;