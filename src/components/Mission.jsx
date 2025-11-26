import React from 'react';

export default function Mission({ dark }) {
  return (
    <section id="mission" className={`${dark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg`}>
      <h2 className="text-3xl font-bold mb-3 text-green-700">Our Mission</h2>
      <p className="text-lg leading-relaxed">
        Our mission is to restore ecosystems, advance climate-positive solutions, and build sustainable communities.
      </p>
    </section>
  );
}
