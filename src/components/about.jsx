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
                    <Image src={banners} alt="Bannière illustrant la transformation digitale" loading='lazy'/>
                </div>
                <div className="lg:w-1/2 p-4">
                    <h2 className='text-2xl whitespace-nowrap text-blue-950 font-semibold' data-aos="fade-right" data-aos-duration="3000">Qui sommes-nous?</h2>
                    <p className='text-4xl mt-2 whitespace-pre-wrap  font-extrabold text-blue-900' data-aos="fade-right" data-aos-duration="3000">Votre partenaire privilégié pour réussir votre transformation digitale</p>
                    <p className='mt-4 text-xl whitespace-pre-wrap font-semibold text-slate-700' data-aos="fade-right" data-aos-duration="3000">Nous construisons ensemble la solution qui vous convient</p>
                    <p className='mt-4 text-lg font-normal whitespace-pre-wrap text-slate-700' data-aos="fade-right" data-aos-duration="3000">Parce que chaque client est unique, nous proposons des offres personnalisées pour vous accompagner au quotidien et vous aider à atteindre vos objectifs.</p>
                    <p className='mt-4 text-lg font-normal whitespace-break-wrap text-slate-700' data-aos="fade-right" data-aos-duration="3000">Notre objectif est de vous accompagner à maximiser votre performance grâce à des solutions digitales sur mesure.</p>
                    <div className="lg:mt-5 mt-10 gap-3 sm:flex"  data-aos="fade-right" data-aos-duration="3000">
                        <a
                            href="./about"
                            aria-label="En savoir plus sur notre entreprise et nos services numériques"
                            className="hover:bg-blue-800 mt-4 hover:text-white lg:text-lg text-sm lg:font-medium font-semibold text-bold py-5 px-3 lg:py-4 lg:px-8 text-white uppercase bg-blue-500 rounded-md duration-150"
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
