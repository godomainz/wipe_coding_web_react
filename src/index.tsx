import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import DefineConceptSection from './pages/DefineConceptSection';
import Prompt from './pages/Prompt';
import AISuggestion from './pages/AISuggestion';
import TestDeploy from './pages/TestDeploy';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Home screen */}
        <Route path="/" element={<HomePage />} />

        {/* Define App Concept screen */}
        <Route
          path="/idea"
          element={<DefineConceptSection />}
        />
        <Route
          path="/prompt"
          element={<Prompt />}
        />
        <Route
          path="/ai-suggestion"
          element={<AISuggestion />}
        />
        <Route
          path="/test-deploy"
          element={<TestDeploy />}
        />
        {/* Fallback 404 (optional) */}
        <Route
          path="*"
          element={
            <div className="p-8 text-center">
              <h1 className="text-2xl font-bold">Page Not Found</h1>
              <a href="/" className="text-blue-600 hover:underline">
                Go back home
              </a>
            </div>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
