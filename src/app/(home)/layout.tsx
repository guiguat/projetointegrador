import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "../globals.css";
import Footer from "@/app/components/Footer";

const inter = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Gatos Da Lagoa - Taquaral",
    description: "by Univesp",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
