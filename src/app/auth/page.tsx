import Image from "next/image";
import {auth, signIn} from "@/app/api/auth/auth";
import {redirect} from "next/navigation";
import {createRef} from "react";
import SignInForm from "@/app/auth/SignInForm";
import {SessionProvider} from "next-auth/react";

export default async function Login() {
    const session = await auth();
    if (session) {
        return redirect("/adoption/admin")
    }
    return <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-col sm:mx-auto sm:w-full sm:max-w-sm items-center justify-center">
            <Image
                src="/logo_gatos_lagoa.png"
                alt="Vercel Logo"
                width={200}
                height={200}
                priority/>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Entre na sua conta
            </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <SessionProvider session={session}><SignInForm/></SessionProvider>
        </div>
    </div>
}