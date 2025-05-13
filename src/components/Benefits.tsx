import React from 'react';
import { motion } from 'framer-motion';

interface Benefit {
  iconPath: string;
  title: string;
  description: string;
}

// Define your benefits data here
const benefits: Benefit[] = [
  {
    iconPath: '/icons/speed.svg',
    title: 'Rapid Development',
    description: 'Leverage templates and generators to prototype in minutes.',
  },
  {
    iconPath: '/icons/easy.svg',
    title: 'Easy to Learn',
    description: 'Intuitive API and guided tutorials make onboarding a breeze.',
  },
  {
    iconPath: '/icons/flexibility.svg',
    title: 'High Flexibility',
    description: 'Customize every component or extend with your own plugins.',
  },
  {
    iconPath: '/icons/community.svg',
    title: 'Community Support',
    description: 'Join Discord or GitHub discussions for help and feedback.',
  },
  {
    iconPath: '/icons/deploy.svg',
    title: 'One-Click Deploy',
    description: 'Deploy instantly to Vercel, Netlify or any static host.',
  },
  {
    iconPath: '/icons/scale.svg',
    title: 'Scalable',
    description: 'Build small prototypes or enterprise-grade applications.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Benefits: React.FC = () => (
  <section id="benefits" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      {/* Accessible heading for SEO */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Benefits of Wipe Coding
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {benefits.map((b, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg focus:shadow-lg transition-shadow cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileFocus={{ scale: 1.03 }}
          >
            <div className="w-12 h-12 mb-4 mx-auto">
              <img src={b.iconPath} alt={`${b.title} icon`} className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">
              {b.title}
            </h3>
            <p className="text-gray-600 text-center">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;