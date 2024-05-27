"use server"
import {signOut} from "@/app/api/auth/auth";
export default async function signoutAction() {
    await signOut({redirectTo: '/'})
}