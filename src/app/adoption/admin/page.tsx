import {auth} from "@/app/api/auth/auth";
import Navbar from "@/app/components/navbar";
import {redirect} from "next/navigation";
import CatEditForm from "@/app/adoption/admin/CatEditForm";
import db from "@/app/api/persistence/db";
import {cats} from "@/app/api/persistence/schema";
import {Cat} from "@/app/components/CatItem";


export default async function Admin() {
    const session = await auth();
    if (!session) return redirect('/auth');
    const result: Cat[] = await db.select().from(cats)
    return <div className='flex flex-col h-full'>
        <div className='bg-blacken px-10 md:px-24'>
            <Navbar isLoggedIn={true}/>
        </div>
        <CatEditForm catsJson={JSON.stringify(result)}/>
    </div>
}