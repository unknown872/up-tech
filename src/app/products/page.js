"use client"
import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Product from '@/components/product'
import Footer from '@/components/footer'
import React from 'react'
import Image from "next/image";
import loader from "@/assets/loader.png";

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
        <div>
            <Header />
            <div className=''>
                <div className='p-20 bg-contact bg-cover bg-opacity-50 pt-44'>
                    <h1 className='text-center lg:text-6xl text-4xl text-white font-bold'>Produits</h1>
                </div>
                <Product />
            </div>
            <Footer />
        </div>
    )
}

export default page
