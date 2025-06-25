import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'services', 'skills', 'portfolio', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Skills', id: 'skills' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 group"
          >
            <div className="bg-gradient-to-br from-qa-blue-600 to-qa-teal-600 p-2.5 rounded-xl group-hover:scale-105 transition-transform duration-200">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-200 ${
                isScrolled ? 'text-slate-800' : 'text-slate-800'
              }`}>
                QA Expert
              </h1>
              <p className={`text-xs hidden sm:block transition-colors duration-200 ${
                isScrolled ? 'text-slate-600' : 'text-slate-600'
              }`}>
                Quality Assurance Professional
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 relative group ${
                  activeSection === item.id
                    ? 'text-qa-blue-600 bg-qa-blue-50'
                    : isScrolled 
                      ? 'text-slate-700 hover:text-qa-blue-600 hover:bg-qa-blue-50' 
                      : 'text-slate-700 hover:text-qa-blue-600 hover:bg-white/80'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-qa-blue-600 transition-all duration-200 ${
                  activeSection === item.id ? 'w-6' : 'group-hover:w-6'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-qa-blue-600 to-qa-teal-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-qa-blue-700 hover:to-qa-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled 
                ? 'text-slate-700 hover:text-qa-blue-600 hover:bg-qa-blue-50' 
                : 'text-slate-700 hover:text-qa-blue-600 hover:bg-white/80'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-slate-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-qa-blue-600 bg-qa-blue-50'
                    : 'text-slate-700 hover:text-qa-blue-600 hover:bg-qa-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-qa-blue-600 to-qa-teal-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-qa-blue-700 hover:to-qa-teal-700 transition-all duration-200"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;