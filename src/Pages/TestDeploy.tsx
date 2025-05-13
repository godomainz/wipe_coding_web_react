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

const StepByStepGuide: React.FC = ()=>{
        return <div>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">Step-by-Step Guide</motion.h2>
            <ol className="list-disc list-inside space-y-4">
                <motion.li variants={itemVariants}>
                    <strong>Defining Your Prompt: </strong>Start with a structured template. For example:
                    <motion.div
                        variants={itemVariants}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 p-6 rounded-lg shadow-lg"
                    >
                        <h4 className="text-xl font-semibold mb-3">psql</h4>
                        <pre className="bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap">
                        <code>Write a Python function named format_date that converts 'YYYY-MM-DD' to 'Month Day, Year' (e.g. '2025-12-31' ➔ 'December 31, 2025').</code>
                        </pre>
                    </motion.div>
                    This prompt spells out the language, function name, and behavior. You might also list expected inputs and outputs. Providing such detail ensures the AI knows exactly what code to produce.
                    For complex tasks, break them into subtasks or give multiple examples (few-shot prompting).
                </motion.li>
                <motion.li variants={itemVariants}>
                    <strong>Sending & Receiving Code</strong>
                    <p>
                        Use an AI coding tool or API to submit your prompt. For example, you might use the OpenAI API or a chat interface, or an AI assistant like Replit or GitHub Copilot. When you send the prompt, the AI responds with code. Ensure your API keys or tools are configured securely. Capture the AI’s output for analysis. If using an interface like OpenAI Playground, you can experiment with different prompts interactively.
                    </p>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <strong>Reviewing & Testing Output</strong>
                    <p>
                        Carefully inspect the AI’s code. Run automatic formatters (Prettier, Black) and linters for style. Execute unit tests to verify correctness, including edge cases. Validate performance with example data. For security, run static analysis tools (e.g. SonarQube) to find vulnerabilities. Surveys show many developers worry about AI code security, so thorough review is critical.
                    </p>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <strong>Integrating into Project</strong>
                    <p>
                        Once the code passes review, integrate it into your codebase. Organize it into modules or classes to fit your architecture. Remove any test stubs or debug code. Update documentation or inline comments as needed. Use version control to commit the new code so peers can review it. This structured approach (rather than ad-hoc copy/paste) keeps your project maintainable and secure.
                    </p>
                </motion.li>
            </ol>
        </div>
};

const ExamplesSnippets: React.FC = ()=>{
        return <div>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">Examples & Snippets</motion.h2>
            <ol className="list-disc list-inside space-y-4">
                <motion.li variants={itemVariants}>
                    <strong>Bad vs Good Prompt and Output</strong>
                    <p>
                        <strong>Bad Prompt: </strong><code className="bg-gray-100">Sort a list of numbers. </code>
                        This vague prompt might yield a quick answer but not robust code.
                        AI response:
                    </p>
                    <motion.div
                        variants={itemVariants}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 p-6 rounded-lg shadow-lg"
                    >
                        <h4 className="text-xl font-semibold mb-3">python</h4>
                        <pre className="bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap">
                            <code>
                                {`
                                def sort_numbers(nums):
                                    nums.sort()
                                    return nums
                                `}
                            </code>
                        </pre>
                    </motion.div>
                   This function works but lacks clarity on return values and documentation.
                   <p>
                    <strong>Good Prompt: </strong><code className="bg-gray-100">"Write a Python function sort_list(nums) that returns a new sorted list of integers from the input 'nums'. Include a docstring explaining the function." </code>
                   </p>
                   <strong>Better Output: </strong>
                    <motion.div
                        variants={itemVariants}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 p-6 rounded-lg shadow-lg"
                    >
                        <h4 className="text-xl font-semibold mb-3">python</h4>
                        <pre className="bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap">
                            <code>
                                {`
                                def sort_list(nums):
                                    """
                                    Returns a new list containing the elements of nums in sorted order.
                                    """
                                    return sorted(nums)
                                `}
                            </code>
                        </pre>
                    </motion.div>
                    The improved prompt produced clear, well-documented code.
                </motion.li>
                <motion.li variants={itemVariants}>
                    <strong>Sample AI Conversation</strong>
                    <motion.div
                        variants={itemVariants}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 p-6 rounded-lg shadow-lg"
                    >
                        <h4 className="text-xl font-semibold mb-3">matlab</h4>
                        <pre className="bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap">
                            <code>
                                {`
                                User: "Write a JavaScript function to check if a number is even."
                                AI: 
                                function isEven(num) {
                                    return num % 2 === 0;
                                }
                                `}
                            </code>
                        </pre>
                    </motion.div>
                    This example shows a simple user query and a concise AI response.
                </motion.li>
            </ol>
        </div>
};

const TestDeploy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return <>
        <Helmet>
          <title>AI Suggestion: Get Code from AI</title>
          <meta name="description" content="Accelerate Wipe & Vibe Coding with AI Suggestion: craft clear prompts, review outputs, and integrate AI-generated code securely" />
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
                        <h2 className="text-3xl font-bold mb-4">Why "AI Suggestion" is a Game-Changer in Wipe/Vibe Coding</h2>
                        <p>
                            In Wipe Coding or Vibe Coding, letting AI generate code transforms the workflow. AI Suggestion means using an AI model to write code for you. Instead of hand-writing every line, you can get code from AI by giving a clear prompt. This frees developers to focus on architecture and logic. For example, asking an AI to handle sorting or data parsing can save hours of boilerplate work. By using AI Suggestion, teams iterate faster and deliver features more quickly. These methods drastically cut down on manual coding effort and errors. For context, a 2024 developer survey found about 72% of respondents are positive about AI tools in their workflow.
                        In fact, 81% of developers say boosting productivity is the biggest benefit of AI tools.
                        </p> 
                        <p>
                            AI suggestion has become a best practice for many teams. Wipe coding refers to letting the AI “wipe in” complete solutions from your instructions, while vibe coding means interacting with AI suggestions to refine your code as you work. For instance, a wipe-coding prompt might have the AI generate an entire data-fetching module, whereas vibe coding could give real-time function suggestions as you type. The result is a smart coding partner that handles routine tasks. Of course, this power comes with responsibility: developers must still validate and secure the AI’s output before using it in production.
                        </p>
                    </motion.div>
                    <CorePrincipals/>
                    <StepByStepGuide/>
                    <ExamplesSnippets/>
            </div>
        </motion.main>
        <Footer />
  </>
}

export default TestDeploy;
