"use client"
import React from 'react'
import Image from "next/image";
import Background from '../../src/assets/background.jpg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from "react-icons/fa6";

function Accueil() {

    return (
        <section id="home" className="overflow-hidden py-64 px-4 bg-cover md:px-8 image-bg" data-aos="zoom-out" data-aos-duration="2000">
            <div className="text-center relative">
                <div className="py-4">
                    <h1 className="lg:text-8xl  font-extrabold md:text-4xl text-blue-500" data-aos="fade-up" data-aos-duration="2000">
                        Des solutions innovantes
                    </h1>
                    <p className="text-gray-500 font-semibold leading-relaxed animate-fadein500 mt-3 lg:text-3xl whitespace-normal" data-aos="fade-up" data-aos-duration="3000">
                        Notre agence web est capable de repondre a <br /> tous vos besoins et d'elaborer une veritable <br /> strategie adaptee a vos besoin selon <br /> votre domaine d'activite.
                    </p>
                </div>
                <div className="mt-5 items-center justify-center gap-3 sm:flex" data-aos="fade-right" data-aos-duration="3000">
                    <a
                        href="./contact"
                        className="shadow-2xl flex text-lg font-medium hover:bg-blue-500 hover:text-white w-full mt-2 py-5 px-8 text-blue-500 uppercase bg-white rounded-md duration-150  sm:w-auto"
                    >
                        <span>Contactez-nous</span>
                        <FaArrowRight className='mt-1 ml-2' /> 
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Accueil
