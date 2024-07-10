import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { FaRoadBridge } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { PiShovelFill } from "react-icons/pi";
import { IoIosRestaurant } from "react-icons/io";
import { FaHotel } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";

function Service() {
    const features = [
        {
            icon: <FaShoppingCart className='h-8 w-8'/>,
            title: "Ecommerce"
        },
        {
            icon: <FaGraduationCap className='h-8 w-8'/>,
            title: "Éducation"
        },
        {
            icon: <MdHealthAndSafety className='h-8 w-8'/>,
            title: "Santé"
        },
        {
            icon: <FaRoadBridge className='h-8 w-8' />,
            title: "Logistique"
        }, {
            icon: <FaBus className='h-8 w-8' />,
            title: "Transport"
        },
        {
            icon: <FaBuilding className='h-8 w-8' />,
            title: "Immobilier"
        },
        {
            icon: <PiShovelFill className='h-8 w-8' />,
            title: "BTP"
        },
        {
            icon: <IoIosRestaurant className='h-10 w-10'/>,
            title: "Restauration"
        }, {
            icon: <FaHotel className='h-8 w-8'/>,
            title: "Hôtellerie"
        },
        {
            icon: <FaTruck className='h-8 w-8'/>,
            title: "Distribution"
        },
        {
            icon: <VscOrganization className='h-8 w-8' />,
            title: "ONG"
        },
        {
            icon: <FaMoneyBill className='h-8 w-8'/>,
            title: "Finance"
        }
    ]
    return (
        <section id="service" className="py-20 bg-cover relative service-bg">
            <div className="lg:flex py-10">
                <div className="lg:w-1/2 p-4 pt-2" data-aos="fade-right">
                    <h1 className='font-semibold whitespace-pre-line text-xl text-white lg:ml-20 '>Domaine d'intervention ➖</h1>
                    <p className='font-extrabold whitespace-pre-line text-white lg:text-5xl text-3xl lg:ml-20 mt-4'>Digitalisation de services</p>
                </div>
                <div className="lg:w-1/2 p-4 pb-0" data-aos="fade-right">
                    <p className='text-xl text-white'>Nous vous accompagnons dans la conception, la réalisation et la <br /> transformation digitale de votre société</p>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="lg:mt-10 mt-4">
                    <ul className="lg:mt-6 mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            features.map((item, idx) => (
                                <li key={idx} data-aos="fade-up" data-aos-duration="3000" className='border lg:py-6 pl-0 lg:px-4 py-2 px-2 cursor-default bg-white flex items-center hover:bg-blue-950 hover:border-none text-blue-950 hover:text-white ml-2 mr-2'>
                                    <div className="w-20 h-20 bg-blue-950 border text-white rounded-full flex items-center justify-center mr-4 ml-2">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold lg:text-3xl text-xl">
                                        {item.title}
                                    </h4>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Service
