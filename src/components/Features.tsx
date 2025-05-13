import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Feature {
  title: string;
  description: string;
  iconPath: string;
}

const features: Feature[] = [
  { title: 'Idea', description: 'Define your app concept.', iconPath: '/icons/idea.svg' },
  { title: 'Prompt', description: 'Describe requirements.', iconPath: '/icons/prompt.svg' },
  { title: 'AI Suggestion', description: 'Get code from AI.', iconPath: '/icons/suggestion.svg' },
  { title: 'Test & Deploy', description: 'Review and launch.', iconPath: '/icons/launch.svg' },
];

// Container variants to stagger child animations
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }
};

// Item variants for each feature card
const itemVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Features: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Core Features
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row md:-mx-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className={`md:w-1/3 md:px-4 mb-8 md:mb-0 text-center cursor-pointer`}
              variants={itemVariants}
              onClick={() => {
                if (f.title === 'Idea') {
                  navigate('/idea');
                }
                if (f.title === 'Prompt') {
                  navigate('/prompt');
                }
                if (f.title === 'AI Suggestion') {
                  navigate('/ai-suggestion');
                }
                 if (f.title === 'Test & Deploy') {
                  navigate('/test-deploy');
                }
              }}
            >
              <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <img src={f.iconPath} alt={f.title} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
