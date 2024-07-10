"use client"
import React from 'react';
import Image from 'next/image';
import banners from '@/assets/banners.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from "react-icons/fa6";

function About() {

    return (
        <section id="about" className="py-20 bg-beige bg-cover">
            <div className="lg:flex lg:ml-0 gap-4 lg:py-10" >
                <div className="lg:w-1/2" data-aos="zoom-in">
                    <Image src={banners}/>
                </div>
                <div className="lg:w-1/2 p-4">
                    <h1 className='text-2xl whitespace-nowrap text-blue-950 font-semibold' data-aos="fade-right" data-aos-duration="3000">Qui sommes-nous?</h1>
                    <p className='text-4xl mt-2 whitespace-pre-wrap  font-extrabold text-blue-900' data-aos="fade-right" data-aos-duration="3000">Le Partenaire stratégique de votre transformation digitale</p>
                    <p className='mt-4 text-xl whitespace-pre-wrap font-semibold text-slate-700' data-aos="fade-right" data-aos-duration="3000">Nous adaptons notre prestation à la manière dont vous travaillez</p>
                    <p className='mt-4 text-lg font-normal whitespace-pre-wrap text-slate-700' data-aos="fade-right" data-aos-duration="3000">Vous méritez des soins simples, personnalisés et sans tracas. Une assurance sûre conçue pour vous aider à prospérer.</p>
                    <p className='mt-4 text-lg font-normal whitespace-break-wrap text-slate-700' data-aos="fade-right" data-aos-duration="3000">Notre mission est d’accompagner les entreprises et les organisations dans leurs démarches de transformation numérique et de recherche de la performance.</p>
                    <div className="lg:mt-5 mt-10 gap-3 sm:flex"  data-aos="fade-right" data-aos-duration="3000">
                        <a
                            href="./about"
                            className="hover:bg-blue-800 mt-4 hover:text-white lg:text-lg text-sm lg:font-medium text-bold py-5 px-3 lg:py-4 lg:px-8 text-white uppercase bg-blue-500 rounded-md duration-150"
                        >
                            <span>
                                A propos de nous
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
