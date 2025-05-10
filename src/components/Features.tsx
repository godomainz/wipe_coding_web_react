import React from 'react';

interface Feature {
  title: string;
  description: string;
  iconPath: string;
}

const features: Feature[] = [
  { title: 'Idea', description: 'Define your app concept.', iconPath: '/icons/idea.svg' },
  { title: 'Prompt', description: 'Describe requirements.', iconPath: '/icons/prompt.svg' },
  { title: 'AI Suggestion', description: 'Get code from AI.', iconPath: '/icons/suggestion.svg' },
  { title: 'Test & Deploy', description: 'Review and launch.', iconPath: '/icons/launch.svg' },
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

export default Features;
