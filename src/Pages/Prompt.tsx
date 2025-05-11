import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren'
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const codePrinciples = [
    {
        id: "clarity",
        title: "Clarity & Scope",
        content: `Define what and why. Use simple, user-focused language to describe the feature. For example, a user-story format – “As a [user], I want [action] so that [benefit]” – forces you to specify who needs what and why. Specify the feature scope explicitly (inputs, UI layout, data sources, constraints, etc.) so there’s no ambiguity. In prompt engineering, experts emphasize that AI output quality “depends heavily on how well you structure your prompt”. A vague prompt leads to generic code, while a detailed prompt yields precise results`
    },
    {
        id: "stakeholder",
        title: "Stakeholder Alignment",
        content: `Capture user stories, roles, and edge cases. Frame requirements from the perspective of stakeholders or user personas. By using clear user stories, the team aligns on needs and priorities. Also list any known edge cases or exceptions (e.g. “what if the user is offline?”) to avoid surprises later. This ensures developers and product owners share a common understanding of the requirements and prevent missed scenarios. In short, writing out user stories and scenarios fosters collaboration and catches assumptions early.`
    },
    {
        id: "measurable",
        title: "Measurable Outcomes",
        content: `Include KPIs and acceptance criteria. Every requirement prompt should explain how success is measured. Add specific metrics or pass/fail conditions to make the outcome testable. For example, “the API must handle 1000 requests/minute with <1% error” or “feature X increases conversion by 5%”. Clearly state acceptance criteria (the conditions of “done”) in the prompt – this sets a clear definition of success and prevents scope creep. For example, acceptance criteria might be listed as bullet points or as a Gherkin Given/When/Then scenario. Defining quantitative KPIs and acceptance tests up front ties the work to business goals and makes the prompt’s intent unambiguous.`
    }
];

const Prompt: React.FC = () => (
  <>
    <Helmet>
      <title>Describe Requirements in Wipe & Vibe Coding</title>
      <meta name="description" content="Write precise prompts in Wipe & Vibe Coding to speed delivery and reduce rework." />
    </Helmet>
    <Navbar />
    <motion.main
        className="pt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
            <motion.section
            id="describe-requirements"
            className="prose mx-auto py-20 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariant}
            transition={{ duration: 0.6 }}
            >
                <motion.div
                    variants={itemVariants}
                    className="max-w-4xl mx-auto px-4 py-12 prose lg:prose-xl"
                    >
                    <h2 id="diescribe-req" className="text-3xl font-bold mb-4">
                        Describe Requirements in Wipe & Vibe Coding
                    </h2>
                    <p>
                        In Wipe Coding and Vibe Coding methodologies, writing precise prompts – the “describe requirements” step – is critical to align teams on the problem and avoid wasted effort. By clearly defining what needs to be built and why, teams reduce miscommunication and speed delivery. In practice, this means drafting a structured prompt (think user story or Gherkin scenario) before the AI generates code. Without proper instructions, AI models can produce off-target results, and studies show requirements errors cause 70–85% of development rework
. A solid requirements prompt is like a modern PRD (Product Requirements Document): it serves as a blueprint for both humans and AI, driving stakeholder alignment and cutting rework
                    </p>
                </motion.div>
                    <div className="max-w-4xl mx-auto px-4 py-12 prose lg:prose-xl">
                        {codePrinciples.map((codePrinciple, id)=>(
                            <motion.div
                            key={codePrinciple.id}
                            variants={itemVariants}
                            className="mb-16">
                                <h2 id={codePrinciple.id} className="text-3xl font-bold mb-4">
                                    {codePrinciple.title}
                                </h2>
                                <p>
                                    {codePrinciple.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>

            </motion.section>
      </motion.main>
      <Footer />
    
  </>
);

export default Prompt;