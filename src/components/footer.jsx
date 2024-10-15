import React from 'react';
import { AiFillAlipayCircle } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import Image from 'next/image';
import logos from "@/assets/logos.png";

// Composant FooterItem pour chaque élément de menu
const FooterItem = ({ icon, href, name }) => (
  <li className="flex items-center">
    <div className="mt-1 mr-2 text-blue-500">{icon}</div>
    <a
      href={href}
      className="duration-150 hover:text-gray-400 text-lg"
      aria-label={name}
    >
      {name}
    </a>
  </li>
);

function Footer() {
  const footerNavs = [
    {
      label: "Menu",
      items: [
        { icon: <AiOutlineLine className="h-4 w-4" />, href: '/', name: 'Accueil' },
        { icon: <AiOutlineLine className="h-4 w-4" />, href: '/about', name: 'A propos' },
        { icon: <AiOutlineLine className="h-4 w-4" />, href: '/services', name: 'Services' },
        { icon: <AiOutlineLine className="h-4 w-4" />, href: '/products', name: 'Produits' },
        { icon: <AiOutlineLine className="h-4 w-4" />, href: '/contact', name: 'Contact' },
      ],
    },
    {
      label: "Services",
      items: [
        { icon: <AiOutlineLine className="h-4 w-4" />, href: '/services/[id]?index=0', name: 'Transformation digitale' },
        { icon: <AiOutlineLine className="h-4 w-4" />, href: '/services/[id]?index=1', name: 'Web et mobile' },
        { icon: <AiOutlineLine className="h-4 w-4" />, href: '/services/[id]?index=2', name: 'Marketing digital' },
      ],
    },
    {
      label: "Coordonnées",
      items: [
        { icon: <FaLocationDot className="h-4 w-4 font-bold" />, href: '/', name: 'Cité Khandar, Ouest Foire. Villa No 12 Dakar, Sénégal' },
        { icon: <FaPhone className="h4 w-4" />, href: 'tel:+221788953039', name: '+221 78 895 30 39 / 77 095 75 60' },
        { icon: <FaEnvelope className="h-4 w-4" />, href: 'mailto:uptechnologiecorporation@gmail.com', name: 'uptechnologiecorporation@gmail.com' },
      ],
    },
  ];

  return (
    <footer className="pt-10 bg-gray-800 bg-footer bg-cover relative">
      <div className="px-10 md:px-8">
        <div className="max-w-40 px-4 rounded-md bg-white ml-10" data-aos="fade-down">
          <a href="/" aria-label="Logo UP-TECH">
            <Image src={logos} alt="UP-TECH Logo" loading="lazy" />
          </a>
        </div>
        <nav className="flex-1 mt-16 space-y-6 lg:px-10 justify-between sm:flex md:space-y-0">
          {footerNavs.map((nav, idx) => (
            <ul key={idx} className="space-y-4 text-gray-300">
              <h4 className="text-white font-bold text-3xl sm:pb-2" data-aos="fade-up">
                {nav.label}
              </h4>
              {nav.items.map((item, idx) => (
                <FooterItem key={idx} icon={item.icon} href={item.href} name={item.name} />
              ))}
            </ul>
          ))}
        </nav>
        <div data-aos="fade-up" data-aos-duration="1000" className="mt-10 py-10 border-t border-gray-700 flex items-center justify-between">
          <p className="text-gray-300">© 2024 UP-TECH - UP TECHNOLOGIE CORPORATION Inc. Tous droits réservés.</p>
          <div className="flex items-center gap-x-6 text-gray-400">
            {/* Réseaux sociaux */}
            {/* Utilise les liens réels ici */}
            <a href="#" aria-label="Facebook">
              <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48">
                {/* Icône de Facebook */}
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48">
                {/* Icône de Twitter */}
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48">
                {/* Icône d'Instagram */}
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
