import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in your QA services. ${formData.name ? `My name is ${formData.name}.` : ''} ${formData.project ? `I need help with: ${formData.project}.` : ''} ${formData.message ? `Additional details: ${formData.message}` : ''}`
    );
    const whatsappUrl = `https://wa.me/1234567890?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('QA Project Inquiry');
    const body = encodeURIComponent(
      `Hi,\n\nI'm interested in your QA services.\n\n${formData.name ? `Name: ${formData.name}\n` : ''}${formData.company ? `Company: ${formData.company}\n` : ''}${formData.project ? `Project Type: ${formData.project}\n` : ''}\nMessage: ${formData.message || 'Please contact me to discuss my QA requirements.'}\n\nBest regards`
    );
    const emailUrl = `mailto:qa.expert@email.com?subject=${subject}&body=${body}`;
    window.location.href = emailUrl;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'qa.expert@email.com',
      action: 'mailto:qa.expert@email.com',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      action: 'https://wa.me/1234567890',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      action: null,
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      action: null,
    },
  ];

  const projectTypes = [
    'Manual Testing',
    'Test Automation',
    'Performance Testing',
    'Security Testing',
    'API Testing',
    'QA Consulting',
    'Other',
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="h-4 w-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Let's Discuss Your
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> QA Needs</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to ensure your software meets the highest quality standards? Let's talk about how we can work together to deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Start Your QA Project</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                <p className="text-slate-600">Thank you for your inquiry. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project, timeline, and specific QA requirements..."
                  />
                </div>

                {/* Contact Method Buttons */}
                <div className="space-y-4">
                  <p className="text-sm font-medium text-slate-700 text-center">Choose your preferred contact method:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Send WhatsApp</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleEmail}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Mail className="h-5 w-5" />
                      <span>Send Email</span>
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-slate-500">
                    Or submit the form and I'll contact you within 24 hours
                  </p>
                  <button
                    type="submit"
                    className="mt-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-slate-700 hover:to-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
                  >
                    <span>Submit Form</span>
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-xl flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-1">{info.title}</h4>
                      {info.action ? (
                        <a
                          href={info.action}
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-slate-800 mb-2">What's your typical project timeline?</h5>
                  <p className="text-slate-600 text-sm">Project timelines vary based on scope and complexity. Small projects can be completed in 1-2 weeks, while comprehensive QA implementations may take 4-8 weeks.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 mb-2">Do you work with agile teams?</h5>
                  <p className="text-slate-600 text-sm">Absolutely! I have extensive experience working in agile environments and can integrate seamlessly with your existing development processes.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 mb-2">Can you help with existing test automation?</h5>
                  <p className="text-slate-600 text-sm">Yes, I can review, optimize, and enhance existing automation frameworks, or help migrate to more suitable tools and practices.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
              <h4 className="text-xl font-bold text-slate-800 mb-4">Ready to Get Started?</h4>
              <p className="text-slate-600 mb-6">Let's schedule a free consultation to discuss your QA needs and how I can help ensure your software's success.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleWhatsApp}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Now</span>
                </button>
                <button 
                  onClick={handleEmail}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Send Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;