import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, when: 'beforeChildren' }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Core principles data
const codePrinciples = [
  {
    id: 'clarity',
    title: 'Clarity & Scope',
    content: `Define what and why. Use simple, user-focused language to describe the feature. For example, a user-story format – “As a [user], I want [action] so that [benefit]” – forces you to specify who needs what and why. Specify the feature scope explicitly (inputs, UI layout, data sources, constraints, etc.) so there’s no ambiguity. In prompt engineering, experts emphasize that AI output quality “depends heavily on how well you structure your prompt”. A vague prompt leads to generic code, while a detailed prompt yields precise results.`
  },
  {
    id: 'stakeholder',
    title: 'Stakeholder Alignment',
    content: `Capture user stories, roles, and edge cases. Frame requirements from the perspective of stakeholders or user personas. By using clear user stories, the team aligns on needs and priorities. Also list any known edge cases or exceptions (e.g. “what if the user is offline?”) to avoid surprises later. This ensures developers and product owners share a common understanding of the requirements and prevent missed scenarios.`
  },
  {
    id: 'measurable',
    title: 'Measurable Outcomes',
    content: `Include KPIs and acceptance criteria. Every requirement prompt should explain how success is measured. Add specific metrics or pass/fail conditions to make the outcome testable. For example, “the API must handle 1000 requests/minute with <1% error” or “feature X increases conversion by 5%”. Clearly state acceptance criteria to set a clear definition of success.`
  }
];

// Step-by-Step Guide data
const stepGuide = [
  {
    id: 'gathering-inputs',
    title: 'Gathering Inputs',
    content: `Collect all relevant context before writing the prompt. Talk to stakeholders (PMs, designers, QA) to understand the feature goals. Review any existing documentation, design mocks, API specs, or legacy code. Gather examples of input/output data, API endpoints, or UI layouts. Identify the user personas and core business logic. Document assumptions and key constraints (e.g. compliance rules, performance targets). The more concrete information you have (user stories, diagrams, data samples), the clearer the requirements prompt will be.`
  },
  {
    id: 'structuring-prompt',
    title: 'Structuring the Prompt',
    content: `Write the prompt in a logical, readable format. A clear structure (with headings or sections) helps the AI parse the requirements. For example, you might start with a brief scenario or role, then list requirements and acceptance criteria. You can mix formats:`
  },
  {
    id: 'validating-refining',
    title: 'Validating & Refining',
    content: `After generating an initial response from the AI, review it against the requirements. Check that each acceptance criterion is met and no edge cases were overlooked. Share the output with stakeholders for quick feedback. If something is missing or incorrect, refine the prompt: clarify ambiguous points, add missing details, or tighten constraints. You may need to iterate (add examples or reformulate questions) to guide the AI toward the desired solution. Continuously refining the prompt is part of Vibe Coding: you vibe with the AI by steering it. Keep notes on what worked or failed (e.g. in a prompt document or version history) so future prompts improve`
  }
];

const promptFormats = [
  {
    id: 'user-story',
    title: 'User Story Format',
    code: `As a [role], I want [feature] so that [benefit].
          Requirements: [details… e.g. UI components, data fields, error handling]
          Acceptance Criteria:
          - [criterion 1: measurable outcome]
          - [criterion 2: performance or edge case]
          `
  },
  {
    id: 'gherkin',
    title: 'Gherkin Scenario',
    code: `Given [initial context],
          When [action is taken],
          Then [expected outcome].
          `
  }
];

