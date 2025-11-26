import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900 flex flex-col">
      <header className="bg-green-700 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Ecoverse</h1>
        <p className="text-lg">Environmental Conservation & Sustainable Solutions</p>
      </header>

      <main className="flex-grow p-6 space-y-10">
        <section className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-3">Prakash Tiwari</h2>
          <p className="text-green-700 font-semibold">Founder & CEO, Ecoverse</p>
          <p className="mt-4">
            Dedicated to driving environmental conservation, sustainability innovation, and
            nature-based solutions for a resilient future.
          </p>
          <a
            href="https://www.linkedin.com/in/prakash-tiwari-2a2386196/"
            target="_blank"
            className="inline-block mt-4 text-green-700 underline"
          >
            Visit my LinkedIn
          </a>
        </section>

        <section className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-3">Our Mission</h2>
          <p>
            At <strong>Ecoverse</strong>, our mission is to protect ecosystems, restore forests, and
            promote sustainable development through science-driven strategies and community-led impact.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-3">Key Initiatives</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Forest restoration and rewilding</li>
            <li>Sustainable land-use and conservation planning</li>
            <li>Climate impact analysis and carbon project consulting</li>
            <li>Community-based climate resilience programs</li>
          </ul>
        </section>
      </main>

      <footer className="bg-green-700 text-white text-center p-4 mt-6">
        © 2025 Ecoverse. All rights reserved.
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
