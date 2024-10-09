import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'random@gmail.com' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials: any) {
                console.log(credentials);

                // Prisma logic for validating user

                return {
                    id: 'izhar1',
                    email: 'izhar@gmail.com',
                    password: '12345'
                }
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),

        GitHubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || ''
        })
    ],

    secret: process.env.NEXTAUTH_SECRET,
    
    callbacks: {
        async jwt({ token, account, profile }: any) {
            console.log('token', token);
            token.userId = token.sub;
            return token
        },
        session: ({ session, token, user }: any) => {
            if (session && session.user) {
                session.user.id = token.userId;
            }
            return session;
        }
    }
}