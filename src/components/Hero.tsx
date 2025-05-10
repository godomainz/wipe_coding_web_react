import React from 'react';

const Hero: React.FC = () => (
  <section
    id="home"
    className="relative h-screen bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <div className="relative z-10 text-center px-6">
      <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4">
        Turn Ideas into Working Code
      </h1>
      <p className="text-white text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
        Dive into <strong>Wipe Coding</strong>—interactive tutorials, templates, and one-click deployment.
      </p>
      <a
        href="#about"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition"
      >
        Get Started
      </a>
    </div>
    <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
        <path d="M0,0 V40 C300,120 900,0 1200,60 V0 H0" fill="#ffffff" />
      </svg>
    </div>
  </section>
);

export default Hero;