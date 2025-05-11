import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    id: 'intro',
    title: 'Why Defining Your App Concept Matters',
    content: `Defining a clear app concept is the first critical step in successful development. Before writing any code, you should pinpoint your app’s purpose: What problem does it solve? and who is it for? This clarity saves time, money, and rework later. Emerging AI techniques like Vibe Coding and Wipe Coding can fast-track this process by generating prototypes quickly and refining them securely.`
  },
  {
    id: 'wipe-vibe',
    title: 'Why “Wipe Coding” & “Vibe Coding” Matter',
    content: `Wipe Coding uses AI to clean up or simplify code—essentially “erasing” unnecessary parts to maintain security and clarity. Vibe Coding lets you describe app features in plain language and have an AI generate working code for prototypes. Together, they help you iterate and refine faster, keeping focus on core features while removing boilerplate.`
  },
  {
    id: 'step-guide',
    title: 'Step-by-Step Guide',
    content: `1. Brainstorming & Mind Mapping: Generate and organize ideas.
2. Problem & Persona Validation: Talk to users and validate pain points.
3. Lean Canvas & MVP Planning: Outline your business model and minimal feature set.
4. Competitive Analysis: Research existing apps to find differentiation.
5. Prototype & Iterate: Use AI tools for quick builds and clean up with static analyzers.`
  },
  {
    id: 'examples',
    title: 'Real-World Examples',
    content: `- ChatGPT-Guided Startup: Non-programmers launched apps by prompting ChatGPT end-to-end.
- Karpathy’s MenuGen: Built an entire menu visualizer with AI agents.
- GitHub Copilot in Action: Produced a React photo gallery in under 30 minutes per iteration.`
  },
  {
    id: 'tools',
    title: 'Tools & Resources',
    content: `Explore AI-assisted coding tools like ChatGPT, GitHub Copilot, AWS CodeWhisperer, and static analysis tools like SonarQube. For templates and community links, visit our `,
    link: { to: '/tools-resources', label: 'Tools & Resources' }
  },
];

// Parent container variants for staggered entrance on mount
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren'
    }
  }
};

// Individual item animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function DefineConceptSection() {
  return (
    <>
      <Helmet>
        <title>WipeCoding - Turn Ideas into Code</title>
        <meta name="description" content="Learn Wipe Coding: step-by-step tutorials, visual templates, and one-click deployment." />
        <meta name="keywords" content="Wipe Coding, learn Wipe Coding, Wipe Coding tutorials, coding education, Vibe Coding" />
      </Helmet>

      <Navbar />

      <motion.main
        className="pt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 py-12 prose lg:prose-xl">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="mb-16"
            >
              <h2 id={section.id} className="text-3xl font-bold mb-4">
                {section.title}
              </h2>
              <p>
                {section.content}
                {section.link && (
                  <Link to={section.link.to} className="text-blue-600 hover:underline">
                    {section.link.label}
                  </Link>
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.main>

      <Footer />
    </>
  );
}
