"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("express");
const router = Router();
const authMiddleware_1 = require("../middleware/authMiddleware");
const db_1 = __importDefault(require("../lib/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const zod_1 = require("zod");
// Authentication Routes
// Login route: Handles login or new user registration
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, Email, password } = req.body;
        // Check if username, email, and password are provided
        if (!username || !Email || !password) {
            return res.status(400).json({ msg: 'Please provide username, email, and password' });
        }
        // Check if a user already exists with the given email
        const userExist = yield db_1.default.user.findUnique({
            where: {
                email: Email,
            }
        });
        // If user exists, validate password
        if (userExist) {
            const isPasswordValid = yield bcrypt_1.default.compare(password, userExist.password);
            // If password is invalid, return an error
            if (!isPasswordValid) {
                return res.status(401).json({ msg: 'Invalid credentials' });
            }
            // If password is valid, return existing user
            return res.status(200).json({ userExist });
        }
        // Validate email format using Zod
        const emailSchema = zod_1.z.string().email();
        const emailResponse = emailSchema.safeParse(Email);
        console.log('email response', emailResponse);
        // Return an error if the email is invalid
        if (!emailResponse.success) {
            return res.json({
                msg: 'Invalid email'
            });
        }
        // Hash the password before storing it in the database
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        console.log(`hashedPassword :- ${hashedPassword}`);
        // Create a new user record in the database
        const createUser = yield db_1.default.user.create({
            data: {
                email: Email,
                password: hashedPassword,
                name: username,
            }
        });
        console.log('user created', createUser);
        // Return the newly created user
        return res.status(201).json({ createUser });
    }
    catch (error) {
        // Catch and log any errors that occur during the login/signup process
        console.error('Error during login/signup:', error);
        return res.status(500).json({ msg: 'An error occurred during login/signup' });
    }
}));
// Google login route: Handles Google OAuth login/signup
router.post('/google', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inside google');
    const { name, email, image, googleId } = req.body;
    try {
        // Check if the user already exists based on their email
        const existingUser = yield db_1.default.user.findUnique({
            where: {
                email
            }
        });
        // If the user exists, return the existing user data
        if (existingUser) {
            return res.status(200).json({ existingUser });
        }
        // If the user doesn't exist, create a new user with Google details
        const createUser = yield db_1.default.user.create({
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
    }
    catch (error) {
        // Catch and log any errors that occur during the login/signup process
        console.error('Error during login/signup:', error);
        return res.status(500).json({ msg: 'An error occurred during login/signup' });
    }
}));
// GitHub login route: Handles GitHub OAuth login/signup
router.post('/github', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inside github');
    const { name, image, githubId } = req.body;
    try {
        // Check if the user already exists based on their GitHub ID
        const existingUser = yield db_1.default.user.findUnique({
            where: {
                githubId
            }
        });
        // If the user exists, return the existing user data
        if (existingUser) {
            return res.status(200).json({ existingUser });
        }
        // If the user doesn't exist, create a new user with GitHub details
        const createUser = yield db_1.default.user.create({
            data: {
                name,
                image,
                githubId
            }
        });
        console.log('created user', createUser);
        // Return the newly created user
        return res.status(201).json({ createUser });
    }
    catch (error) {
        // Catch and log any errors that occur during the login/signup process
        console.error('Error during login/signup:', error);
        return res.status(500).json({ msg: 'An error occurred during login/signup' });
    }
}));
router.post('/logout', (req, res) => {
    // Log out the user
});
router.get('/user', authMiddleware_1.authMiddleware, (req, res) => {
    // Retrieve authenticated user details
});
exports.default = router;
