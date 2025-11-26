import React from 'react';
import profile from '../assets/profile.jpg';

export default function About({ dark }) {
  return (
    <section id="about" className={`${dark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-8`}>
      <img src={profile} alt="Prakash Tiwari" className="h-40 w-40 rounded-full object-cover shadow-md" />
      <div>
        <h2 className="text-3xl mb-3 font-bold text-green-700">Prakash Tiwari</h2>
        <p className="text-green-700 font-semibold">Founder & CEO, Ecoverse</p>
        <p className="mt-4 text-lg leading-relaxed">
          Conservation strategist & environmental advocate dedicated to nature-based climate solutions.
        </p>
        <a href="https://www.linkedin.com/in/prakash-tiwari-2a2386196/" target="_blank" className="inline-block mt-4 text-green-700 underline text-lg">
          Visit my LinkedIn
        </a>
      </div>
    </section>
  );
}
