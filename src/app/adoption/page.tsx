"use server";

import Image from "next/image";
import bg from '../../public/bg.webp'
import Navbar from "@/app/components/navbar";
import {MdFacebook, MdOutlineShoppingBag, MdLocationPin} from "react-icons/md";
import {BiLogoInstagramAlt} from "react-icons/bi";
import {FC} from "react";
import CatItem from "@/app/components/CatItem";
import Footer from "@/app/components/Footer";

const cats = [
    {
        name: 'Docinho',
        sex: 'Femea',
        age: 'Adolescente',
        size: 'Pequeno',
        img: 'https://www.zooplus.pt/magazine/wp-content/uploads/2021/07/psicologia-felina_1.jpeg'
    },
    {
        name: 'Pimentinha',
        sex: 'Femea',
        age: 'Adulto',
        size: 'Médio',
        img: 'https://img.nsctotal.com.br/wp-content/uploads/2023/11/Gato-cacando.jpg'
    },
    {
        name: 'Chico',
        sex: 'Macho',
        age: 'Adulto',
        size: 'Grande',
        img: 'https://img.odcdn.com.br/wp-content/uploads/2023/05/shutterstock_1771294973-1.jpg'
    },
    {
        name: 'Simba',
        sex: 'Macho',
        age: 'Adulto',
        size: 'Grande',
        img: 'https://blog-static.petlove.com.br/wp-content/uploads/2021/09/Gato-personalidade-Petlove.jpg'
    }
]

export default async function Adoption() {
    return (
        <>
            <div className='bg-blacken px-10 md:px-24'>
                <Navbar/></div>
            <main className="flex flex-col px-10 md:px-24 py-16 gap-16">
                <div id='adoption' className="flex flex-col align-start">
                    <div className="flex align-start flex-col">
                        <h3 className='text-black text-4xl font-bold'>Adoção</h3>
                        <p className='text-black text-md mt-5'>Encontre seu companheiro felino ideal, adotando um gato
                            da lagoa. Além de encontrar um amigo peludo para alegrar sua vida, você estará dando a um
                            animalzinho a chance de um lar amoroso e seguro.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 mt-10 adoption-grid ">
                        {
                            cats.map(cat => <CatItem key={cat.name} {...cat}/>)
                        }
                    </div>
                </div>
            </main>
        </>
    );
}
