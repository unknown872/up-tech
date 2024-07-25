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
            titre: "BTP",
            description: `Notre solution de gestion pour le secteur du BTP est conçue pour aider les entreprises à gérer leurs projets de construction de manière efficace et productive. Nous offrons une plateforme en ligne facile à utiliser qui permet aux entreprises de suivre tous les aspects de leurs projets de construction, de la planification à la livraison finale.

Notre solution permet aux entreprises de gérer efficacement les ressources, y compris les matériaux, l’équipement et les travailleurs, et de suivre les coûts et les budgets pour chaque projet. Nous offrons également des fonctionnalités avancées pour la gestion des documents, la collaboration en temps réel et la communication avec les clients et les partenaires.

Notre solution est facilement personnalisable pour répondre aux besoins spécifiques de chaque entreprise du BTP. Nous offrons également une intégration facile avec d’autres outils et plateformes, y compris les logiciels de comptabilité et de facturation.

Nous sommes fiers de notre engagement envers la satisfaction de nos clients et nous nous efforçons continuellement de fournir une solution facile à utiliser et personnalisable pour répondre aux besoins spécifiques de chaque entreprise du BTP. Nous sommes également déterminés à protéger la sécurité et la confidentialité des informations de nos clients, c’est pourquoi nous avons mis en place des mesures de sécurité avancées pour garantir la protection des données de nos clients.

Notre solution de gestion pour le secteur du BTP peut aider les entreprises à améliorer leur productivité, à réduire les coûts et à maximiser les résultats de leurs projets de construction. Nous sommes déterminés à continuer à développer notre plateforme pour répondre aux besoins en constante évolution des entreprises du BTP.`
        },
        {
            titre: "Gestion Immobilière",
            description: `Notre solution de gestion immobilière est conçue pour aider les entreprises et les particuliers à gérer efficacement leurs biens immobiliers. Nous offrons une plateforme en ligne intuitive et facile à utiliser qui permet aux utilisateurs de gérer tous les aspects de la gestion immobilière, y compris la location, l’entretien et la maintenance.

Notre solution offre des fonctionnalités avancées pour la gestion des contrats de location, la gestion des paiements de loyers, la gestion des réparations et des maintenances, et la gestion des inspections. Nous offrons également des outils de suivi de la performance des biens immobiliers pour aider les propriétaires à maximiser leur retour sur investissement.

Notre solution est facilement personnalisable pour répondre aux besoins spécifiques de chaque entreprise ou particulier. Nous offrons également une intégration facile avec d’autres outils et plateformes, y compris les logiciels de comptabilité et de facturation.

Nous sommes fiers de notre engagement envers la satisfaction de nos clients et nous nous efforçons continuellement de fournir une solution facile à utiliser et personnalisable pour répondre aux besoins spécifiques de chaque utilisateur de notre solution de gestion immobilière. Nous sommes également déterminés à protéger la sécurité et la confidentialité des informations de nos clients, c’est pourquoi nous avons mis en place des mesures de sécurité avancées pour garantir la protection des données de nos clients.

Notre solution de gestion immobilière peut aider les entreprises et les particuliers à gérer efficacement leurs biens immobiliers, à maximiser leur retour sur investissement et à réduire les coûts associés à la gestion immobilière. Nous sommes déterminés à continuer à développer notre plateforme pour répondre aux besoins en constante évolution de nos utilisateurs.`
        },
        {
            titre: "Hopital",
            description: `Notre solution de gestion des cliniques est conçue pour aider les cliniques à gérer efficacement toutes les opérations quotidiennes liées à la gestion de leur établissement. Nous offrons une suite complète de fonctionnalités de gestion de la clinique, y compris la gestion des rendez-vous, la gestion des dossiers médicaux, la gestion des factures et des paiements, la gestion des stocks, la gestion du personnel et bien plus encore.

Notre solution de gestion des cliniques est facile à utiliser et peut être personnalisée pour répondre aux besoins spécifiques de chaque clinique. Nous offrons une interface intuitive et conviviale qui permet aux utilisateurs de naviguer facilement dans le système, de visualiser les informations et les rapports pertinents, et de prendre des décisions éclairées en temps réel.

Notre solution de gestion des cliniques est également très flexible, ce qui permet aux cliniques de personnaliser les fonctionnalités en fonction de leurs besoins spécifiques. Les cliniques peuvent choisir d’activer ou de désactiver certaines fonctionnalités en fonction de leurs besoins et de leur budget, ce qui leur permet de maximiser leur efficacité tout en réduisant les coûts.

Enfin, notre solution de gestion des cliniques est hautement sécurisée, avec des protocoles de sécurité avancés pour garantir la confidentialité et la sécurité des données des patients et des cliniques. Les données sont stockées sur des serveurs sécurisés et cryptées pour garantir la sécurité et la confidentialité des informations.

En somme, notre solution de gestion des cliniques est conçue pour aider les cliniques à gérer efficacement toutes les opérations quotidiennes liées à la gestion de leur établissement. Nous offrons une gamme complète de fonctionnalités pour aider les cliniques à gérer les rendez-vous, les dossiers médicaux, les factures et les paiements, les stocks, le personnel, et bien plus encore. Avec notre solution de gestion des cliniques, les cliniques peuvent améliorer leur efficacité, réduire les coûts et offrir des soins de qualité supérieure à leurs patients.`
        },
        {
            titre: "Location de voiture",
            description: `Notre solution de gestion de location et vente de voitures est un logiciel conçu pour aider les entreprises de location de voitures et les concessionnaires automobiles à gérer efficacement leurs opérations quotidiennes. Nous offrons une gamme complète de fonctionnalités de gestion de flotte, de vente de voitures et de gestion des services, y compris la gestion des stocks, la gestion des contrats de location, la gestion des ventes, la gestion des réservations, la gestion des services et bien plus encore.

Notre solution de gestion de location et vente de voitures est facile à utiliser et peut être personnalisée pour répondre aux besoins spécifiques de chaque entreprise. Nous offrons une interface intuitive et conviviale qui permet aux utilisateurs de naviguer facilement dans le système, de visualiser les informations et les rapports pertinents, et de prendre des décisions éclairées en temps réel.

Notre solution de gestion de location et vente de voitures est également très flexible, ce qui permet aux entreprises de personnaliser les fonctionnalités en fonction de leurs besoins spécifiques. Les entreprises peuvent choisir d’activer ou de désactiver certaines fonctionnalités en fonction de leurs besoins et de leur budget, ce qui leur permet de maximiser leur efficacité tout en réduisant les coûts.

Enfin, notre solution de gestion de location et vente de voitures est hautement sécurisée, avec des protocoles de sécurité avancés pour garantir la confidentialité et la sécurité des données des clients et des entreprises. Les données sont stockées sur des serveurs sécurisés et cryptées pour garantir la sécurité et la confidentialité des informations.

En somme, notre solution de gestion de location et vente de voitures est conçue pour aider les entreprises de location de voitures et les concessionnaires automobiles à gérer efficacement leurs opérations quotidiennes. Nous offrons une gamme complète de fonctionnalités pour aider les entreprises à gérer les stocks, les contrats de location, les ventes, les réservations, les services, et bien plus encore. Avec notre solution de gestion de location et vente de voitures, les entreprises peuvent améliorer leur efficacité, réduire les coûts et offrir un service de qualité supérieure à leurs clients.`
        },
        {
            titre: "Etablissement scolaire",
            description: `Notre solution de gestion d’école est une plateforme numérique complète qui permet aux écoles de gérer efficacement leur système éducatif, de suivre la progression des élèves et de simplifier la gestion administrative. Nous avons pour objectif d’optimiser le processus de gestion scolaire, d’améliorer la qualité de l’éducation et de faciliter la communication entre les parties prenantes.

Notre plateforme offre une gamme de services de gestion scolaire, tels que la gestion des inscriptions, la gestion des emplois du temps, la gestion des notes et évaluations, la communication avec les parents et la gestion de la comptabilité de l’école. Nous travaillons avec des partenaires éducatifs pour offrir des services de qualité supérieure et personnalisés.

Notre solution est conçue pour être facile à utiliser et personnalisable pour répondre aux besoins de nos clients. Les utilisateurs peuvent accéder à la plateforme à partir de leur ordinateur ou de leur appareil mobile et gérer les opérations en temps réel.

Nous mettons l’accent sur la sécurité et la confidentialité des données. Notre plateforme utilise des protocoles de sécurité avancés pour protéger les informations de nos clients et nous respectons les normes réglementaires en vigueur.

Nous croyons que notre solution de gestion d’école peut aider à résoudre certains des défis éducatifs actuels en améliorant la qualité de l’éducation, en simplifiant la gestion administrative et en améliorant la communication entre les différents acteurs du système éducatif. Nous sommes fiers de notre engagement envers l’innovation, la sécurité et la satisfaction de nos clients, et nous sommes déterminés à continuer à améliorer notre plateforme pour répondre aux besoins en constante évolution des écoles.`
        },
        {
            titre: "Gestion pharmacie",
            description: `Notre solution de gestion de pharmacie est un logiciel conçu pour aider les pharmacies à gérer efficacement toutes les opérations quotidiennes liées à la gestion de leur établissement. Nous offrons une suite complète de fonctionnalités de gestion de pharmacie, y compris la gestion des stocks, la gestion des ventes, la gestion des commandes fournisseurs, la gestion des recettes et bien plus encore.

Notre solution de gestion de pharmacie est facile à utiliser et peut être personnalisée pour répondre aux besoins spécifiques de chaque pharmacie. Nous offrons une interface intuitive et conviviale qui permet aux utilisateurs de naviguer facilement dans le système, de visualiser les informations et les rapports pertinents, et de prendre des décisions éclairées en temps réel.

Notre solution de gestion de pharmacie est également très flexible, ce qui permet aux pharmacies de personnaliser les fonctionnalités en fonction de leurs besoins spécifiques. Les pharmacies peuvent choisir d’activer ou de désactiver certaines fonctionnalités en fonction de leurs besoins et de leur budget, ce qui leur permet de maximiser leur efficacité tout en réduisant les coûts.

Enfin, notre solution de gestion de pharmacie est hautement sécurisée, avec des protocoles de sécurité avancés pour garantir la confidentialité et la sécurité des données des patients et des pharmacies. Les données sont stockées sur des serveurs sécurisés et cryptées pour garantir la sécurité et la confidentialité des informations.

En somme, notre solution de gestion de pharmacie est conçue pour aider les pharmacies à gérer efficacement toutes les opérations quotidiennes liées à la gestion de leur établissement. Nous offrons une gamme complète de fonctionnalités pour aider les pharmacies à gérer les stocks, les ventes, les commandes fournisseurs, les recettes, et bien plus encore. Avec notre solution de gestion de pharmacie, les pharmacies peuvent améliorer leur efficacité, réduire les coûts et offrir un service de qualité supérieure à leurs patients.`
        },
        {
            titre: "Gestion hotel",
            description: `Notre solution de gestion des hôtels est conçue pour aider les hôtels à gérer toutes les opérations quotidiennes liées à la gestion de leur établissement. Nous offrons une suite complète de fonctionnalités de gestion de l’hôtel, y compris la gestion des réservations, la gestion des chambres, la gestion des tarifs, la gestion des stocks, la gestion des factures et des paiements, la gestion des clients, et bien plus encore.

Notre solution de gestion des hôtels est conçue pour être facile à utiliser et peut être personnalisée pour répondre aux besoins spécifiques de chaque hôtel. Nous offrons une interface intuitive et conviviale qui permet aux utilisateurs de naviguer facilement dans le système, de visualiser les informations et les rapports pertinents, et de prendre des décisions éclairées en temps réel.

Notre solution de gestion des hôtels est également très flexible, ce qui permet aux hôtels de personnaliser les fonctionnalités en fonction de leurs besoins spécifiques. Les hôtels peuvent choisir d’activer ou de désactiver certaines fonctionnalités en fonction de leurs besoins et de leur budget, ce qui leur permet de maximiser leur efficacité tout en réduisant les coûts.

Enfin, notre solution de gestion des hôtels est hautement sécurisée, avec des protocoles de sécurité avancés pour garantir la confidentialité et la sécurité des données des clients et des hôtels. Les données sont stockées sur des serveurs sécurisés et cryptées pour garantir la sécurité et la confidentialité des informations.

En somme, notre solution de gestion des hôtels est conçue pour aider les hôtels à gérer efficacement toutes les opérations quotidiennes liées à la gestion de leur établissement. Nous offrons une gamme complète de fonctionnalités pour aider les hôtels à gérer les réservations, les chambres, les tarifs, les stocks, les factures et les paiements, les clients, et bien plus encore. Avec notre solution de gestion des hôtels, les hôtels peuvent améliorer leur efficacité, réduire les coûts et offrir une expérience client supérieure.`
        },
        {
            titre: "Logistique",
            description: `Notre solution logistique est une plateforme numérique complète qui permet aux entreprises de gérer efficacement leurs opérations logistiques. Nous avons pour objectif d’optimiser le processus de gestion des stocks, d’améliorer la productivité et d’offrir une expérience utilisateur transparente.

Notre plateforme offre une gamme de services logistiques, tels que la gestion des entrepôts, la planification des itinéraires, le suivi des expéditions et la gestion des retours. Nous travaillons avec des partenaires logistiques pour offrir des services de qualité supérieure et garantir une livraison rapide et précise des marchandises.

Notre solution est conçue pour être facile à utiliser et personnalisable pour répondre aux besoins de nos clients. Les utilisateurs peuvent accéder à la plateforme à partir de leur ordinateur ou de leur appareil mobile et gérer leurs opérations logistiques en temps réel.

Nous mettons l’accent sur la sécurité et la confidentialité des données. Notre plateforme utilise des protocoles de sécurité avancés pour protéger les informations de nos clients et nous respectons les normes réglementaires en vigueur.

Nous croyons que notre solution logistique peut aider à résoudre certains des défis logistiques actuels en améliorant la précision et la rapidité de la livraison des marchandises. Nous sommes fiers de notre engagement envers l’innovation, la sécurité et la satisfaction de nos clients, et nous sommes déterminés à continuer à améliorer notre plateforme pour répondre aux besoins en constante évolution du marché logistique.`
        },
        {
            titre: "Gestion administrative",
            description: `Pas encore de contenu.`
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
                                    className={`mb-1 flex justify-between group font-semibold cursor-pointer p-4 ${selectedVilleIndex === index ? 'bg-blue-900 text-white' : 'bg-white text-lg text-blue-900 hover:text-white hover:bg-blue-900'
                                        }`}
                                    key={index}
                                    onClick={(e) => {
                                        setSelectedVilleIndex(index);
                                        setShowFullDescription(false);
                                    }}
                                >
                                    {ville.titre}
                                    <IoIosArrowForward className="w-5 h-5 ml-2 mt-1.5 hidden group-hover:block" />
                                    {selectedVilleIndex === index && <IoIosArrowForward className="w-5 h-5 ml-2 mt-1.5 group-hover:hidden" />}
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
