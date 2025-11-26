import React, { useState } from 'react';

export default function Contact({ dark }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message has been sent!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`${dark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg`}>
      <h2 className="text-3xl font-bold mb-6 text-green-700">Contact Us</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
        />
        <button type="submit" className="bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
