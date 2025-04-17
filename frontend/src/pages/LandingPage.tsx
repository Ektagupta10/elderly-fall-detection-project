import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Camera, Bell, Clock, CheckCircle } from 'lucide-react';
import { AuthModal } from '../components/AuthModal';
import flowimg from '../assets/flow.jpg';
import backimg from '../assets/background.jpg';

export const LandingPage: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Advanced AI Detection',
      description: 'State-of-the-art machine learning algorithms for accurate fall detection'
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Analysis',
      description: 'Instant video processing and fall detection results'
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-500" />,
      title: 'Instant Alerts',
      description: 'Immediate notifications when falls are detected'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock fall detection for complete peace of mind'
    }
  ];

  const benefits = [
    'Reduce response time to falls by up to 70%',
    'Prevent serious injuries with early detection',
    'Peace of mind for families and caregivers',
    'Easy-to-use interface for all age groups'
  ];

  const handleAuth = (type: 'login' | 'signup') => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative pb-32">
        <div className="absolute inset-0 z-0">
          <img
            src={backimg}
            alt="Elderly care background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block p-3 bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-lg rounded-full mb-8 ring-1 ring-white/20"
            >
              <Shield size={40} className="text-blue-100" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Protecting Seniors
              <span className="block mt-2 bg-gradient-to-r from-blue-200 to-blue-100 text-transparent bg-clip-text">
                With AI Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Our advanced AI system monitors and detects falls in real-time,
              providing instant alerts and ensuring the safety of your loved ones
              24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-x-6"
            >
              <button
                onClick={() => handleAuth('login')}
                className="bg-gradient-to-r from-blue-100 to-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:from-white hover:to-blue-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Login Now
              </button>
              <button
                onClick={() => handleAuth('signup')}
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-medium border-2 border-white/80 hover:bg-white/10 transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                Create Account
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="relative z-20 max-w-5xl mx-auto px-4 -mb-32"
        >
          <div className="bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">&lt;2s</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="pt-48 pb-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology for comprehensive fall detection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose FallGuard AI?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of advanced fall detection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16 "
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-[500px] h-[450px] mx-auto">
                <img
                  src={flowimg}
                  alt="Elderly care"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultView={authType}
      />
    </div>
  );
};