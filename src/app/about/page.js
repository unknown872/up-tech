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
import project from "@/assets/project.png";
import * as Tabs from "@radix-ui/react-tabs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import mascotte from "@/assets/mascotte.png"
import { Helmet } from "react-helmet";

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

    const tabItems = [
        "Notre mission",
        "Notre vision",
        "Nos valeurs",
    ];

    return (
        <>
            <Helmet>
                <title>À propos de nous - UP-TECH</title>
                <meta name="description" content="Découvrez UP-TECH, votre partenaire stratégique pour la transformation digitale. Nous concevons des solutions sur mesure en développement de logiciels, fintech, et plus." />
                <meta name="keywords" content="UP-TECH, UP TECHNOLOGIE CORPORATION, À propos, transformation digitale, développement de logiciels, fintech, solutions sur mesure" />
                <meta property="og:title" content="À propos de UP-TECH" />
                <meta property="og:description" content="En savoir plus sur UP-TECH, nos services et notre engagement envers l'innovation et la transformation digitale." />
                <meta property="og:image" content="/assets/logos.png" /> {/* Lien vers une image de prévisualisation sur les réseaux sociaux */}
                <meta property="og:url" content="https://uptechnologie-corpororation.com/about" /> {/* Ton URL ici */}
            </Helmet>
            <Header />
            <section className="bg-beige">
                <div className='p-20 bg-contact bg-cover bg-opacity-50 pt-44'>
                    <h1 className='text-center lg:text-6xl text-4xl text-white font-bold'>A propos</h1>
                </div>
                <div className="lg:flex lg:p-20 p-4 gap-x-14">
                    <div className="lg:w-1/2">
                        <div data-aos="fade-right" data-aos-duration="300" className='lg:mt-0 mt-8'>
                            <h2 className="font-bold text-lg text-gray-600 animate-slidein">
                                Qui sommes-nous?
                            </h2>
                            <p className='mt-4 font-bold text-2xl text-blue-950'>
                                Votre partenaire pour réussir votre transition vers le digital
                            </p>
                        </div>
                        <div className='mt-4 text-gray-700'>
                            <p className="" data-aos="fade-right">
                                <span className="font-bold text-cyan-950">UP Technologie Corporation</span> est spécialisée dans la conception et le développement de logiciels sur mesure, la transformation digitale et la fintech.
                            </p>
                            <p className="mt-3" data-aos="fade-right">
                                Grâce à notre expertise et à notre maîtrise des dernières technologies, nous concevons des solutions sur mesure pour répondre à vos besoins spécifiques et vous aider à atteindre vos objectifs.
                            </p>
                            <p className="mt-3" data-aos="fade-right">
                                Notre équipe multidisciplinaire, composée d'experts en développement, d'architectes, de designers UX/UI et de consultants, travaille main dans la main avec vous pour concevoir des solutions digitales sur mesure, parfaitement adaptées à vos besoins spécifiques.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:p-10">
                        <div className="lg:pt-16 pt-10" data-aos="zoom-out" data-aos-duration="3000">
                            <Image src={project} alt="Illustration Equipe UP-TECH" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-[-50px] sm:hidden mb-[-250px] block lg:mb-0" data-aos="zoom-out" data-aos-duration="3000">
                    <Image src={mascotte} height={290} alt="Mascotte UP-TECH" loading="lazy"/>
                </div>
                <div className="lg:flex bg-blue-about mt-10 mb-2 bg-cover lg:ml-10 lg:mr-10 ml-2 mr-2">
                <div className="lg:ml-5 lg:pt-16 ml-4 pt-56" data-aos="fade-right" data-aos-duration="3000">
                        <h1 className="lg:pl-5 text-white font-medium text-4xl lg:mb-0 mb-3">N'hésitez pas à <span className="font-bold">nous contacter</span></h1>
                        <div className="lg:flex lg:mb-0 pb-10">
                            <div className="lg:pl-5 lg:pt-4 font-medium">
                                <p className="underline text-white">Appellez-nous:</p>
                                <p className="flex">
                                    <FaPhoneAlt className="mt-1.5 text-blue-500 h-5 w-5 mr-2" />
                                    <span className="text-xl text-white font-semibold">+221 78 895 30 39 / 77 095 75 60</span>
                                </p>
                            </div>
                            <span className="p-6 font-medium text-white hidden sm:block">ou</span>
                            <div className="pt-4 font-medium">
                                <p className="underline text-white">Envoyez-nous:</p>
                                <p className="flex">
                                    <MdEmail className="mt-1.5 text-blue-500 h-5 w-5 mr-2" />
                                    <span className="text-xl text-white font-semibold">uptechnologiecorporation@gmail.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:mt-[-50px] hidden sm:block" data-aos="fade-right" data-aos-duration="3000">
                        <Image src={mascotte} height={290} alt="Mascotte UP-TECH" loading="lazy"/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page
