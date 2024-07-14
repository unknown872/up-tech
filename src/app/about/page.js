"use client"
import { useEffect, useState } from "react";
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import loader from "@/assets/loader.png";
import Image from "next/image";
import project from "@/assets/project.png"

function page() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="">
                    <Image src={loader} width={120} height={120} alt="Loading" className="animate-bounce" />
                </div>
            </div>
        )
    }
    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: "+221 77 095 75 60",
            title: "Phone"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: "uptech@gmail.com",
            title: "Email"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "Cite Khandar Ouest Foire. No 105 Dakar, Senegal",
            title: "Our office"
        },
    ]
    return (
        <div>
            <Header />
            <section>
                <div className='p-20 bg-contact bg-cover bg-opacity-50 pt-44'>
                    <h1 className='text-center lg:text-6xl text-4xl text-white font-bold'>About</h1>
                </div>
                <div className="lg:flex bg-beige lg:p-20 p-4 gap-x-14">
                    <div className="lg:w-1/2">
                        <div data-aos="fade-right" data-aos-duration="300" className='lg:mt-0 mt-8'>
                            <h1 className="font-bold text-lg text-gray-600 animate-slidein">
                                Qui sommes-nous?
                            </h1>
                            <p className='mt-4 font-bold text-2xl text-blue-950'>
                                Partenaire stratégique de votre transformation digitale
                            </p>
                        </div>
                        <div className='mt-4 text-gray-700'>
                            <p className="" data-aos="fade-right">
                                <span className="font-bold text-cyan-950">Up-Tech</span> est spécialisée dans la conception et le développement de logiciels sur mesure, la transformation digitale et la fintech.
                            </p>
                            <p className="mt-3" data-aos="fade-right">
                                Notre entreprise a été fondée avec l’objectif de fournir des solutions technologiques personnalisées pour répondre aux besoins spécifiques de nos clients, en utilisant les dernières technologies et les meilleures pratiques de l’industrie.
                            </p>
                            <p className="mt-3" data-aos="fade-right">
                                Nous avons une équipe d’experts en développement de logiciels, d’architectes, de designers UX/UI et de consultants en transformation digitale, qui travaillent en étroite collaboration avec nos clients pour comprendre leurs besoins et leur fournir des solutions innovantes et efficaces.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:p-10">
                        <div className="lg:pt-16 pt-10" data-aos="zoom-out" data-aos-duration="3000">
                            <Image src={project}/>    
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page
