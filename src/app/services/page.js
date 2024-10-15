"use client"
import { useEffect, useState } from "react";
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import loader from "@/assets/loader.png";
import Image from "next/image";
import { FaDigitalOcean } from "react-icons/fa";
import { MdImportantDevices } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Helmet } from "react-helmet";
function page() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

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

    const posts = [
        {
            id: 1,
            icon: <FaDigitalOcean className="w-14 h-14" />,
            title: "Transformation digitale",
            desc: "La transformation digitale est essentielle pour les entreprises qui cherchent à rester compétitives dans…"
        },
        {
            id: 2,
            icon: <MdImportantDevices className="w-14 h-14" />,
            title: "Web et mobile",
            desc: "Le développement web et mobile de qualité est essentiel pour fournir une expérience utilisateur…"
        },
        {
            id: 3,
            icon: <SiMarketo className="w-14 h-14" />,
            title: "Marketing digital",
            desc: "Amélioration de Votre Croissance Digitale et e-Réputation Si vous avez l’ambition d’accélérer votre croissance…"
        },
    ]
    return (
        <>
            <Helmet>
                <title>Services - UP-TECH</title>
                <meta name="description" content="Découvrez nos services de transformation digitale, développement web et marketing digital." />
                <meta name="keywords" content="transformation digitale, développement web, marketing digital, services informatiques"/>
                <meta property="og:url" content="https://uptechnologie-corpororation.com/services" />
            </Helmet>
            <Header />
            <section className="bg-beige bg-cover">
                <div className='p-20 bg-contact bg-cover bg-opacity-50 pt-44'>
                    <h1 className='text-center lg:text-6xl text-4xl text-white font-bold'>Services</h1>
                </div>
                <div className="lg:flex lg:px-20 lg:pt-16 p-4 gap-x-14">
                    <div className="lg:w-1/2">
                        <div data-aos="fade-right" data-aos-duration="300" className='lg:mt-0 mt-8'>
                            <h2 className="font-bold text-lg text-gray-600 animate-slidein">
                                Nos services
                            </h2>
                            <p className='mt-4 font-bold text-2xl text-blue-900'>
                                Ce que nous faisons
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div data-aos="fade-right" data-aos-duration="300" className='lg:mt-0 mt-10'>
                            <p className='mt-1 lg:text-lg text-lg text-gray-600'>
                                Nous travaillons au quotidien à mettre en place, des solutions techniques, mais surtout innovantes qui permettent de répondre aux défis de demain !
                                Un savoir faire et être reconnu
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:mx-10 mx-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-10">
                    {
                        posts.map((items, index) => (
                            <article className="relative lg:px-8 pt-5 lg:pb-8 bg-white group hover:text-opacity-0 cursor-pointer hover:bg-blue-950 hover:bg-opacity-75 mt-4 shadow-lg border rounded-md duration-300" key={index} data-aos="fade-up">
                                <div className="flex items-center justify-center mt-2 pt-3 ml-4 mr-2">
                                    <div aria-label={items.title} className="border-dashed border-2 p-4 rounded-full text-blue-950 border-blue-600 group-hover:bg-white">
                                        {items.icon}
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3 text-center">
                                    <h3 className="text-blue-900 text-2xl font-bold">{items.title}</h3>
                                    <div className="bg-blue-500 py-[1.5px] w-6 mx-auto mt-3 mb-3"></div>
                                    <p className="text-gray-400 text-lg mt-1">{items.desc}</p>
                                </div>
                                <Link href={`/services/[id]?index=${index}`}>
                                    <div className="flex items-center justify-center text-normal font-semibold mx-auto text-white hover:text-blue-500 hover:font-bold">
                                        Voir plus <IoIosArrowForward className="ml-2" />
                                    </div>
                                </Link>
                            </article>

                        ))
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page
