import React from 'react';
import { CheckCircle, Shield, Award, ArrowRight, Zap, Target } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: '500+', label: 'Projects Tested', icon: Target },
    { number: '99.9%', label: 'Bug Detection Rate', icon: Zap },
    { number: '50+', label: 'Happy Clients', icon: CheckCircle },
    { number: '5+', label: 'Years Experience', icon: Award },
  ];

  const keyFeatures = [
    { icon: CheckCircle, text: 'Manual Testing', color: 'text-green-600' },
    { icon: Shield, text: 'Test Automation', color: 'text-blue-600' },
    { icon: Award, text: 'Quality Consulting', color: 'text-purple-600' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-qa-blue-50 via-white to-qa-teal-50"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-qa-blue-100 rounded-full opacity-30 blur-3xl animate-bounce-subtle"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-qa-teal-100 rounded-full opacity-20 blur-3xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-qa-blue-100 text-qa-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Shield className="h-4 w-4" />
              <span>Certified QA Professional</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Expert
              <span className="bg-gradient-to-r from-qa-blue-600 to-qa-teal-600 bg-clip-text text-transparent"> Quality Assurance </span>
              & Testing Services
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Delivering comprehensive QA solutions with manual testing, automation, performance testing, and quality assurance consulting to ensure your software meets the highest standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => scrollToSection('services')}
                className="group bg-gradient-to-r from-qa-blue-600 to-qa-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-qa-blue-700 hover:to-qa-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-qa-blue-600 hover:text-qa-blue-600 hover:bg-qa-blue-50 transition-all duration-200 transform hover:-translate-y-1"
              >
                View Portfolio
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 justify-center lg:justify-start p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-200">
                  <div className={`p-2 rounded-lg ${feature.color === 'text-green-600' ? 'bg-green-100' : feature.color === 'text-blue-600' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                    <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  </div>
                  <span className="text-slate-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg animate-bounce-subtle">
                Available Now
              </div>
              
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-qa-blue-600 to-qa-teal-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Quality Guaranteed</h3>
                <p className="text-slate-600">Professional QA Services</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg hover:from-qa-blue-50 hover:to-qa-teal-50 transition-all duration-200 group">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="h-5 w-5 text-qa-blue-600 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <div className="text-2xl font-bold text-qa-blue-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-20 h-20 bg-qa-blue-200 rounded-full opacity-60 animate-bounce-subtle"></div>
            <div className="absolute -z-10 bottom-10 -left-10 w-32 h-32 bg-qa-teal-200 rounded-full opacity-40 animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;