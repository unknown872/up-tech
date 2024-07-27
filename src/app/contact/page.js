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
import Swal from "sweetalert2";

function page() {
    const [loading, setLoading] = useState(true);
    const [responseMessage, setResponseMessage] = useState('');

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        tel: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/message', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message sent successfully!',
                    showConfirmButton: false,
                    timer: 1500
                });
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    tel: '',
                    message: ''
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: `Error: ${result.error}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'An unexpected error occurred.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

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
            contact: "+221 78 895 30 39",
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
            contact: "Cite Khandar Ouest Foire. Villa No 12 Dakar, Senegal",
            title: "Our office"
        },
    ]
    return (
        <div>
            <Header />
            <section>
                <div className='p-20 bg-contact bg-cover bg-opacity-50 pt-44'>
                    <h1 className='text-center lg:text-6xl text-4xl text-white font-bold'>Contact</h1>
                </div>
                <div className="lg:flex bg-beige lg:p-20 p-4 gap-x-14">
                    <div className="lg:w-1/2">
                        <div data-aos="fade-right" data-aos-duration="300" className='lg:mt-0 mt-8'>
                            <h1 className="font-bold text-lg text-gray-600 animate-slidein">
                                Restez-connecté
                            </h1>
                            <p className='mt-4 font-bold text-2xl text-blue-950'>
                                Opter pour nos services, c‘est aborder le monde digital avec sérénité !
                            </p>
                        </div>
                        <div className='lg:pr-24'>
                            <ul className="mt-12 flex flex-col gap-x-12 gap-y-6 lg:gap-x-24">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} className='border rounded-md p-4 bg-white hover:border-blue-500' data-aos="zoom-out">
                                            <div className="mt-3 flex items-center gap-x-3">
                                                <div data-aos="fade-down" data-aos-duration="3000" className="flex-none text-blue-400 lg:p-4 p-2">
                                                    {item.icon}
                                                </div>
                                                <div className='lg:p-0 p-2' data-aos="fade-right" data-aos-duration="400">
                                                    <h4 className="lg:text-xl text-base text-blue-950 font-bold">{item.title}</h4>
                                                    <p className='mt-2 lg:text-normal text-normal text-gray-600'>{item.contact}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div data-aos="fade-right" data-aos-duration="300" className='lg:mt-0 mt-10'>
                            <h1 className="font-bold text-lg text-gray-600 animate-slidein">
                                Contactez-nous!
                            </h1>
                            <p className='mt-4 font-bold text-2xl text-blue-950'>
                                Profitez d’une équipe d’experts très dynamique pour vous accompagner
                            </p>
                        </div>
                        <div className="mt-12 max-w-xl" data-aos="fade-right" data-aos-duration="500">
                            <form
                                className="space-y-5"
                                onSubmit={handleSubmit}
                            >
                                <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                                    <div>
                                        <label className="text-normal text-gray-600">
                                            Prenom *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            value={formData.firstname}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-normal text-gray-600">
                                            Nom *
                                        </label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            value={formData.lastname}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-normal text-gray-600">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="text-normal text-gray-600">
                                        Telephone *
                                    </label>
                                    <input
                                        type="tel"
                                        name="tel"
                                        value={formData.tel}
                                        onChange={handleChange}
                                        required
                                        className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="text-normal text-gray-600">
                                        Message *
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full mt-2 bg-white h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                    >

                                    </textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="flex px-10 py-6 text-white text-xl font-medium  bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-lg duration-150 shadow-3xl"
                                    data-aos="fade-up"
                                    data-aos-duration="3000"
                                >
                                    <span>Envoyer</span>
                                    <GrStatusGood className='h-7 w-7 ml-2' />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page
