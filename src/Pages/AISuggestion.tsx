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


const AISuggestion: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return <>
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
            <div className="max-w-4xl mx-auto px-4 py-12 prose lg:prose-xl">
                <motion.div>
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl font-bold mb-4">Why "AI Suggestion" is a Game-Changer in Wipe/Vibe Coding</h2>
                        <p>
                            In Wipe Coding or Vibe Coding, letting AI generate code transforms the workflow. AI Suggestion means using an AI model to write code for you. Instead of hand-writing every line, you can get code from AI by giving a clear prompt. This frees developers to focus on architecture and logic. For example, asking an AI to handle sorting or data parsing can save hours of boilerplate work. By using AI Suggestion, teams iterate faster and deliver features more quickly. These methods drastically cut down on manual coding effort and errors. For context, a 2024 developer survey found about 72% of respondents are positive about AI tools in their workflow.
                        In fact, 81% of developers say boosting productivity is the biggest benefit of AI tools.
                        </p> 
                        <p>
                            AI suggestion has become a best practice for many teams. Wipe coding refers to letting the AI “wipe in” complete solutions from your instructions, while vibe coding means interacting with AI suggestions to refine your code as you work. For instance, a wipe-coding prompt might have the AI generate an entire data-fetching module, whereas vibe coding could give real-time function suggestions as you type. The result is a smart coding partner that handles routine tasks. Of course, this power comes with responsibility: developers must still validate and secure the AI’s output before using it in production.
                        </p>
                    </motion.div>
                    <motion.div>
                        <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">Core Principles</motion.h2>
                        <motion.ul className="list-disc list-inside space-y-4">
                            <motion.li variants={itemVariants}>
                                <strong>Prompt Engineering Basics</strong>
                                <p>
                                    Give the AI a clear, specific task. Include the programming language, function name, and requirements. For example, specify "Write a Python function named calculate_area that returns the area of a circle given its radius." This context avoids ambiguity. Use examples or constraints (like I/O format or edge cases) to improve clarity. OpenAI advises using the latest model and very detailed instructions to get better outputs.
                                    You can also include sample input/output pairs for multi-step tasks.
                                </p>
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <strong>Security & Quality</strong>
                                <p>
                                    Always validate AI-generated code. Run linters (ESLint, Pylint) and unit tests to catch errors. Check for common vulnerabilities (SQL injection, buffer overflow, etc.) and sanitize inputs. Follow secure coding guidelines – OWASP notes that manual code review is still essential for safe software.
                                    Use static analysis tools (SonarQube, Semgrep) to scan for risks. Remember reproducibility: AI outputs can vary, so save or pin your prompt and model version.
                                </p>
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <strong>Iteration & Feedback</strong>
                                <p>
                                    Treat AI output as an initial draft. Rarely is the first suggestion perfect. If a response is incomplete or buggy, refine your prompt and try again. You can include the AI’s own output or error messages in the next prompt to guide corrections.
                                    For example, if the code misses a case, say so in the prompt. Each round of refinement hones the result. Keep track of improvements so you can merge changes seamlessly.
                                </p>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </div>
        </motion.main>
        <Footer />
  </>
}

export default AISuggestion;
