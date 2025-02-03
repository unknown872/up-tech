"use client"
import { useEffect, useState } from "react";;
import 'aos/dist/aos.css';
import { MdArrowOutward } from "react-icons/md";
import Swal from "sweetalert2";
import { GrStatusGood } from "react-icons/gr";
import loader from "@/assets/loader.png";

function Contact() {
    const [loading, setLoading] = useState(true);
    const [responseMessage, setResponseMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePhone = (phone) => {
        const re = /^[0-9]{9,15}$/; // ajuster en fonction du format souhaité
        return re.test(phone);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Validation simple côté client
        if (!validateEmail(formData.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Email invalide',
                text: 'Veuillez entrer un email valide',
                showConfirmButton: true
            });
            setIsLoading(false);
            return;
        }

        if (!validatePhone(formData.tel)) {
            Swal.fire({
                icon: 'error',
                title: 'Numéro de téléphone invalide',
                text: 'Veuillez entrer un numéro de téléphone valide',
                showConfirmButton: true
            });
            setIsLoading(false);
            return;
        }

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
                    title: 'Votre message a été bien reçu!',
                    text: 'Nous reviendrons vers vous dans les plus brefs délais',
                    showConfirmButton: true
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
                    title: `Erreur: ${result.error}`,
                    text: "Votre message n'a pas pu être transmis",
                    showConfirmButton: true
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'An unexpected error occurred.',
                text: error.message,
                showConfirmButton: true
            });
        } finally {
            setIsLoading(false);
        }
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
            contact: "uptechnologiecorporation@gmail.com",
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
        <section id="contact" className="relative lg:py-28 py-8 bg-slate-100">
            <div className="lg:flex lg:ml-10 lg:mr-10 ml-4 mr-4 bg-white lg:p-20 p-4 gap-x-14 rounded-xl">
                <div className="lg:w-1/2">
                    <div data-aos="fade-right" data-aos-duration="300" className='lg:mt-0 mt-8'>
                        <h2 className="lg:text-4xl text-4xl text-blue-950 font-bold md:text-4xl animate-slidein">
                            Restez-connecté
                        </h2>
                        <p className='mt-4 font-medium text-lg text-gray-600'>Bénéficiez d'un accompagnement personnalisé pour optimiser vos processus et mener à bien vos projets digitaux, grâce à notre équipe de consultants experts.</p>
                    </div>
                    <div>
                        <ul className="mt-12 flex flex-col gap-x-12 gap-y-6 lg:gap-x-24">
                            {
                                contactMethods.map((item, idx) => (
                                    <li key={idx} >
                                        <div className="mt-3 flex items-center gap-x-3">
                                            <div data-aos="fade-down" data-aos-duration="3000" className="flex-none text-slate-50 bg-amber-500 lg:p-4 p-2 rounded-md">
                                                {item.icon}
                                            </div>
                                            <div className='lg:p-0 p-2' data-aos="fade-right" data-aos-duration="400">
                                                <h4 className="lg:text-lg text-base text-gray-500 font-bold ">{item.title}</h4>
                                                <p className='mt-2 lg:text-2xl text-sm font-bold whitespace-normal'>{item.contact}</p>
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
                        <h2 className="lg:text-4xl text-blue-950 font-bold md:text-4xl text-4xl animate-slidein">
                            Contactez-nous
                        </h2>
                        <p className='mt-4 font-medium text-lg text-gray-600'>Prêt à passer à l'action ? Remplissez ce formulaire pour obtenir une réponse dans les plus brefs délais.</p>
                    </div>
                    <div
                        className="mt-12 max-w-xl"
                        data-aos="fade-right"
                        data-aos-duration="500">
                        <form
                            className="space-y-5"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                                <div>
                                    <label className="font-bold text-lg" htmlFor="firstname">
                                        Prenom
                                    </label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-lg" htmlFor="lastname">
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        name="lastname" 
                                        id="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="font-bold text-lg" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-bold text-lg" htmlFor="tel">
                                    Telephone
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    value={formData.tel}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-bold text-lg" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    required
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg">
                                </textarea>
                            </div>
                            <button
                                type="submit"
                                aria-label="Envoyer le formulaire de contact"
                                className="flex px-10 py-6 text-white text-xl font-medium  bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-lg duration-150 shadow-3xl"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                {isLoading ? (
                                    "En cours d'envoie..."
                                )
                                    :
                                    <div className="flex">
                                        <span>Envoyer</span>
                                        <GrStatusGood className='h-7 w-7 ml-2' />
                                    </div>
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
