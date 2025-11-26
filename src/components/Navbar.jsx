import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar({ dark, setDark }) {
  return (
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
  );
}