const Prompt: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return <>
        <Helmet>
          <title>Describe Requirements in Wipe & Vibe Coding</title>
          <meta name="description" content="Write precise prompts in Wipe & Vibe Coding to speed delivery and reduce rework." />
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
          <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-4">Describe Requirements in Wipe & Vibe Coding</h2>
              <p>
                In <strong>Wipe Coding</strong> and <strong>Vibe Coding</strong> methodologies, writing precise prompts — the <em>“describe requirements”</em> step — is critical to align teams on the problem and avoid wasted effort. By clearly defining <strong>what</strong> needs to be built and <strong>why</strong>, teams reduce miscommunication and speed delivery.
              </p>
            </motion.div>

            {/* Core Principles */}
            {codePrinciples.map((p, idx) => (
              <motion.div key={p.id} variants={itemVariants} className="mt-12">
                <h2 id={p.id} className="text-3xl font-bold mb-4">{p.title}</h2>
                <p>{p.content}</p>
              </motion.div>
            ))}

            {/* Step-by-Step Guide */}
            <motion.div variants={itemVariants} className="mt-12">
              <h2 className="text-3xl font-bold mb-4">Step-by-Step Guide</h2>
            </motion.div>
            {stepGuide.map((step, idx) => (
              <motion.div key={step.id} variants={itemVariants} transition={{ delay: 0.2 * (idx + codePrinciples.length) }} className="mb-8">
                <h3 id={step.id} className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{step.content}</p>
                {step.id === "structuring-prompt"?<>
                    <motion.div
                      className="mt-16 grid md:grid-cols-2 gap-8"
                      variants={containerVariants}
                    >
                          {promptFormats.map((fmt, i) => (
                            <motion.div
                              key={fmt.id}
                              variants={itemVariants}
                              transition={{ delay: 0.2 + (stepGuide.length + i) * 0.2 }}
                              className="bg-gray-50 p-6 rounded-lg shadow-lg"
                            >
                              <h4 className="text-xl font-semibold mb-3">{fmt.title}</h4>
                              <pre className="bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap">
                                <code>{fmt.code}</code>
                              </pre>
                            </motion.div>
                          ))}
                    </motion.div>
                    </>:null
                  }
              </motion.div>
            ))}

            {/* Examples & Templates Section */}
            <motion.div
              className="mt-16 prose mx-auto"
              variants={itemVariants}
              transition={{
                delay:
                  0.2 *
                  (codePrinciples.length + stepGuide.length + promptFormats.length +
                    1),
              }}
            >
              <h2 className="text-3xl font-bold mb-4">Examples & Templates</h2>

              {/* Bad vs Good Prompts */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">
                  “Bad” vs “Good” Prompts
                </h3>
                <ul className="list-disc list-inside space-y-4">
                  <li>
                    <strong>Bad Prompt:</strong>{' '}
                    <code>Build a login page.</code>
                    <br />
                    <em>Why it’s bad:</em> Too vague. No details on user type,
                    fields, security requirements, or design. AI may produce a
                    generic or incomplete login form.
                  </li>
                  <li>
                    <strong>Good Prompt:</strong>
                    <pre className="bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap mt-2">
                      <code>
                        As a registered user, I want a secure login page so that only I can access my account.
                        Requirements:
                        - Email and password fields, with HTML5 validation for email.
                        - “Show password” toggle.
                        - OAuth login option (e.g. Google).
                        Acceptance Criteria:
                        - Form submits to /api/login; invalid attempts return error.
                        - Password must be at least 8 characters, one number.
                        - Speed: page loads in under 1 second.
                      </code>
                    </pre>
                    <p className="mt-2">
                      <em>Why it’s good:</em> Specifies user, purpose, UI
                      elements, validation rules, and criteria. The AI has clear
                      guidance on implementation and testing targets.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Prompt Template Structure */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Prompt Template (structure)
                </h3>
                <pre className="bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap">
                  <code>
                    Feature: [short title]
                    Description: [detailed overview]
                    User Story: As a [user/role], I want [action] so that [goal].
                    Requirements:
                    - [Specific feature or constraint]
                    - [Data sources or inputs]
                    - [Security/performance rules]
                    Acceptance Criteria:
                    - [Measurable outcome or test condition]
                    - [Edge case or non-functional requirement]
                                  </code>
                                </pre>
                                <p className="mt-4">
                                  Having a reusable prompt template (even a downloadable worksheet)
                                  helps your team write <em>describe requirements</em> prompts
                                  consistently.
                                </p>
                              </div>
            </motion.div>
          </div>
        </motion.main>
        <Footer />
  </>
}

export default Prompt;
