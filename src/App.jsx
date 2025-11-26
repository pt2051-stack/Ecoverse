import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { motion } from 'framer-motion';
import logo from './logo.png'; // <-- Add your logo image to /src
import profile from './profile.jpg'; // <-- Add your real photo as profile.jpg to /src

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? 'bg-gray-900 text-gray-100' : 'bg-green-50 text-gray-900'} min-h-screen flex flex-col font-sans`}>
      {/* Navigation */}
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

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-xl bg-green-700 text-white hover:bg-green-800"
        >
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      {/* Hero */}
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
        {/* About */}
        <section id="about" className={`${dark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-8`}>
          <img src={profile} alt="Prakash Tiwari" className="h-40 w-40 rounded-full object-cover shadow-md" />

          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-3">Prakash Tiwari</h2>
            <p className="text-green-700 font-semibold">Founder & CEO, Ecoverse</p>
            <p className="mt-4 text-lg leading-relaxed">
              Conservation strategist & environmental advocate dedicated to nature-based climate solutions.
            </p>
            <a
              href="https://www.linkedin.com/in/prakash-tiwari-2a2386196/"
              target="_blank"
              className="inline-block mt-4 text-green-700 underline text-lg"
            >
              Visit my LinkedIn
            </a>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className={`${dark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg`}>
          <h2 className="text-3xl font-bold mb-3 text-green-700">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to restore ecosystems, advance climate-positive solutions, and build sustainable communities.
          </p>
        </section>

        {/* Projects Grid */}
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

        {/* Contact */}
        <section id="contact" className={`${dark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg`}>
          <h2 className="text-3xl font-bold mb-3 text-green-700">Contact Ecoverse</h2>
          <p className="mb-4 text-lg">Submit your message and receive it via Email instantly.</p>

          {/* Free email backend using formsubmit.co */}
          <form className="space-y-4" action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded-xl" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded-xl" required />
            <textarea name="message" placeholder="Message" rows="4" className="w-full p-3 border rounded-xl" required></textarea>

            <button className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-800 w-full md:w-auto">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-green-700 text-white text-center p-4 mt-10">
        © 2025 Ecoverse. All rights reserved.
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
