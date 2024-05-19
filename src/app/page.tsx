"use server";

import Image from "next/image";
import bg from '../../public/bg.webp'
import Navbar from "@/app/components/navbar";
import { MdFacebook, MdOutlineShoppingBag, MdLocationPin, MdLocalPhone } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";

export default async function Home() {
    return (
        <>
            <header className="flex flex-col items-center justify-between px-24"
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg.src})`}}>
                <Navbar/>
                <div className="flex flex-row items-center justify-between pb-10 backdrop-blur-sm">
                    <div className="flex flex-col items-start gap-5">
                        <h1 className="text-green text-5xl font-bold">Lorem Ipsum Dolor</h1>
                        <h2 className="text-green text-xl text-white">Lorem ipsum dolor sit amet consectetur. Lorem amet
                            curabitur ut egestas porttitor est mattis scelerisque. Donec adipiscing ipsum fames integer
                            faucibus erat ultricies egestas. Viverra libero senectus potenti est eget. Eleifend
                            condimentum massa nibh in facilisi bibendum nunc purus mauris.</h2>
                        <a href="#"
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
            <main className="flex flex-col px-24 py-16 gap-16">
                <div id='adoption' className="flex flex-col align-start">
                    <div className="flex align-start flex-col">
                        <h3 className='text-black text-4xl font-bold'>Adoção</h3>
                        <p className='text-black text-md mt-5'>Lorem ipsum dolor sit amet consectetur. Metus nunc lacus
                            tortor lectus consectetur elementum nec. Amet eu mauris magnis auctor. Nec massa malesuada
                            venenatis ac vitae. Ultrices eleifend dapibus viverra eu congue.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 mt-10 adoption-grid ">
                        {
                            ["pimentinha", "docinho", "jeff", "jack"].map(i => (
                                <div
                                    key={i}
                                    className="adoption-grid-item flex flex-col rounded-md shadow-lg cursor-pointer hover:shadow-xl col-span-1">
                                    {/*TODO: substituir por NextImage e alterar remotePatterns https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns */}
                                    <div
                                        className="flex justify-center align-center overflow-hidden rounded-t-md">
                                        <img alt='gato'
                                             loading='lazy'
                                             className='shrink-0 min-w-full min-h-full'
                                             src='https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg'/>
                                    </div>
                                    <div className="flex flex-col text-center py-4">
                                        <h4 className='text-greendark font-bold text-lg text-wrap'>{i}</h4>
                                        <p className='text-black text-sm text-wrap'>Adulto - Femea - Grande</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex align-center justify-center">
                        <a href="#"
                           className="mt-6 text-lg font-bold text-greendark">
                            Ver mais
                        </a>
                    </div>
                </div>
                <div id='about' className="flex flex-col align-start">
                    <h3 className='text-black text-4xl font-bold'>Sobre nós</h3>
                    <p className='text-black text-md mt-5'>
                        Lorem ipsum dolor sit amet consectetur. Interdum adipiscing aliquet adipiscing quis tristique
                        sapien odio. Auctor ipsum id nunc dui at. Fermentum non purus nisl mollis sed justo viverra
                        ultricies. Viverra maecenas id nunc diam non enim. Iaculis turpis integer scelerisque magna
                        platea. Nec sed ac sit tempor. Cras tortor urna fames nisl porta a sodales sed. Cursus nibh
                        pellentesque quis nulla. Id habitant vitae suspendisse facilisis egestas blandit ultrices amet.
                        Nisl orci etiam lacus sit vel erat. Massa odio amet nec aliquam bibendum ut non nisi. Libero
                        elementum arcu augue natoque feugiat elementum et turpis purus.
                        Pharetra risus duis pellentesque sit sit sit. Cras pretium interdum sit mattis tortor
                        pellentesque sem odio. Congue vestibulum aliquet montes arcu tortor mauris ac. Id et duis nunc
                        non ultricies imperdiet in diam. Pharetra id tempor malesuada curabitur tortor eget neque
                        interdum in. Nunc nec id eget egestas nullam sed. Vitae aenean mus id auctor pharetra. Molestie
                        faucibus sit tellus et. Nulla nunc pretium tempor cras lectus quis sem tincidunt dignissim.
                        Tempor platea et justo aliquet in libero interdum. Non duis sit lectus ultrices id. Tortor
                        pharetra suspendisse convallis lacus libero. Magna ac dui quis at mollis.
                        Et condimentum ante augue nulla vulputate facilisis vivamus non. Dui tempus adipiscing quam
                        congue vestibulum. Malesuada nisi enim porttitor enim sed magna pellentesque fames neque.
                        Sollicitudin egestas vitae vitae convallis dui id commodo a. Faucibus non ut a id pellentesque
                        vitae faucibus ullamcorper. Imperdiet elit id aliquet potenti laoreet. Turpis sed ut sed risus
                        ultrices. Id amet rutrum morbi eget tempus egestas orci congue.
                    </p>
                </div>
                <div id='help' className="flex flex-col align-start">
                    <h3 className='text-black text-4xl font-bold'>Como ajudar?</h3>
                    <p className='text-black text-md mt-5'>
                        Chave PIX (CNPJ): <span className='text-greendark font-semibold'>21.657.568/0001-50</span></p>
                    <p className='text-black text-md mt-5'>
                        Lorem ipsum dolor sit amet consectetur. Amet amet urna nunc elementum varius sagittis ut aliquam eget. Commodo sed viverra hendrerit tempor. Est ultricies nisi in vel. Urna amet sit aliquet tortor metus tristique vestibulum mauris ornare. Lacus quis ultrices pellentesque lacus et. Auctor arcu id ipsum eu semper quam lectus. Donec dictum massa sed platea convallis odio. Sit ac quam eu molestie justo. Enim nullam volutpat nisl mauris. Vel viverra duis ultricies erat. Volutpat egestas dui quam nec habitasse massa magna erat. Vulputate rhoncus fringilla dictumst arcu aliquam etiam.</p>
                </div>
            </main>
            <footer className="flex flex-col align-center justify-center text-center bg-black">
                <div className="flex flex-col py-16">
                    <h3 className='text-white text-xl font-bold'>Entre em contato</h3>
                    <div className="flex flex-row align-center justify-center text-center gap-4 mt-4">
                        <MdFacebook className="text-green h-16 w-16"/>
                        <MdOutlineShoppingBag className="text-green h-16 w-16"/>
                        <BiLogoInstagramAlt className="text-green h-16 w-16"/>
                        <MdLocationPin className="text-green h-16 w-16"/>
                        <MdLocalPhone className="text-green h-16 w-16"/>
                    </div>
                </div>
                <div className="flex justify-center text-center bg-blacken py-8">
                    <h4 className='text-white'>ONG Gatos da Lagoa - Taquaral</h4>
                </div>
            </footer>
        </>
    );
}
