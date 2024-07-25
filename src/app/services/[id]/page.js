"use client"
import { useState, useEffect } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { IoIosArrowForward } from "react-icons/io";
import { useSearchParams } from 'next/navigation';
import loader from "@/assets/loader.png";
import Image from 'next/image';

function page() {
    const searchParams = useSearchParams();
    const index = searchParams.get('index');
    const [loading, setLoading] = useState(true);

    const [selectedVilleIndex, setSelectedVilleIndex] = useState(index ? parseInt(index) : 0);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        if (index !== null) {
            setSelectedVilleIndex(parseInt(index));
        }
    }, [index]);

    const handleReadMore = () => {
        setShowFullDescription(!showFullDescription);
    };

    const countWords = (text) => {
        return text.split(' ').filter(word => word.length > 0).length;
    };

    const Villes = [
        {
            titre: "Transformation digitale",
            description: `La transformation digitale est essentielle pour les entreprises qui cherchent à rester compétitives dans un marché en constante évolution. En effet, cette transformation permet de mieux répondre aux attentes des clients, d’améliorer l’efficacité opérationnelle et de développer de nouveaux produits et services.
Notre entreprise offre une gamme de solutions pour aider les entreprises à réussir leur transformation digitale. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et proposer des solutions sur mesure qui répondent à leurs objectifs.`
        },
        {
            titre: "Web et mobile",
            description: `Le développement web et mobile de qualité est essentiel pour fournir une expérience utilisateur optimale. Que ce soit pour la création d’un site web ou d’une application mobile, il est important de suivre des pratiques de développement pour garantir la qualité de votre produit final. 

Un développement de qualité nécessite une approche centrée sur l’utilisateur. Envisagez les besoins, les préférences et les comportements des utilisateurs pour créer une expérience utilisateur fluide, intuitive et agréable. Utilisez des technologies modernes pour garantir que votre application est sécurisée, rapide et facile à utiliser.

Le testing est une partie essentielle du développement de qualité. Il est important de tester régulièrement votre application pour identifier les bogues et les problèmes de performance. Utilisez des tests manuels et automatiques pour garantir la qualité de votre application.

Optimisez votre application pour des temps de chargement rapides et une expérience utilisateur fluide. Les utilisateurs attendent des applications web et mobiles rapides et réactives. Sécurisez votre application contre les attaques, les menaces et les vulnérabilités.

Il est également important de garder votre application à jour. Les applications web et mobiles sont en constante évolution. Assurez-vous que votre application est régulièrement mise à jour pour offrir de nouvelles fonctionnalités, corriger les bogues et améliorer l’expérience utilisateur.

Enfin, l’utilisation de pratiques de développement agiles permet un développement rapide et flexible tout en garantissant la qualité de votre application. En suivant ces pratiques, vous pouvez garantir la qualité de votre développement web et mobile, offrir une expérience utilisateur optimale et rester compétitif sur le marché.`
        },
        {
            titre: "Marketing digital",
            description: `Notre solution de marketing digital est conçue pour aider les entreprises à atteindre leur public cible en utilisant les dernières technologies et techniques de marketing en ligne. Nous aidons les entreprises à développer une stratégie de marketing digital sur mesure, en fonction de leurs objectifs, de leur public cible et de leur budget.

    ✔ L'analyse et la compréhension du public cible pour identifier les canaux de marketing les plus efficaces
    ✔ La conception et le développement de sites web et d'applications mobiles pour offrir une expérience utilisateur optimale
    ✔ L'optimisation des moteurs de recherche (SEO) pour améliorer la visibilité du site web dans les résultats de recherche
    ✔ La publicité en ligne (SEM) pour augmenter le trafic vers le site web et générer des leads
    ✔ Le marketing par e-mail pour atteindre les clients existants et les prospects par e-mail
    ✔ Le marketing de contenu pour fournir des informations utiles et intéressantes aux clients et prospects
    ✔ Le marketing sur les réseaux sociaux pour atteindre les clients et prospects via les réseaux sociaux populaires tels que Facebook, Twitter, LinkedIn, Instagram, etc.

Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs objectifs de marketing et développer des solutions sur mesure qui répondent à ces objectifs. Nous sommes experts dans l’utilisation des dernières technologies et techniques de marketing en ligne, et nous sommes en mesure de fournir des résultats tangibles à nos clients.
En somme, notre solution de marketing digital est conçue pour aider les entreprises à atteindre leur public cible de manière efficace et rentable. Nous proposons une gamme complète de services pour aider les entreprises à développer une stratégie de marketing digital sur mesure et à atteindre leurs objectifs de marketing.`
        }
    ];

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
            <section className='bg-beige bg-cover'>
                <div className='p-20 bg-contact bg-cover bg-opacity-50 pt-44'>
                    <h1 className='text-center lg:text-6xl text-4xl text-white font-bold'>{Villes[selectedVilleIndex].titre}</h1>
                </div>
                <div class="grid lg:grid-cols-3 lg:gap-4 lg:px-14 lg:py-8 mt-8 pb-8">
                    <div class="border-t-[6px] border-blue-600 lg:m-6 m-4 lg:mx-10 w-[380px] lg:w-[300px]">
                        <h1 className='mt-4 text-2xl font-bold text-blue-900'>Nos services</h1>
                        <div className='mt-6 w-full'>
                            {Villes.map((ville, index) => (
                                <div
                                    className={`mb-1 flex justify-between group bg-white text-lg text-blue-900 font-semibold cursor-pointer p-4 ${selectedVilleIndex === index ? 'bg-blue-900 text-white' : 'hover:text-white hover:bg-blue-900'
                                        }`}
                                    key={index}
                                    onClick={(e) => {
                                        setSelectedVilleIndex(index);
                                        setShowFullDescription(false);
                                    }}
                                >
                                    {ville.titre}
                                    <IoIosArrowForward className="w-5 h-5 ml-2 mt-1.5 hidden group-hover:block"/>
                                    {selectedVilleIndex === index && <IoIosArrowForward className="w-5 h-5 ml-2 mt-1.5 group-hover:hidden"/>}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="col-span-2 lg:m-2 m-4 lg:pl-10" id='contenu'>
                        <h1 className='text-4xl text-blue-900 font-bold'>Digital pour tous et partout</h1>
                        <div>
                            {selectedVilleIndex !== null && (
                                <div className='mt-6'>
                                    <div className='text-black'>
                                        <pre className='whitespace-pre-wrap text-normal font-sans text-blue-950' data-aos="fade-right">
                                            {Villes[selectedVilleIndex].description}
                                        </pre>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page
