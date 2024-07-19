import React from 'react'
import { GiForklift } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { GiStethoscope } from "react-icons/gi";
import { GiCarKey } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { GiMineTruck } from "react-icons/gi";
import { FaFolderTree } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";

function Product() {
    const posts = [
        {
            id: 1,
            title: "BTP",
            img: "https://img.freepik.com/photos-gratuite/afro-americaine-chaise-prenant-notes-pres-casque-securite-modele-maison-table_23-2148039937.jpg?t=st=1720305395~exp=1720308995~hmac=729ecf3fbf18caf9ff6a4782b5e2dbe4d8659dec2637a1521f2c360dfb03be0e&w=900",
            icon: <GiMineTruck className='h-24 w-24 border rounded-full p-3' />,
            href: "javascript:void(0)"
        },
        {
            id: 2,
            title: "Gestion immobilière",
            img: "https://img.freepik.com/photos-gratuite/haute-vue-mains-articles-papeterie_23-2148301748.jpg?t=st=1720304927~exp=1720308527~hmac=ba6f31f88abb60c172e3495efd3366de688d9fac4ba144d844fbbc0ee9529c3f&w=900",
            icon: <FaHome className='h-24 w-24 border rounded-full p-4' />,
            href: "javascript:void(0)"
        },
        {
            id: 3,
            title: "Hopital",
            desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
            img: "https://img.freepik.com/photos-gratuite/medecin-dans-cabinet-ophtalmologiste_23-2150917689.jpg?uid=R37266008&ga=GA1.1.1324219488.1719842558&semt=ais_user",
            icon: <GiStethoscope className='h-24 w-24 border rounded-full pl-4' />,
            href: "javascript:void(0)"
        },
        {
            id: 4,
            title: "Location voiture",
            desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
            img: "https://img.freepik.com/photos-gratuite/deux-femmes-noires-elegantes-dans-salon-automobile_1157-21407.jpg?t=st=1720304745~exp=1720308345~hmac=f6ce59be43519da5f97beb5e28954131d66a6f91497a2a092192066f73754dca&w=900",
            icon: <GiCarKey className='h-24 w-24 border rounded-full pl-4' />,
            href: "javascript:void(0)"
        },
        {
            id: 5,
            title: "Établissement scolaire",
            desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
            img: "https://img.freepik.com/photos-gratuite/groupe-enfants-africains-pretant-attention-classe_23-2148892518.jpg?t=st=1720305860~exp=1720309460~hmac=2b0c694c6f32c2b7f3091e1704e3c74c069b42a64d8822394a8cfe4e6295f93b&w=900",
            icon: <GiGraduateCap className='h-24 w-24 border rounded-full p-4' />,
            href: "javascript:void(0)"
        },
        {
            id: 6,
            title: "Gestion pharmacie",
            desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
            img: "https://img.freepik.com/photos-gratuite/pharmacien-afro-americain-travaillant-pharmacie-pharmacie-hopital-soins-sante-africains_627829-3390.jpg?t=st=1720306074~exp=1720309674~hmac=92a7758475e23cf925b406de8e8c9778339ad474a53aa7f21a079c09ae294b93&w=900",
            icon: <MdHealthAndSafety className='h-24 w-24 border rounded-full p-4' />,
            href: "javascript:void(0)"
        },
        {
            id: 7,
            title: "Gestion Hotel",
            desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
            img: "https://img.freepik.com/photos-gratuite/piscine_74190-2109.jpg?t=st=1720313004~exp=1720316604~hmac=51c8eacf6513a18e551db51b6fd94d4c3b9ac0fb3d9804bc3ef174d058881d36&w=900",
            icon: <FaHotel className='h-24 w-24 border rounded-full p-6' />,
            href: "javascript:void(0)"
        },
        {
            id: 8,
            title: "Logistique",
            desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
            img: "https://img.freepik.com/photos-gratuite/logistique-transport-porte-conteneurs-avion-cargo-pont-roulant-travail-dans-chantier-naval-au-lever-du-soleil-logistique-import-export-transport-contexte-industrie-ai-generative_123827-24177.jpg?t=st=1720314305~exp=1720317905~hmac=ec4178996d948abe7be5102b59af4a31a34bb9de43ff6875419f0b9d1c350c6f&w=900",
            icon: <GiForklift className='h-24 w-24 border rounded-full pl-5' />,
            href: "javascript:void(0)"
        },
        {
            id: 9,
            title: "Gestion administrative",
            desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
            img: "https://img.freepik.com/photos-gratuite/homme-affaires-graphique-ordinateur-portable_23-2147626527.jpg?t=st=1721412154~exp=1721415754~hmac=4029ec968b2b5dbd1cf34ef5f751793e00136c8cb3a1294591713220e5d281c2&w=900",
            icon: <MdComputer className='h-24 w-24 border rounded-full p-4' />,
            href: "javascript:void(0)"
        }
    ]

    return (
        <section className="mx-auto px-4 md:px-8 py-14 bg-beige bg-cover" id="product">
            <div className="lg:flex py-4">
                <div className="lg:w-1/2" data-aos="fade-right">
                    <h1 className='font-semibold text-xl text-blue-950 lg:ml-20'>Nos produits</h1>
                    <p className='font-extrabold text-blue-950 lg:text-4xl text-3xl lg:ml-20 lg:mt-0 mt-4'>Une multitude de solutions innovantes</p>
                </div>
                <div className="lg:w-1/2" data-aos="fade-right">
                    <p className='text-xl text-blue-950 font-medium lg:mt-0 mt-4'>Nous concevons les solutions qui vous permettront de vous démarquer et d’être en phase avec les attentes d’un monde moderne.</p>
                </div>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 gap">
                {
                    posts.map((items, key) => (
                        <article data-aos="zoom-in-down" data-aos-duration="1000" className="max-w-md mx-auto mt-4 group shadow-lg border rounded-md duration-300 hover:shadow-xl hover:shadow-blue-500 bg-white" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title} className="w-full h-62 rounded-t-md" />
                                <div className="relative flex justify-center items-center mt-2 pt-3 ml-4">
                                    <div className="flex-none" data-aos="zoom-out" data-aos-duration="3000">
                                        {items.icon}
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3 items-center justify-center flex">
                                    <h3 className="text-2xl text-blue-900 font-bold">
                                        {items.title}
                                    </h3>
                                </div>
                                <div className="ml-4 mr-2 mb-3 items-center justify-center flex  hidden group-hover:block">
                                    <p className='text-center p-4 pt-1'>
                                        {items.desc}
                                    </p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default Product
