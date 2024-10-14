import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { json } from "stream/consumers";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                username: { label: 'username', type: 'text' },
                Email: { label: 'Email', type: 'text', placeholder: 'random@gmail.com' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials: any) {
                console.log('credentials', credentials);

                

                return {
                    id: 'izhar3',
                    email: 'izhar3@gmail.com',
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
            console.log('before token', token);
            console.log('account', account);
            console.log('profile', profile);

            token.userId = token.sub;
            console.log('after changing token', token);

            return token
        },
        session: ({ session, token, user }: any) => {
            if (session && session.user) {
                session.user.id = token.userId;
            }
            console.log(`session:- ${JSON.stringify(session)}`);

            return session;
        }
    }
}