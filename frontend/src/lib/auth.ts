import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { json } from "stream/consumers";
import axios from "axios";


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
                const auth = await axios.post(`${process.env.BACKEND_URL}/api/v1/auth/login`, {
                    username: credentials.username,
                    Email: credentials.Email,
                    password: credentials.password,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                console.log('here', auth.data.userExist.id);
                console.log('email', auth.data.userExist.Email);
                console.log('password', auth.data.userExist.password);


                return {
                    id: auth.data.userExist.id,
                    email: auth.data.userExist.email,
                    username: auth.data.userExist.name,
                    password: auth.data.userExist.password,
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
        async jwt({ token, account, profile, user }: any) {
            console.log('before token', token);
            console.log('account', account);
            console.log('profile', profile);
            console.log('user', user);

            token.userId = token.sub;

            if (user) {
                token.username = user.username;
            }

            console.log('after changing token', token);

            // if (account.provider == 'github') {
            //     // express api for github
            //     const auth = await axios.post(`${process.env.BACKEND_URL}/api/v1/auth/github`, {
            //         name: token.name,
            //         image: token.picture,
            //         githubId: token.userId,
            //     }, {
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //     })
            // }

            // if (account.provider == 'google') {
            //     // api for google auth
            //     const auth = await axios.post(`${process.env.BACKEND_URL}/api/v1/auth/google`, {
            //         name: token.name,
            //         email: token.email,
            //         image: token.picture,
            //         googleId: token.userId
            //     }, {
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //     })
            // }


            return token
        },
        session: ({ session, token, user }: any) => {
            if (session && session.user) {
                session.user.id = token.userId;
                session.user.username = token.username;
            }
            console.log(`session:- ${JSON.stringify(session)}`);

            return session;
        }
    }
}