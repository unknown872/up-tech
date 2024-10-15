import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Ri24HoursLine } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
function Features() {
    const features = [
        {
            icon: <Ri24HoursLine className='w-8 h-8'/>,
            title: "Support 24/7",
            desc: "Une équipe dédiée pour vous"
        },
        {
            icon: <AiOutlineSafetyCertificate className='w-8 h-8' />,
            title: "Satisfaction garantie",
            desc: "Une gestion de projet assurée"
        },
        {
            icon: <AiOutlineLike className='w-8 h-8' />,
            title: "Qualité de services",
            desc: "Un travail et une ergonomie au top"
        }
    ]
    return (
        <section className="bg-white py-3 pb-10 border-b-2">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="lg:mt-10 mt-1">
                    <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
                        {
                            features.map((item, idx) => (
                                <li data-aos="fade-down" aria-label={`Fonctionnalité: ${item.title}`} data-aos-duration="3000" key={idx} className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}>
                                    <div data-aos="fade-right" data-aos-duration="4000" className="w-12 h-12 border text-blue-600 bg-blue-100 rounded-xl flex items-center justify-center" aria-label={item.title}>
                                        {item.icon}
                                    </div>
                                    <h3 data-aos="fade-right" data-aos-duration="5000" className="text-gray-800 font-bold lg:text-3xl text-2xl">
                                        {item.title}
                                    </h3>
                                    <p className='font-semibold' data-aos="fade-right" data-aos-duration="5000">
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Features
