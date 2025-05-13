// src/components/ToolsResources.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Resource {
  iconPath: string;
  title: string;
  description: string;
}

const resources: Resource[] = [
  {
    iconPath: '/icons/chatgpt.svg',
    title: 'ChatGpt',
    description: 'Generative artificial intelligence chatbot',
  },
  {
    iconPath: '/icons/tempo.svg',
    title: 'Tempo Labs',
    description: 'AI-driven full-stack app builder with PRD generation and visual flows.',
  },
  {
    iconPath: '/icons/bolt.svg',
    title: 'Bolt.new',
    description: 'Build full-stack apps from Figma designs in-browser using AI prompts.',
  },
  {
    iconPath: '/icons/lovable.svg',
    title: 'Lovable.dev',
    description: 'Targeted UI edits and backend integration via prompts and GitHub sync.',
  },
  {
    iconPath: '/icons/replit.svg',
    title: 'Replit AI',
    description: 'Chat-based code generation, live previews, and one-click deploy.',
  },
  {
    iconPath: '/icons/cursor.svg',
    title: 'Cursor',
    description: 'VS Code fork with LLM chat, code compositions, and agent workflows.',
  },
  {
    iconPath: '/icons/codeium.svg',
    title: 'Windsurf (Codeium)',
    description: 'In-IDE AI previews and multi-context pipelines via MCP servers.',
  },
  {
    iconPath: '/icons/augment.svg',
    title: 'Augment',
    description: 'VS Code extension for AI-powered code completions and repo Q&A.',
  },
  {
    iconPath: '/icons/continue.svg',
    title: 'Continue.dev',
    description: 'Chat + agent modes in-code with integrated external tool pipelines.',
  },
  {
    iconPath: '/icons/claude.svg',
    title: 'Claude Code',
    description: 'Terminal AI assistant that persists codebase memory for sessions.',
  },
  {
    iconPath: '/icons/sourcegraph.svg',
    title: 'Sourcegraph / Cody',
    description: 'Cross-repo AI code search, refactoring, and chat integration.',
  },
];

// Animation variants for fade+slide
const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ToolsResources: React.FC = () => (
  <section id="tools-resources" className="py-20 bg-gray-50" aria-labelledby="tools-heading">
    <div className="container mx-auto px-6">
      {/* Accessible heading */}
      <h2 id="tools-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Tools & Resources for Wipe Coding
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {resources.map((r, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg focus:shadow-lg transition-shadow cursor-pointer focus:outline-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileFocus={{ scale: 1.03 }}
            tabIndex={0}
            role="button"
          >
            {/* Icon */}
            <div className="w-12 h-12 mb-4 mx-auto">
              <img src={r.iconPath} alt="" aria-hidden="true" className="w-full h-full" />
            </div>
            {/* Resource title & description */}
            <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">
              {r.title}
            </h3>
            <p className="text-gray-600 text-center">
              {r.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsResources;