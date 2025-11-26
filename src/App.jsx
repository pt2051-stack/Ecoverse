import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? 'bg-gray-900 text-gray-100' : 'bg-green-50 text-gray-900'} min-h-screen flex flex-col`}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <main className="flex-grow p-6 space-y-16 max-w-6xl mx-auto">
        <About dark={dark} />
        <Mission dark={dark} />
        <Projects dark={dark} />
        <Contact dark={dark} />
      </main>
      <Footer dark={dark} />
    </div>
  );
}
