"use client"
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import './globals.css'; // Assurez-vous d'importer vos styles globaux Tailwind CSS

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en ms
      once: true, // L'animation se déclenche une seule fois
    });
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
