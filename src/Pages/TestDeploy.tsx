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

const Introduction: React.FC = ()=>{
        return <div>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">Introduction</motion.h2>
            <motion.div variants={itemVariants}>
                    <p>
                        <strong>Wipe Coding</strong> (also known as <strong>Vibe Coding</strong>) is an AI-assisted development approach that lets you build software by guiding an AI with ideas and prompts, instead of writing every line of code yourself. 
                        It can significantly speed up development by allowing you to communicate with the machine in natural language. However, no matter how the code is generated, the final Test & Deploy stage – where you <strong>review and launch</strong> your product – is absolutely critical. 
                        After moving from the <strong>Idea</strong> and <strong>Prompt</strong> stages to getting an <strong>AI Suggestion</strong> for your code, you must rigorously test that code, review it for quality, and deploy it safely. 
                        Skipping or rushing the <strong>test deploy</strong> phase can lead to bugs in production, poor user experience, or security vulnerabilities.
                    </p>
            </motion.div>
        </div>
};

const CorePrincipals: React.FC = ()=>{
        return <div>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">Core Principles</motion.h2>
            <ul className="list-disc list-inside space-y-4">
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
            </ul>
        </div>
};


const TestDeploy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return <>
        <Helmet>
          <title>Test & Deploy: Review and Launch in Wipe & Vibe Coding</title>
          <meta name="description" content="Test & Deploy: Review and Launch in Wipe & Vibe Coding" />
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
                        <h1 className="text-3xl font-bold mb-4">Test & Deploy: Review and Launch in Wipe & Vibe Coding</h1>
                    </motion.div>
                    <Introduction />
                    <CorePrincipals/>
            </div>
        </motion.main>
        <Footer />
  </>
}

export default TestDeploy;
