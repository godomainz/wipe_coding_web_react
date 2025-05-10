import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-200 py-8">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 className="font-bold text-gray-800 mb-2">WipeCoding</h4>
        <p className="text-gray-600">Empowering your coding journey.</p>
      </div>
      <div>
        <h4 className="font-bold text-gray-800 mb-2">Links</h4>
        <ul className="space-y-1 text-gray-600">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#features" className="hover:underline">Features</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-800 mb-2">Connect</h4>
        <div className="flex space-x-4">
          <a href="https://github.com/wipecoding" className="text-gray-600 hover:text-gray-800">GitHub</a>
          <a href="https://twitter.com/wipecoding" className="text-gray-600 hover:text-gray-800">Twitter</a>
        </div>
      </div>
    </div>
    <div className="text-center text-gray-500 text-sm mt-6">
      &copy; {new Date().getFullYear()} WipeCoding. All rights reserved.
    </div>
  </footer>
);

export default Footer;
