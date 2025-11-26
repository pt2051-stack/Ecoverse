import React from 'react';

export default function Footer({ dark }) {
  return (
    <footer className={`${dark ? 'bg-gray-800' : 'bg-green-700'} text-white text-center p-6`}>
      © 2025 Ecoverse. All rights reserved.
    </footer>
  );
}
