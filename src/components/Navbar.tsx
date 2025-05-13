import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <header className="fixed w-full z-50 bg-white bg-opacity-80 backdrop-blur-md">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <a href="/" className="text-2xl font-bold text-gray-800">WipeCoding</a>
      <nav className="hidden md:flex space-x-8">
        <Link to="/idea" className="text-gray-800 hover:text-blue-600">Idea</Link>
        <Link to="/prompt" className="text-gray-800 hover:text-blue-600">Prompt</Link>
        <Link to="/ai-suggestion" className="text-gray-800 hover:text-blue-600">AI Suggestion</Link>
        <Link to="/test-deploy" className="text-gray-800 hover:text-blue-600">Test & Deploy</Link>
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
