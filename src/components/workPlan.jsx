import React from 'react';
import { AiOutlineLine } from "react-icons/ai";

function WorkPlan() {
    const features = [
        {
            id: 1,
            title: "Comprehension du besoin"
        },
        {
            id: 2,
            title: "UX/UI Design"
        },
        {
            id: 3,
            title: "Développement"
        },
        {
            id: 4,
            title: "Retours clients"
        },
        {
            id: 5,
            title: "Deploiement"
        },
        {
            id: 6,
            title: "Maintenance"
        }
    ]
    return (
        <section className='work-plan bg-cover relative py-24'>
            <div className='justify-center items-center text-center'>
                <div className='flex justify-center'>
                    <AiOutlineLine className='h-6 w-6 mt-1' data-aos="fade-down"/>
                    <h2 className='text-xl font-medium text-blue-950 px-2' data-aos="fade-up">Process</h2>
                    <AiOutlineLine className='h-6 w-6 mt-1' data-aos="fade-down"/>
                </div>
                <p className='text-4xl font-bold text-blue-950 mt-2' data-aos="fade-right" data-aos-duration="2000">Notre méthodologie de travail</p>
                <p className='text-xl font-medium mt-2' data-aos="fade-right" data-aos-duration="2000">Réussir votre transformation et améliorer vos performances grâce à des processus métier maîtrisés et digitalisés</p>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="mt-12">
                    <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 hover:text-slate-400">
                        {
                            features.map((item, idx) => (
                                <li  data-aos="fade-up" data-aos-duration="3000" className='border py-9 cursor-default pl-0 px-2.5 bg-white items-center border-b-4 text-6xl border-b-blue-950 text-blue-200  hover:border-b-blue-500  hover:text-blue-500 hover:text-8xl'>
                                    <div className="mr-4 ml-5">
                                        {item.id}
                                    </div>
                                    <h3 className="text-blue-950 font-bold text-2xl ml-4">
                                        {item.title}
                                    </h3>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WorkPlan
