import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Upload, Search, Heart, Clock, Bell, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import fallimg from "../assets/fall.jpg"

export const HomePage: React.FC = () => {
  const advantages = [
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: 'Peace of Mind',
      description: 'Know your loved ones are safe with 24/7 monitoring'
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      title: 'Quick Response',
      description: 'Instant notifications when falls are detected'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'Smart Detection',
      description: 'Advanced AI algorithms for accurate fall detection'
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-500" />,
      title: 'Alert System',
      description: 'Customizable alerts and notification preferences'
    }
  ];

  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-blue-600 " />,
      title: 'Upload Video',
      description: 'Upload a video of an elderly person performing daily activities.',
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: 'AI Analysis',
      description: 'Our advanced AI system analyzes the video for potential falls.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Fall Detection',
      description: 'Receive instant alerts if a fall is detected in the video.',
    },
    // {
    //   icon: <Download className="w-8 h-8 text-blue-600" />,
    //   title: 'Download Report',
    //   description: 'Get a detailed report of the analysis for your records.',
    // },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[600px] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={fallimg}
            alt="Elderly care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-6"
            >
              Advanced Fall Detection for Enhanced Elder Care
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8"
            >
              Our AI-powered system provides real-time monitoring and instant alerts
              to ensure the safety of your loved ones.
            </motion.p>
            <Link
              to="/upload"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Try It Now
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Why Choose FallGuard AI?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};