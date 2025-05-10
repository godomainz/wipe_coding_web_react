import React from 'react';

const Hero: React.FC = () => (
  <section
    id="home"
    className="relative h-screen bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: "url('/hero_bg.png')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-20" />
    <div className="relative z-10 text-center px-6">
      <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4">
        Turn Ideas into Working Code
      </h1>
    </div>
    <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
        <path d="M0,0 V40 C300,120 900,0 1200,60 V0 H0" fill="#ffffff" />
      </svg>
    </div>
  </section>
);

export default Hero;