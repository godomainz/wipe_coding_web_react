import React from 'react';
import { motion } from 'framer-motion';

interface Challenge {
  title: string;
  description: string;
}

const challenges: Challenge[] = [
  {
    title: 'Template Over-Reliance',
    description: 'Relying heavily on pre-built templates can stifle unique designs and limit custom behavior.',
  },
  {
    title: 'Customization Complexity',
    description: 'Deep customizations may require manual coding, reducing the low-code benefits.',
  },
  {
    title: 'Scalability Constraints',
    description: 'Large-scale enterprise projects might outgrow the initial boilerplate architecture.',
  },
  {
    title: 'Dependency Management',
    description: 'Keeping third‑party libraries up-to-date can introduce breaking changes over time.',
  },
  {
    title: 'Learning Curve',
    description: 'New users may take time to adapt to the Wipe Coding philosophy and tooling.',
  },
  {
    title: 'AI Hallucinations',
    description: 'The AI may generate incorrect or unsafe code; always review.',
  },
  {
    title: 'Over-reliance',
    description: 'Dependence on AI can stunt your own coding skills.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const RisksChallenges: React.FC = () => (
  <section id="risks" className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      {/* Semantic heading for SEO/accessibility */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Risks &amp; Challenges of Wipe Coding
      </h2>

      <div className="space-y-8">
        {challenges.map((c, idx) => (
          <motion.div
            key={idx}
            className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-default"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          >
            {/* Numbered badge */}
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full">
              {idx + 1}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{c.title}</h3>
              <p className="text-gray-600">{c.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RisksChallenges;