import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '../../../utils/Connect';

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
            )
        ]
    }
)

export { handler as GET, handler as POST }