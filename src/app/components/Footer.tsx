import {MdFacebook, MdLocationPin, MdOutlineShoppingBag} from "react-icons/md";
import {BiLogoInstagramAlt} from "react-icons/bi";

export default function Footer() {
    return <footer id='contact' className="flex flex-col align-center justify-center text-center bg-black">
        <div className="flex flex-col py-10">
            <h3 className='text-white text-xl font-bold'>Entre em contato</h3>
            <div className="flex flex-row align-center justify-center text-center gap-4 mt-4">
                <a className="cursor-pointer" href="https://www.facebook.com/GatosDaLagoaTaquaral"
                   target="_blank" rel="noopener noreferrer">
                    <MdFacebook className="text-green h-16 w-16 hover:text-white"/></a>
                <a className="cursor-pointer"
                   href="https://gatosdalagoa.petlove.com.br/" target="_blank" rel="noopener noreferrer">
                    <MdOutlineShoppingBag className="text-green h-16 w-16 hover:text-white"/></a>
                <a className="cursor-pointer" href="https://www.instagram.com/gatosdalagoa" target="_blank"
                   rel="noopener noreferrer">
                    <BiLogoInstagramAlt className="text-green h-16 w-16 hover:text-white"/></a>
                <a className="cursor-pointer"
                   href="https://www.google.com/maps/dir/?api=1&destination=-22.873906427034%2C-47.0571543618"
                   target="_blank" rel="noopener noreferrer">
                    <MdLocationPin className="text-green h-16 w-16 hover:text-white"/></a>
            </div>
        </div>
        <div className="flex justify-center text-center bg-blacken py-8">
            <h4 className='text-white'>ONG Gatos da Lagoa - Taquaral</h4>
        </div>
    </footer>
}