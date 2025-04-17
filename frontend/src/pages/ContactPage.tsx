import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import contactimg from "../assets/contact.jpg"
export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          ><div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg mb-8">
          <img
            src={contactimg}
            alt="Contact support"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+1 (234) 567-890</span>
                </a>
                
                <a href="mailto:info@fallguard.ai" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>b211077@gmail.com</span>
                </a>
                
                <a href="https://www.linkedin.com/in/dolybansal/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Linkedin className="h-5 w-5 mr-3" />
                  <span>FallGuard AI</span>
                </a>
                
                <a href="https://www.instagram.com/doly_agarwal_066/?next=%2F" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Instagram className="h-5 w-5 mr-3" />
                  <span>@fallguard.ai</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};