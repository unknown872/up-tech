"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logos from "@/assets/logos.png"
import { usePathname } from 'next/navigation';

function Header() {

    const [state, setState] = useState(false)
    const pathname = usePathname()

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Accueil", path: "/" },
        { title: "À propos", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Produits", path: "/products" },
        { title: "Contact", path: "/contact" }
    ];

    

    return (
        <nav className="opacity-55 bg-white lg:border-b lg:border-solid lg:border-slate-400 w-full fixed top-0 left-0 right-0 z-50" aria-label="Menu principal">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block" data-aos="fade-down">
                    <a href="/" aria-label="Retour à la page d'accueil">
                        <Image 
                            src={logos}
                            width={120}
                            height={50}
                            alt="Logo de UP-TECH"
                            priority
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800" 
                            aria-label="Ouvrir le menu"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'} transition-transform duration-300 ease-in-out`}>
                    <ul className="justify-end items-center space-y-6 lg:space-x-9 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                const isActive = pathname === item.path;
                                return (
                                    <li 
                                        key={idx} 
                                        data-aos="fade-right" 
                                        className={`text-xl font-bold ${isActive ? 'text-blue-600 bg-none' : 'text-gray-700 hover:text-blue-600'}`}
                                    >
                                        <a
                                            href={item.path}
                                            aria-current={isActive ? "page" : undefined}
                                            aria-label={`Naviguer vers ${item.title}`}
                                            className="block"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header