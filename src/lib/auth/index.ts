import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "../prisma"
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github"


export const BASE_PATH = "/api/auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub,
        Credentials({
            credentials: { password: { label: "Password", type: "password" } },
            async authorize(credentials) {
                if (credentials.password !== "password") return null
                return {
                    id: "1",
                    name: "Klaas Wieland",
                    email: "klaas@bonanzbar.de",
                    image: "https://source.boringavatars.com/marble/120",
                }
            },
        }),
    ],
    callbacks: {
        // authorized({ request, auth }) {
        //   const { pathname } = request.nextUrl
        //   if (pathname === "/middleware-example") return !!auth
        //   return true
        // },
        jwt({ token, trigger, session }) {
            if (trigger === "update") token.name = session?.user?.name
            return token
        },
    }
})