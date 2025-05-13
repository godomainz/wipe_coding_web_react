import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-200 py-8">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h4 className="font-bold text-gray-800 mb-2">WipeCoding</h4>
        <p className="text-gray-600">Empowering your coding journey.</p>
      </div>
    </div>
    <div className="text-center text-gray-500 text-sm mt-6">
      &copy; {new Date().getFullYear()} WipeCoding. Public Domain.
    </div>
  </footer>
);

export default Footer;
