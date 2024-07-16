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

function page() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    /*
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="">
                    <Image src={loader} width={120} height={120} alt="Loading" className="animate-bounce" />
                </div>
            </div>
        )
    }
    */
    const posts = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            title: "Transformation digitale",
            desc: "La transformation digitale est essentielle pour les entreprises qui cherchent à rester compétitives dans…"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            title: "Web et mobile",
            desc: "Le développement web et mobile de qualité est essentiel pour fournir une expérience utilisateur…"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
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
                            <article className="max-w-md mx-auto lg:px-8 pt-5 lg:pb-8 bg-white group hover:text-opacity-0 hover:border-none hover:bg-none hover:animate-none cursor-pointer hover:bg-blue-950 hover:bg-opacity-75 mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key} data-aos="fade-up">
                                <a href={items.href}>
                                    <div className="group hover:border-none hover:bg-none hover:animate-none cursor-pointer">
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
                                </a>
                            </article>
                        ))
                    }
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page
