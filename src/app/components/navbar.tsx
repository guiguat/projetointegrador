"use client";
import {useCallback, useState} from "react";
import { MdDehaze, MdClose } from "react-icons/md";
import {Dialog} from "@headlessui/react";
const navigation = [
    {name: 'Adoção', href: '#adoption'},
    {name: 'Sobre nós', href: '#about'},
    {name: 'Como ajudar', href: '#help'},
    {name: 'Contato', href: '#contact'},
]
export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const disable = useCallback(() => setMobileMenuOpen(false), [])
    return <>
        <nav className="flex items-center justify-between py-6 w-full backdrop-blur-sm" aria-label="navegacao">
        <div className="flex lg:flex-1 inline-flex">
            <span className="text-sm font-semibold leading-6 text-green">Gatos Da Lagoa - Taquaral</span>
        </div>
        <div className="flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
            >
                <span className="sr-only">Open main menu</span>
                <MdDehaze className="h-6 w-6 text-white" aria-hidden="true"/>
            </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
                <a key={item.name} href={item.href}
                   className="cursor-pointer hover:text-green text-sm font-semibold leading-6 text-gray">
                    {item.name}
                </a>
            ))}
        </div>
    </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <div className="flex lg:flex-1 inline-flex">
                            <span
                                className="text-sm font-semibold leading-6 text-greendark">Gatos Da Lagoa - Taquaral</span>
                        </div>
                    </a>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={disable}
                    >
                        <span className="sr-only">Close menu</span>
                        <MdClose className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={disable}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </Dialog.Panel>
        </Dialog>
    </>
}
