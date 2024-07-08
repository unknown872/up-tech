"use client"
import React from 'react';
import Image from 'next/image';
import banner from '../../src/assets/7462235.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from "react-icons/fa6";

function About() {

    return (
        <section id="about" className="py-20 bg-beige bg-cover">
            <div className="flex gap-4 py-10" >
                <div className="w-1/2" data-aos="zoom-in">
                    <Image src={banner} />
                </div>
                <div className="w-1/2">
                    <h1 className='text-2xl text-blue-950 font-semibold' data-aos="fade-right" data-aos-duration="3000">Qui sommes-nous?</h1>
                    <p className='text-4xl mt-2 font-extrabold text-blue-900' data-aos="fade-right" data-aos-duration="3000">Le Partenaire stratégique <br /> de votre transformation <br /> digitale</p>
                    <p className='mt-4 text-xl font-semibold text-slate-700' data-aos="fade-right" data-aos-duration="3000">Nous adaptons notre prestation à la manière dont vous travaillez</p>
                    <p className='mt-4 text-lg font-normal text-slate-700' data-aos="fade-right" data-aos-duration="3000">Vous méritez des soins simples, personnalisés et sans tracas. Une <br /> assurance sûre conçue pour vous aider à prospérer.</p>
                    <p className='mt-4 text-lg font-normal text-slate-700' data-aos="fade-right" data-aos-duration="3000">Notre mission est d’accompagner les entreprises et les <br /> organisations dans leurs démarches de transformation numérique <br /> et de recherche de la performance.</p>
                    <div className="mt-5  gap-3 sm:flex"  data-aos="fade-right" data-aos-duration="3000">
                        <a
                            href="./about"
                            className="hover:bg-blue-800 hover:text-white flex text-lg font-medium w-full mt-2 py-4 px-8 text-white uppercase bg-blue-500 rounded-md duration-150  sm:w-auto"
                        >
                            <span>
                                A propos de nous
                            </span>
                            <FaArrowRight className='mt-1 ml-2'/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
