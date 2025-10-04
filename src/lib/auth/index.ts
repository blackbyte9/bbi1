import NextAuth, { User, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { z } from "zod";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials) {
          return null; // Return null if no credentials are provided
        }
        const parsedCredentials = z
          .object({
            username: z.string().min(4).max(128),
            password: z.string().min(6).max(128)
          }).safeParse(credentials);
        if (!parsedCredentials.success) {
          return null; // Return null if validation fails
        }

        const user = { id: "1", name: "Klaas", email: "blackbyte9@gmx.net" };
        if (credentials?.username === "klaas" && credentials?.password === "arbeit") {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT; }) {
      if (session?.user) {
        session.user.id = token.sub ?? "";
      }
      return session;
    }
  }
});
