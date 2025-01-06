import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import axios from "axios";

export const NEXT_AUTH = {
    pages: {
        signIn: '/auth/signIn',
    },
    providers: [
        // Credentials provider for email and password authentication
        CredentialsProvider({
            name: 'Email',

            // Define the credentials required for logging in
            credentials: {
                username: { label: 'username', type: 'text' },
                Email: { label: 'Email', type: 'text', placeholder: 'random@gmail.com' },
                password: { label: 'Password', type: 'password' }
            },

            // This function is responsible for authorizing the user by sending a request to the backend
            async authorize(credentials: any) {
                console.log('credentials', credentials);

                // Send a POST request to the backend for login with the provided credentials
                const auth = await axios.post(`${process.env.BACKEND_URL}/api/v1/auth/login`, {
                    username: credentials.username,
                    Email: credentials.Email,
                    password: credentials.password,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                console.log('response from backend', auth.data);

                // If the user already exists, return their details
                if (auth.data && auth.data.userExist) {
                    console.log('id', auth.data.userExist.id);
                    console.log('email', auth.data.userExist.Email);
                    console.log('password', auth.data.userExist.password);

                    // Return the user object
                    return {
                        id: auth.data.userExist.id,
                        email: auth.data.userExist.email,
                        username: auth.data.userExist.name,
                        password: auth.data.userExist.password,
                    };
                }

                // If a new user was created, return their details
                if (auth.data && auth.data.createUser) {
                    return {
                        id: auth.data.createUser.id,
                        email: auth.data.createUser.email,
                        username: auth.data.createUser.name,
                        password: auth.data.createUser.password,
                    };
                }

                // Return null if authentication fails
                return null;
            }
        }),

        // Google provider for authentication via Google
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),

        // GitHub provider for authentication via GitHub
        GitHubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || ''
        })
    ],

    // Secret key for NextAuth.js, used for signing and encrypting tokens
    secret: process.env.NEXTAUTH_SECRET,

    // Callbacks for handling JWT, session, and user profile
    callbacks: {
        // JWT callback, modifies the token and adds custom properties
        async jwt({ token, account, profile, user }: any) {
            console.log('before token', token);
            console.log('account', account);
            console.log('profile', profile);
            console.log('user', user);

            // Add the user ID to the token (from sub property)
            token.userId = token.sub;

            // Add username to the token if available
            if (user) {
                token.username = user.username;
            }

            console.log('after changing token', token);

            // If account provider is GitHub, call the backend API to handle GitHub user creation
            if (account && account.provider == 'github') {
                const auth = await axios.post(`${process.env.BACKEND_URL}/api/v1/auth/github`, {
                    name: token.name,
                    image: token.picture,
                    githubId: token.userId,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }

            // If account provider is Google, call the backend API to handle Google user creation
            if (account && account.provider == 'google') {
                const auth = await axios.post(`${process.env.BACKEND_URL}/api/v1/auth/google`, {
                    name: token.name,
                    email: token.email,
                    image: token.picture,
                    googleId: token.userId
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }

            if (account?.provider === "signout") {
                token = null;
            }


            // Return the modified token
            return token;
        },


        // Session callback to modify session data before sending it to the client
        session: ({ session, token, user }: any) => {
            // Attach the user ID and username to the session object
            if (session && session.user) {
                session.user.id = token.userId;
                session.user.username = token.username;
            }
            console.log(`session:- ${JSON.stringify(session)}`);

            // Clear the session on logout
            if (session.user.id === null || session.user.username === null) {
                session = null;
            }

            // Return the modified session object
            return session;
        }
    }
};
