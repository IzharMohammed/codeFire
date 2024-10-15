const Router = require("express")
const router = Router();
import { Request, Response } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import prisma from "../lib/db";
import bcrypt from "bcrypt";
import { z as zod } from "zod";

// Authentication Routes
router.post('/login', async (req: Request, res: Response) => {
    // Register a new user

    try {
        const { username, Email, password } = req.body;

        if (!username || !Email || !password) {
            return res.status(400).json({ msg: 'Please provide username, email, and password' });
        }

        const userExist = await prisma.user.findUnique({
            where: {
                email: Email,
            }
        })

        if (userExist) {
            const isPasswordValid = await bcrypt.compare(password, userExist.password!);

            if (!isPasswordValid) {
                return res.status(401).json({ msg: 'Invalid credentials' });
            }

            return res.status(200).json({ userExist })
        }

        const emailSchema = zod.string().email();
        const emailResponse = emailSchema.safeParse(Email);

        console.log('email response', emailResponse);

        // Return an error if the email is invalid
        if (!emailResponse.success) {
            return res.json({
                msg: 'Invalid email'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(`hashedPassword :- ${hashedPassword}`);

        const createUser = await prisma.user.create({
            data: {
                email: Email,
                password: hashedPassword,
                name: username,
            }
        });

        console.log('user created', createUser);

        return res.status(201).json({ createUser })

    } catch (error) {
        console.error('Error during login/signup:', error);
        return res.status(500).json({ msg: 'An error occurred during login/signup' });
    }
});


router.post('/google', async (req: Request, res: Response) => {
    console.log('inside google');
    const { name, email, image, googleId } = req.body;
    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (existingUser) {
            return res.status(200).json({ existingUser });
        }

        const createUser = await prisma.user.create({
            data: {
                name,
                email,
                image,
                googleId
            }
        })

        console.log('created user', createUser);
        return res.status(201).json({ createUser });

    } catch (error) {
        console.error('Error during login/signup:', error);
        return res.status(500).json({ msg: 'An error occurred during login/signup' });
    }

})

router.post('/github', (req: Request, res: Response) => {
    console.log('inside github');
    const { name, image, githubId } = req.body;

    res.json({ msg: `successfully logged in with github` })
})


router.post('/logout', (req: Request, res: Response) => {
    // Log out the user
});

router.get('/user', authMiddleware, (req: Request, res: Response) => {
    // Retrieve authenticated user details
});

export default router;