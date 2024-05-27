'use client'

import {createRef} from "react";
import {useRouter} from "next/navigation";
import {signIn, useSession} from "next-auth/react";

export default function SignInForm() {
    const router = useRouter()
    const {update, data, status} = useSession()
    if (status == 'loading') {
        return <p>Carregando...</p>
    }
    if (status == 'authenticated') {
        router.push('/adoption/admin')
        return <p>Carregando...</p>
    }
    const ref = createRef<HTMLFormElement>();
    return <form ref={ref} className="space-y-6" action={async (formData) => {
        const req: Record<string, any> = { redirect: false };
        formData.forEach((value, key) =>{req[key] = value.toString();});
        const res = await signIn("credentials", req)
        ref.current?.reset();
        if (res?.error) alert('Credenciais invalidas! Tente novamente');
    }}>
        <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Usuário
            </label>
            <div className="mt-2">
                <input
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="current-username"
                    required
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
            </label>
            <div className="mt-2">
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Sign in
            </button>
        </div>
    </form>
}