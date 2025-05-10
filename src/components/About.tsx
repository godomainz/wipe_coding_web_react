import React from 'react';

const About: React.FC = () => (
  <section id="about" className="bg-white py-20">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
      <div className="md:w-1/2 text-gray-800">
        <h2 className="text-4xl font-bold mb-4">Welcome to Wipe Coding</h2>
        <p className="mb-6">
          <strong>Wipe Coding</strong> democratizes software development by combining visual templates, code snippets, and interactive editors.
        </p>
        <a href="#features" className="inline-block text-blue-600 hover:underline font-semibold">
          Learn How It Works →
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src="/about-illustration.png"
          alt="About Wipe Coding"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default About;