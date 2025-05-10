import React from 'react';
import { Helmet } from 'react-helmet';

// Navbar with centered logo and nav items left/right
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

// Hero section with wave bottom
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
        Dive into <strong>Wipe Coding</strong>—interactive tutorials, templates, and one-click deployment to bring your projects to life.
      </p>
      <a
        href="#about"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition"
      >
        Get Started
      </a>
    </div>
    {/* Wave SVG at bottom */}
    <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
        <path d="M0,0 V40 C300,120 900,0 1200,60 V0 H0" fill="#ffffff" />
      </svg>
    </div>
  </section>
);

// About section with two-column layout
const About: React.FC = () => (
  <section id="about" className="bg-white py-20">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
      <div className="md:w-1/2 text-gray-800">
        <h2 className="text-4xl font-bold mb-4">Welcome to Wipe Coding</h2>
        <p className="mb-6">
          <strong>Wipe Coding</strong> democratizes software development by combining visual templates, code snippets, and interactive editors. Whether you’re a complete novice or seasoned developer, you’ll <em>learn Wipe Coding</em> through guided tutorials and hands-on projects.
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

// Core features section mimicking icon style
interface Feature { title: string; description: string; iconPath: string; }
const features: Feature[] = [
  { title: 'Idea Capture', description: 'Describe your project goals in natural language.', iconPath: '/icons/idea.svg' },
  { title: 'Visual Templates', description: 'Pick and customize pre-built layouts visually.', iconPath: '/icons/template.svg' },
  { title: 'One-Click Deploy', description: 'Deploy instantly to Vercel, Netlify, or your servers.', iconPath: '/icons/deploy.svg' },
];

const Features: React.FC = () => (
  <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Core Features
      </h2>
      <div className="flex flex-col md:flex-row md:-mx-4">
        {features.map((f, idx) => (
          <div key={idx} className="md:w-1/3 md:px-4 mb-8 md:mb-0 text-center">
            <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
              <img src={f.iconPath} alt={f.title} className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Footer with simple layout
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

// Main HomePage Component
const HomePage: React.FC = () => (
  <>
    <Helmet>
      <title>WipeCoding - Turn Ideas into Code</title>
      <meta name="description" content="Learn Wipe Coding: step-by-step tutorials, visual templates, and one-click deployment." />
      <meta name="keywords" content="Wipe Coding, learn Wipe Coding, Wipe Coding tutorials, coding education, Vibe Coding" />
    </Helmet>
    <Navbar />
    <main className="pt-20">
      <Hero />
      <About />
      <Features />
    </main>
    <Footer />
  </>
);

export default HomePage;
