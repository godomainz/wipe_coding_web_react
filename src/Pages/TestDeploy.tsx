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
                    <strong>Quality Assurance (QA)</strong>
                    <p>
                       Embrace a testing mindset. This means writing <strong>unit tests</strong> for individual functions, <strong>integration tests</strong> for combined components, and <strong>end-to-end (E2E) tests</strong> for user flows.
                       Comprehensive QA ensures your app actually works as intended in all scenarios and catches issues early.
                    </p>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <strong>Continuous Integration (CI)</strong>
                    <p>
                        Set up automated builds and checks whenever code changes. With CI, every code commit triggers actions (like running tests and linters) to verify that new changes don't break anything. 
                        This constant feedback loop prevents integration problems and makes the <strong>test & deploy</strong> cycle smoother.
                    </p>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <strong>Safe Deployment</strong>
                    <p>
                        Deploy new code cautiously to minimize risk. Techniques like <strong>feature flags</strong> (to turn features on/off without redeploying) and <strong>canary releases</strong> (gradually rolling out updates to a subset of users) let you control exposure.
                        These strategies provide quick rollback options if something goes wrong, ensuring you can recover quickly from any issue.
                    </p>
                </motion.li>
            </ul>
            <motion.div variants={itemVariants} className="py-4">
                        <p>
                            By adhering to these core principles, developers in the Wipe & Vibe coding era can build confidence that their AI-generated code is production-ready. Next, we'll walk through a step-by-step guide to testing, reviewing, and deploying your project with best practices at each stage.
                        </p>
            </motion.div>
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
