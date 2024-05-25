"use server";

import Image from "next/image";
import bg from '../../../public/bg.webp'
import Navbar from "@/app/components/navbar";
import {MdFacebook, MdOutlineShoppingBag, MdLocationPin} from "react-icons/md";
import {BiLogoInstagramAlt} from "react-icons/bi";
import {FC} from "react";
import CatItem from "@/app/components/CatItem";

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

export default async function Home() {
    return (
        <>
            <header className="flex flex-col items-center justify-between px-10 md:px-24"
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg.src})`}}>
                <Navbar/>
                <div className="flex flex-row items-center justify-between pb-10 gap-24 backdrop-blur-sm w-full">
                    <div className="flex flex-col items-center md:items-start gap-5 max-w-5xl">
                        <h1 className="text-green text-5xl font-bold">Seu amigo peludo te espera</h1>
                        <h2 className="text-green text-md md:text-xl text-white">
                            Junte-se a nós para salvar vidas, um gato de cada vez. Clique abaixo para adotar seu novo
                            amigo peludo e faça a diferença hoje na vida dos gatos da Lagoa do Taquaral em Campinas, São
                            Paulo. Caso não possa ajudar com adoção, considere fazer uma doação com o valor que for
                            confortável.
                        </h2>
                        <a href="/adoption"
                           className="mt-6 rounded-md bg-green px-3.5 py-2.5 text-lg font-bold text-blacken shadow-lg shadow-green/30 hover:shadow-xl hover:shadow-green/30">
                            Adotar um gato
                        </a>
                    </div>
                    <Image className='hidden lg:block'
                           src="/logo_gatos_lagoa.png"
                           alt="Vercel Logo"
                           width={400}
                           height={400}
                           priority/>
                </div>
            </header>
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
                    <div className="flex align-center justify-center">
                        <a href="/adoption" className="mt-6 text-lg font-bold text-greendark">Ver mais</a>
                    </div>
                </div>
                <div id='about' className="flex flex-col align-start">
                    <h3 className='text-black text-4xl font-bold'>Sobre nós</h3>
                    <p className='text-black text-md mt-5'>
                        A organização não governamental Gatos da Lagoa localiza-se na cidade de Campinas-SP.
                        Prezando pelo bem-estar animal, a O.N.G. dedica-se a cuidar dos animais que vivem no espaço
                        da Lagoa do Taquaral, bem como encontrar famílias para os animais que estiverem aptos para a
                        adoção.
                        Com foco no resgate, proteção, castração, vacinação, alimentação e doação de mais de 200 gatos
                        que vivem nas matas da Lagoa Taquaral, a instituição, que conquistou o título de ONG em 2012, já
                        existia informalmente há 20 anos. Contamos com o apoio de uma equipe de voluntários e dos
                        Amigos da Lagoa para cuidar e encontrar lares para esses felinos que nasceram nas matas ou
                        foram abandonados.
                    </p>
                </div>
                <div id='help' className="flex flex-col align-start">
                    <h3 className='text-black text-4xl font-bold'>Como ajudar?</h3>
                    <p className='text-black text-md mt-5'>
                        Chave <span className='text-greendark font-semibold'>PIX</span> (CNPJ): <span
                        className='text-greendark font-semibold'>21.657.568/0001-50</span></p>
                    <p className='text-black text-md mt-5'>
                        A ajuda financeira desempenha um papel crucial na capacidade de uma organização não
                        governamental. Com recursos adequados, a ONG pode ampliar suas operações de resgate, cuidados
                        veterinários e reabilitação para os animais que
                        habitam na região. Esses fundos também viabilizam a busca ativa por lares amorosos e adequados
                        para os animais resgatados, garantindo que eles recebam o cuidado e o carinho que merecem. Em
                        suma, a ajuda financeira é essencial para fortalecer o trabalho da ONG e garantir que ela possa
                        continuar sua importante missão de proteger e encontrar lares para os animais da Lagoa do
                        Taquaral.
                    </p>
                </div>
            </main>
        </>
    );
}
