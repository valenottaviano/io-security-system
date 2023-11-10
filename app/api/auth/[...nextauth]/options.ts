import type { NextAuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username: ",
                    type: "text",
                    placeholder: "Your username"
                },
                password: {
                    label: "Password: ",
                    type: "password",
                    placeholder: "Your password"
                },
            },
            async authorize(credentials) {
                const rootUser = { id: "1", name: process.env.APP_USERNAME as string, password: process.env.APP_PASSWORD as string }
                if (credentials?.username === rootUser.name && credentials?.password === rootUser.password) {
                    return rootUser
                } else {
                    return null
                }
            }
        })
    ],
}
