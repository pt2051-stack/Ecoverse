import React from 'react';

export default function Projects({ dark }) {
  return (
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
  );
}
