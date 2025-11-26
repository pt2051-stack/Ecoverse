// VITE + REACT PROJECT STRUCTURE (ALL FILES IN ONE PLACE)
// Copy each section into its respective file in your repository.
// Your repo should look like this:
//
// Ecoverse/
// ├── index.html
// ├── package.json
// ├── vite.config.js
// ├── tailwind.config.js
// ├── postcss.config.js
// └── src/
//     ├── main.jsx
//     ├── App.jsx
//     └── assets/
//         ├── logo.png
//         └── profile.jpg


///////////////////////////////////////////////
// FILE: index.html
///////////////////////////////////////////////
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ecoverse</title>
  </head>
  <body class="bg-green-50">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


///////////////////////////////////////////////
// FILE: package.json
///////////////////////////////////////////////
{
  "name": "ecoverse",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.0"
  }
}


///////////////////////////////////////////////
// FILE: vite.config.js
///////////////////////////////////////////////
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})


///////////////////////////////////////////////
// FILE: tailwind.config.js
///////////////////////////////////////////////
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};


///////////////////////////////////////////////
// FILE: postcss.config.js
///////////////////////////////////////////////
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};


///////////////////////////////////////////////
// FILE: src/main.jsx
///////////////////////////////////////////////
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


///////////////////////////////////////////////
// FILE: src/index.css (Tailwind import)
///////////////////////////////////////////////
@tailwind base;
@tailwind components;
@tailwind utilities;


///////////////////////////////////////////////
// FILE: src/App.jsx
///////////////////////////////////////////////
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from './assets/logo.png';
import profile from './assets/profile.jpg';

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? 'bg-gray-900 text-gray-100' : 'bg-green-50 text-gray-900'} min-h-screen flex flex-col font-sans`}>
      <nav className={`w-full p-4 shadow-md flex justify-between items-center sticky top-0 z-50 ${dark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-2xl font-bold text-green-700">Ecoverse</h1>
        </div>

        <div className="space-x-6 font-medium hidden md:block">
          <a href="#about" className="hover:text-green-700">About</a>
          <a href="#mission" className="hover:text-green-700">Mission</a>
          <a href="#projects" className="hover:text-green-700">Projects</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
        </div>

        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-xl bg-green-700 text-white hover:bg-green-800"
        >
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-2xl text-white">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-4">
            Protect Nature. Empower People.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-lg md:text-2xl">
            Sustainability for a Resilient Future
          </motion.p>
        </div>
      </section>

      <main className="flex-grow p-6 space-y-16 max-w-6xl mx-auto">
        <section id="about" className={`${dark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-8`}>
          <img src={profile} alt="Prakash Tiwari" className="h-40 w-40 rounded-full object-cover shadow-md" />

          <div>
            <h2 className="text-3text-green-700 mb-3 font-bold">Prakash Tiwari</h2>
            <p className="text-green-700 font-semibold">Founder & CEO, Ecoverse</p>
            <p className="mt-4 text-lg leading-relaxed">
              Conservation strategist & environmental advocate dedicated to nature-based climate solutions.
            </p>
            <a href="https://www.linkedin.com/in/prakash-tiwari-2a2386196/" target="_blank" className="inline-block mt-4 text-green-700 underline text-lg">
              Visit my LinkedIn
            </a>
          </div>
        </section>

        <section id="mission" className={`${dark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg`}>
          <h2 className="text-3xl font-bold mb-3 text-green-700">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to restore ecosystems, advance climate-positive solutions, and build sustainable communities.
          </p>
        </section>

        <section id="projects" className={`${dark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg`}>
          <h2 className="text-3xl font-bold mb-6 text-green-700">Our Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((p) => (
              <div key={p} className={`${dark ? 'bg-gray-700' : 'bg-green-100'} rounded-xl p-6 shadow-md`}>
                <h3 className="text-xl font-bold mb-2">Project #{p}</h3>
                <p>Environmental initiative focusing on restoration, carbon, and community resilience.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={`${dark ? 'bg-gray-800' : '
