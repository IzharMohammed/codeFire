const Router = require("express")
const router = Router();
import { Request, Response } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import prisma from "../lib/db";
import bcrypt from "bcrypt";
import { z as zod } from "zod";

// Authentication Routes

// Login route: Handles login or new user registration
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, Email, password } = req.body;

        // Check if username, email, and password are provided
        if (!username || !Email || !password) {
            return res.status(400).json({ msg: 'Please provide username, email, and password' });
        }

        // Check if a user already exists with the given email
        const userExist = await prisma.user.findUnique({
            where: {
                email: Email,
            }
        });

        // If user exists, validate password
        if (userExist) {
            const isPasswordValid = await bcrypt.compare(password, userExist.password!);

            // If password is invalid, return an error
            if (!isPasswordValid) {
                return res.status(401).json({ msg: 'Invalid credentials' });
            }

            // If password is valid, return existing user
            return res.status(200).json({ userExist });
        }

        // Validate email format using Zod
        const emailSchema = zod.string().email();
        const emailResponse = emailSchema.safeParse(Email);

        console.log('email response', emailResponse);

        // Return an error if the email is invalid
        if (!emailResponse.success) {
            return res.json({
                msg: 'Invalid email'
            });
        }

        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(`hashedPassword :- ${hashedPassword}`);

        // Create a new user record in the database
        const createUser = await prisma.user.create({
            data: {
                email: Email,
                password: hashedPassword,
                name: username,
            }
        });

        console.log('user created', createUser);

        // Return the newly created user
        return res.status(201).json({ createUser });

    } catch (error) {
        // Catch and log any errors that occur during the login/signup process
        console.error('Error during login/signup:', error);
        return res.status(500).json({ msg: 'An error occurred during login/signup' });
    }
});

// Google login route: Handles Google OAuth login/signup
router.post('/google', async (req: Request, res: Response) => {
    console.log('inside google');
    const { name, email, image, googleId } = req.body;
    try {
        // Check if the user already exists based on their email
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        });

        // If the user exists, return the existing user data
        if (existingUser) {
            return res.status(200).json({ existingUser });
        }

        // If the user doesn't exist, create a new user with Google details
        const createUser = await prisma.user.create({
            data: {
                name,
                email,
                image,
                googleId
            }
        });

        console.log('created user', createUser);

        // Return the newly created user
        return res.status(201).json({ createUser });

    } catch (error) {
        // Catch and log any errors that occur during the login/signup process
        console.error('Error during login/signup:', error);
        return res.status(500).json({ msg: 'An error occurred during login/signup' });
    }
});

// GitHub login route: Handles GitHub OAuth login/signup
router.post('/github', async (req: Request, res: Response) => {
    console.log('inside github');
    const { name, image, githubId } = req.body;
    try {
        // Check if the user already exists based on their GitHub ID
        const existingUser = await prisma.user.findUnique({
            where: {
                githubId
            }
        });

        // If the user exists, return the existing user data
        if (existingUser) {
            return res.status(200).json({ existingUser });
        }

        // If the user doesn't exist, create a new user with GitHub details
        const createUser = await prisma.user.create({
            data: {
                name,
                image,
                githubId
            }
        });

        console.log('created user', createUser);

        // Return the newly created user
        return res.status(201).json({ createUser });

    } catch (error) {
        // Catch and log any errors that occur during the login/signup process
        console.error('Error during login/signup:', error);
        return res.status(500).json({ msg: 'An error occurred during login/signup' });
    }
});


router.post('/logout', (req: Request, res: Response) => {
    // Log out the user
});

router.get('/user', authMiddleware, (req: Request, res: Response) => {
    // Retrieve authenticated user details
});

export default router;