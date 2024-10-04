"use client"
import React from 'react'
import Image from "next/image";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from "react-icons/fa6";

function Accueil() {

    return (
        <section id="home" className="overflow-hidden py-64 px-4 bg-cover md:px-8 image-bg" data-aos="zoom-out" data-aos-duration="2000">
            <div className="text-center relative">
                <div className="">
                    <h3 className='text-gray-700 font-extrabold mb-2'>UP-TECH</h3>
                    <h1 className="text-4xl whitespace-nowrap text-center lg:text-6xl sm:text-2xl font-extrabold md:text-4xl text-blue-500" data-aos="fade-up" data-aos-duration="2000">
                        Solutions innovantes
                    </h1>
                    <p className="text-gray-700 text-center justify-center items-center px-14 whitespace-pre-line font-medium leading-relaxed animate-fadein500 mt-3 lg:text-xl" data-aos="fade-up" data-aos-duration="3000">
                        Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie adaptée à vos besoins selon votre domaine d'activité
                    </p>
                </div>
                <div className="lg:mt-5 mt-8 items-center justify-center gap-3 sm:flex" data-aos="fade-right" data-aos-duration="3000">
                    <a
                        href="./contact"
                        className="lg:text-lg text-sm font-bold hover:bg-blue-500 hover:text-white mt-2 lg:py-5 lg:px-8 py-5 px-3 text-blue-500 uppercase bg-white rounded-md duration-150"
                    >
                        <span>Contactez-nous</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Accueil
