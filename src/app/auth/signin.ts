"use server"
import {signIn} from "@/app/api/auth/auth";

export default async function handleSignIn(formData: FormData) {
    try {
        return signIn("credentials", formData)
    } catch (ex: any) {
        return false
    }
}