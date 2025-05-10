import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/About';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

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
