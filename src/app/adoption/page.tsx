"use server";

import Navbar from "@/app/components/navbar";
import CatItem, {Cat} from "@/app/components/CatItem";
import Footer from "@/app/components/Footer";
import db from "@/app/api/persistence/db";
import {cats} from "@/app/api/persistence/schema";

export default async function Adoption() {
    const catsList: Cat[] = await db.select().from(cats)
    return (
        <div className='flex flex-col h-full'>
            <div className='bg-blacken px-10 md:px-24'>
                <Navbar/></div>
            <main className="flex flex-col px-10 md:px-24 py-16 gap-16 flex-1 h-full">
                <div id='adoption' className="flex flex-col align-start">
                    <div className="flex align-start flex-col">
                        <h3 className='text-black text-4xl font-bold'>Adoção</h3>
                        <p className='text-black text-md mt-5'>Encontre seu companheiro felino ideal, adotando um gato
                            da lagoa. Além de encontrar um amigo peludo para alegrar sua vida, você estará dando a um
                            animalzinho a chance de um lar amoroso e seguro.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 mt-10 adoption-grid">
                        {
                            catsList.map(cat => <CatItem key={cat.name} {...cat}/>)
                        }
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
