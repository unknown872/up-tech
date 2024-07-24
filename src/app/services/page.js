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
import { FaDigitalOcean } from "react-icons/fa";
import { MdImportantDevices } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import Ville from "@/components/ville"

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

    const posts = [
        {
            id: 1,
            icon: <FaDigitalOcean className="w-14 h-14" />
            ,
            title: "Transformation digitale",
            desc: "La transformation digitale est essentielle pour les entreprises qui cherchent à rester compétitives dans…"
        },
        {
            id: 2,
            icon: <MdImportantDevices className="w-14 h-14" />
            ,
            title: "Web et mobile",
            desc: "Le développement web et mobile de qualité est essentiel pour fournir une expérience utilisateur…"
        },
        {
            id: 3,
            icon: <SiMarketo className="w-14 h-14" />
            ,
            title: "Marketing digital",
            desc: "Amélioration de Votre Croissance Digitale et e-Réputation Si vous avez l’ambition d’accélérer votre croissance…"
        },
    ]
    return (
        <div>
            <Header />
            <section className="bg-beige bg-cover">
                <div className='p-20 bg-contact bg-cover bg-opacity-50 pt-44'>
                    <h1 className='text-center lg:text-6xl text-4xl text-white font-bold'>Services</h1>
                </div>
                <div className="lg:flex lg:px-20 lg:pt-16 p-4 gap-x-14">
                    <div className="lg:w-1/2">
                        <div data-aos="fade-right" data-aos-duration="300" className='lg:mt-0 mt-8'>
                            <h1 className="font-bold text-lg text-gray-600 animate-slidein">
                                Nos services
                            </h1>
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
                        posts.map((items, key) => (
                            <article className="relative lg:px-8 pt-5 lg:pb-8 bg-white group hover:text-opacity-0 hover:border-none hover:bg-none hover:animate-none cursor-pointer hover:bg-blue-950 hover:bg-opacity-75 mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key} data-aos="fade-up">
                                <div className="group hover:border-none hover:bg-none hover:animate-none cursor-default">
                                    <div className="flex items-center justify-center mt-2 pt-3 ml-4 mr-2">
                                        <div className="flex-none border-dashed group-hover:bg-white group-hover:border-none border-2 p-4 rounded-full text-blue-950 border-blue-600 group-hover:animate-bounce">
                                            {items.icon}
                                        </div>
                                    </div>
                                    <div className="pt-3 ml-4 mr-2 mb-3 text-center">
                                        <h3 className="text-blue-900 text-2xl font-bold group-hover:text-white">
                                            {items.title}
                                        </h3>
                                        <div className="bg-blue-500 py-[1.5px] w-6 lg:ml-[136px] ml-[167px] mt-3 mb-3"></div>
                                        <p className="text-gray-400 text-lg mt-1">{items.desc}</p>
                                    </div>
                                </div>
                                <div className="group-hover:flex lg:mb-0 mb-4 group-hover:bold items-center justify-center text-normal hidden group-hover:block font-semibold mx-[110px] text-white hover:text-blue-500 hover:font-bold hover:flex hover:text-lg">
                                    <a>Voir plus</a>
                                    <IoIosArrowForward className="lg:mt-1.5 mt-1" />
                                </div>
                            </article>
                        ))
                    }
                </div>
            </section>
            <Ville/>
            <Footer />
        </div>
    )
}

export default page
