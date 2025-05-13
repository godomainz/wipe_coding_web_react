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

const StepByStepGuide: React.FC = ()=>{
        return <div>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">Step-by-Step Guide</motion.h2>
            <ul className="list-disc list-inside space-y-4">
                <motion.li variants={itemVariants}>
                    <strong>Write and Run Tests</strong>
                    <p>
                       Start by writing tests for your code before and after integrating AI-generated suggestions. Writing tests ensures you truly understand what the code should do and that it meets the requirements.
                       Create unit tests for each function or module (for example, using a framework like Jest for JavaScript). If you're building a web app, add integration or E2E tests using tools like Playwright or Cypress to simulate user interactions. 
                       Run your test suite locally (<code className="bg-gray-100">npm run test</code> or the equivalent) and make sure all tests pass. A thorough test suite will catch regressions early and serves as a safety net for future changes.
                    </p>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <strong>Set Up CI Pipelines</strong>
                    <p>
                        Automate your testing and build process with Continuous Integration. Configure a CI/CD pipeline (for example, using GitHub Actions or CircleCI) to run on every push or pull request. 
                        The pipeline should install dependencies, lint the code, run your test suite, and even build the project if applicable. Automating these checks means you never forget to run tests, and you get quick feedback if something fails. For instance, a GitHub Actions workflow can be set up to execute your tests in the cloud every time you push new code.
                        This way, your <strong>test deploy</strong> pipeline flags any issues early, and only code that passes all checks can be merged and deployed.
                    </p>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <strong>Perform Code Reviews & Automated Linting</strong>
                    <p>
                        Even with AI-written code, human code review is vital. Before launching, have team members review the changes. A <strong>code review</strong> helps catch logical errors, unclear logic, or inconsistencies that automated tests might not cover.
                        Reviewers can spot areas to refactor for readability or maintainability. In addition, use automated <strong>linting</strong> and static analysis tools (like ESLint for JavaScript/TypeScript or Flake8 for Python) as part of your CI process. Linters enforce coding standards and can catch common bugs (such as unused variables or problematic code patterns) automatically.
                        Ensure that all lint checks pass and that the code adheres to your project's style guide. 
                        By combining automated linting with thorough peer review, you greatly improve code quality and reduce technical debt before deployment.
                    </p>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <strong>Deployment Strategies</strong>
                    <p>
                        Plan a safe path to release your code. In professional environments, you rarely deploy straight to production on the first go. Set up a staging environment that mirrors production where you can do a final run of your app with production-like data.
                        If everything looks good on staging, proceed with a controlled rollout. <strong>Canary deployment</strong> is a great strategy: release the new version to a small percentage of users or servers first, while the majority still run the old version. 
                        Monitor the canary closely for errors or performance issues before rolling out to everyone. Another strategy is <strong>blue-green deployment</strong>, where you deploy the new version alongside the old one and switch traffic gradually.
                        Throughout this process, use <strong>feature flags</strong> (conditional toggles in code) for any new features so you can turn them on or off independently of deploys. Feature flags let you decouple releasing code from exposing features to users, providing a safety net if a new feature misbehaves in production. The goal is to make deployments incremental and reversible.
                    </p>
                </motion.li>
                <motion.li variants={itemVariants}>
                    <strong>Monitoring & Rollback Plans</strong>
                    <p>
                        <strong>Launching</strong> doesn't end at the moment of deployment – you need to actively monitor the live system. Set up monitoring and observability tools to watch your application’s performance and errors in real time.
                        For example, integrate an error tracking service (like Sentry) and have dashboards for metrics (using platforms like Datadog or Grafana). This way, if the new release causes exceptions or degrades performance, you'll know quickly.
                        Define clear <strong>rollback plans</strong> ahead of time: decide what constitutes a "stop everything" situation and how to revert to the last good state. Rollback might mean turning off a feature flag, or in worst cases, redeploying the previous stable version of the code.
                        Automate rollback if possible – for instance, your deployment tool can automatically switch back if health checks fail. By monitoring proactively and being ready to roll back, you can launch with confidence and address any issues before they affect all your users.
                    </p>
                </motion.li>
            </ul>
        </div>
};

const ExamplesTemplates: React.FC = ()=>{
        return <div className='py-4'>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-4">Examples & Templates</motion.h2>
                <motion.div variants={itemVariants}>
                    <strong>Sample CI/CD Pipeline (GitHub Actions YAML)</strong>
                    <p>
                      Below is a simplified example of a GitHub Actions workflow file (<code className='bg-gray-100'>ci.yml</code>) that installs dependencies and runs tests automatically on every push to the main branch.
                      You can adapt it to fit your project and add steps like linting or deploying as needed.
                    </p>
                </motion.div>
                <motion.div
                        variants={itemVariants}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 p-6 rounded-lg shadow-lg"
                    >
                        <h4 className="text-xl font-semibold mb-3">yaml</h4>
                        <pre className="bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap">
                            <code>
                                {`
                                name: CI
                                on:
                                push:
                                    branches: [ "main" ]
                                jobs:
                                build-and-test:
                                    runs-on: ubuntu-latest
                                    steps:
                                    - uses: actions/checkout@v3
                                    - uses: actions/setup-node@v3
                                        with:
                                        node-version: 18
                                    - run: npm install
                                    - run: npm test
                                `}
                            </code>
                        </pre>
                    </motion.div>
                    <ul className="list-disc list-inside space-y-4 py-4">
                        <motion.li variants={itemVariants}>
                            <strong>Code Review Checklist</strong>
                            <p>
                                Use a checklist to make sure nothing is overlooked during reviews. Here’s an example code review checklist before the final <strong>review and launch</strong>.
                            </p>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <strong>Functionality</strong>
                            <p>
                                Does the code do what it's supposed to do for all expected inputs? Are edge cases and error conditions handled gracefully?
                            </p>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <strong>Code Quality</strong>
                            <p>
                                Is the code readable and maintainable? (Clear naming, modular structure, comments where necessary.) Does it follow our style guidelines and best practices?
                            </p>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <strong>Testing</strong>
                            <p>
                                Are there appropriate tests for new or changed code? Do all existing tests still pass? (Ensure the test suite covers the new functionality and corner cases.)
                            </p>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <strong>Security & Stability</strong>
                            <p>
                                Are there any obvious security risks (e.g. injection, insecure data handling) introduced? Did we remove any sensitive info (keys, passwords) from code/config? Any performance or memory red flags?
                            </p>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <strong>Documentation</strong>
                            <p>
                                Is user-facing documentation (like README or docs) updated if needed? Are important comments or TODOs addressed or captured for future work?
                            </p>
                        </motion.li>
                    </ul>
                    <motion.p>
                        This checklist helps reviewers systematically verify that the code is ready for deployment. It's a good idea to automate parts of this (for example, use tools to check test coverage or security scanners), but a human eye should verify the overall readiness.
                    </motion.p>
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
                    <StepByStepGuide />
                    <ExamplesTemplates />
            </div>
        </motion.main>
        <Footer />
  </>
}

export default TestDeploy;
