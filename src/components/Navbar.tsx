import React from 'react';

const Navbar: React.FC = () => (
  <header className="fixed w-full z-50 bg-white bg-opacity-80 backdrop-blur-md">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <a href="/" className="text-2xl font-bold text-gray-800">WipeCoding</a>
      <nav className="hidden md:flex space-x-8">
        <a href="/idea" className="text-gray-800 hover:text-blue-600">Idea</a>
        <a href="/prompt" className="text-gray-800 hover:text-blue-600">Prompt</a>
        <a href="/ai-suggestion" className="text-gray-800 hover:text-blue-600">AI Suggestion</a>
        <a href="/test-deploy" className="text-gray-800 hover:text-blue-600">Test & Deploy</a>
      </nav>
      <button className="md:hidden text-gray-800 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
);

export default Navbar;
