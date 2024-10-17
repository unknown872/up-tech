"use client"
import React from 'react'
import Image from "next/image";
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from "react-icons/fa6";

function Accueil() {

    return (
        <>
            <Helmet>
                <title>UP-TECH - UP TECHNOLOGIE CORPORATION</title>
                <meta name="description" content="Notre agence web vous accompagne dans la définition et la mise en œuvre d'une stratégie digitale adaptée à votre secteur d'activité et à vos objectifs." />
                <meta name="keywords" content="développement Web, développement Mobile, agence web, stratégie digitale, UP Technologie Corporation, up-tech, uptech, solutions innovantes, digital, solution digitale, informatique" />
                <meta property="og:title" content="UP-TECH - UP TECHNOLOGIE CORPORATION" />
                <meta property="og:description" content="Découvrez comment UP Technologie Corporation propose des solutions innovantes adaptées à votre secteur d'activité et à vos objectifs." />
                <meta property="og:image" content="/assets/logos.png" /> {/* Lien vers une image de prévisualisation sur les réseaux sociaux */}
                <meta property="og:url" content="https://uptechnologie-corpororation.com/" /> {/* Ton URL ici */}
            </Helmet>

            <section id="home" className="overflow-hidden py-64 px-4 md:px-8 bg-cover gif-bg" data-aos="zoom-out" data-aos-duration="2000">
                <div className="text-center relative">
                    <div className="">
                        <h1 className='text-black font-extrabold mb-2' data-aos="fade-up">UP TECHNOLOGIE CORPORATION</h1>
                        <h2 className="text-4xl whitespace-nowrap text-center lg:text-6xl sm:text-2xl font-extrabold md:text-4xl text-blue-500" data-aos="fade-up" data-aos-duration="2000">
                            Solutions innovantes
                        </h2>
                        <p className="text-slate-100 text-center justify-center items-center px-14 whitespace-pre-line font-medium leading-relaxed animate-fadein500 mt-3 lg:text-xl" data-aos="fade-up" data-aos-duration="3000">
                            Notre agence web vous accompagne dans la définition et la mise en œuvre d'une stratégie digitale adaptée à votre secteur d'activité et à vos objectifs
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

        </>
    )
}

export default Accueil
