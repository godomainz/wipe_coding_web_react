import React from 'react';

const Navbar: React.FC = () => (
  <header className="fixed w-full z-50 bg-transparent">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <nav className="hidden md:flex space-x-8">
        <a href="#home" className="text-white hover:text-blue-300">Home</a>
        <a href="#about" className="text-white hover:text-blue-300">About</a>
      </nav>
      <a href="/" className="text-2xl font-bold text-white">WipeCoding</a>
      <nav className="hidden md:flex space-x-8">
        <a href="#features" className="text-white hover:text-blue-300">Features</a>
        <a href="#tutorials" className="text-white hover:text-blue-300">Tutorials</a>
      </nav>
      <button className="md:hidden text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
);

export default Navbar;