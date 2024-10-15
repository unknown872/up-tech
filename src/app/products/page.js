"use client"
import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Product from '@/components/product'
import Footer from '@/components/footer'
import React from 'react'
import Image from "next/image";
import loader from "@/assets/loader.png";
import { Helmet } from 'react-helmet'

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

    return (
        <>
            <Helmet>
                <title>Produits - UP-TECH</title>
                <meta name="description" content="Découvrez les produits innovants de UP-TECH, conçus pour accompagner votre transformation digitale avec des solutions sur mesure à Dakar." />
                <meta name="keywords" content="produits technologiques, UP Technologie Corporation, transformation digitale, logiciels sur mesure, UP-TECH, services IT Dakar" />
                <meta property="og:title" content="Produits UP-TECH" />
                <meta property="og:description" content="Découvrez les solutions technologiques innovantes proposées par UP-TECH pour une transformation digitale réussie." />
                <meta property="og:image" content="/assets/logos.png" /> {/* Lien vers une image de prévisualisation sur les réseaux sociaux */}
                <meta property="og:url" content="https://uptechnologie-corpororation.com/contact" /> {/* Ton URL ici */}
            </Helmet>
            <Header />
            <div className=''>
                <div className='p-20 bg-contact bg-cover bg-opacity-50 pt-44'>
                    <h1 className='text-center lg:text-6xl text-4xl text-white font-bold'>Produits</h1>
                </div>
                <Product />
            </div>
            <Footer />
        </>
    )
}

export default page
