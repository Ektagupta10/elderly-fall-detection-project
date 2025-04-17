import React from 'react';
import { motion } from 'framer-motion';

// ✅ Corrected image paths based on your folder structure
import ektaImg from '../assets/ekta.jpg';
import divya2Img from '../assets/divya2.jpg';
import divyaImg from '../assets/divya.jpg';
import dolyImg from '../assets/doly.jpg';

export const TeamPage: React.FC = () => {
  const team = [
    {
      name: 'Ekta Gupta',
      role: 'AI_ML Developer',
      bio: 'Expert in computer vision and machine learning, leading the development of our fall detection algorithms.',
      image: ektaImg
    },
    {
      name: 'Divya Nyati',
      role: 'AI_ML Developer',
      bio: 'Expert in computer vision and machine learning, leading the development of our fall detection algorithms.',
      image: divyaImg
    },
    {
      name: 'Divya',
      role: 'UX Designer',
      bio: 'Creating intuitive and accessible interfaces for elderly care applications.',
      image: divya2Img
    },
    {
      name: 'Doly Bansal',
      role: 'Full Stack Developer',
      bio: 'Full-stack developer with expertise in real-time video processing and cloud infrastructure.',
      image: dolyImg
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Meet Our Team
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
