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
                <div className="lg:py-4">
                    <h1 className="sm:text-8xl sm:font-bold lg:text-8xl lg:font-extrabold md:text-4xl text-blue-500" data-aos="fade-up" data-aos-duration="2000">
                        Des solutions innovantes
                    </h1>
                    <p className="text-gray-500 font-semibold leading-relaxed animate-fadein500 mt-3 lg:text-3xl whitespace-normal" data-aos="fade-up" data-aos-duration="3000">
                        Notre agence web est capable de repondre a <br /> tous vos besoins et d'elaborer une veritable <br /> strategie adaptee a vos besoin selon <br /> votre domaine d'activite.
                    </p>
                </div>
                <div className="mt-5 items-center justify-center gap-3 sm:flex" data-aos="fade-right" data-aos-duration="3000">
                    <a
                        href="./contact"
                        className="lg:text-lg sm:text-sm lg:font-medium sm:font-normal hover:bg-blue-500 hover:text-white mt-2 lg:py-5 lg:px-8 sm:py-4 sm:px-2 text-blue-500 uppercase bg-white rounded-md duration-150"
                    >
                        <span>Contactez-nous</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Accueil
