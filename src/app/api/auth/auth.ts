import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const ROOT_USER = {

    id: "1",
    name: "root",
    email: null,
    image: null,
    credentials: {
        username: process.env.ROOT_USERNAME ?? 'root',
        password: process.env.ROOT_PASSWORD ?? 'admin',
    }
}

function saltAndHashPassword(password: string) {
    return password //TODO
}

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                const pwHash = saltAndHashPassword(credentials.password as string)
                const user = {username: credentials.username, password: pwHash}
                const isRootUser = user.username == ROOT_USER.credentials.username && user.password == ROOT_USER.credentials.password
                if (isRootUser) {
                    return await (new Promise((resolve, _) => resolve(ROOT_USER)))
                }

                return Promise.reject("Invalid user")
            },
        }),
    ]
})