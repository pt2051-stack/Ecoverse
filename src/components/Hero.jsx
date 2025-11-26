import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
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
  );
}
