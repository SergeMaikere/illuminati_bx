import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '../../../utils/Connect';
import { login } from '../../../utils/Users';

const handler = NextAuth( 
    {
        adapter: PrismaAdapter(prisma),
        providers: [
            GithubProvider(
                {
                    clientId: process.env.GITHUB_ID,
                    clientSecret: process.env.GITHUB_SECRET
                }
            ),
            GoogleProvider(
                {
                    clientId: process.env.GOOGLE_ID,
                    clientSecret: process.env.GOOGLE_SECRET
                }
            ),
            FacebookProvider(
                {
                    clientId: process.env.FACEBOOK_ID,
                    clientSecret: process.env.FACEBOOK_SECRET
                }
            ),
            CredentialsProvider(
                {
                    name: 'Credentials',
                    credentials: {
                        email: { label: "Email", type: "email", placeholder: "g.soros@nwo.com" },
                        password: { label: 'Mot de passe', type: "password", placeholder: "3p5731nD1dn7K1llH1m53lf" }
                    },
                    async authorize (credentials) {
                        return login(credentials)
                    }
                }
            )
        ]
    }
)

export { handler as GET, handler as POST }