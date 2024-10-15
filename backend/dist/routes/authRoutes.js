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
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Register a new user
    try {
        const { username, Email, password } = req.body;
        if (!username || !Email || !password) {
            return res.status(400).json({ msg: 'Please provide username, email, and password' });
        }
        const userExist = yield db_1.default.user.findUnique({
            where: {
                email: Email,
            }
        });
        if (userExist) {
            const isPasswordValid = yield bcrypt_1.default.compare(password, userExist.password);
            if (!isPasswordValid) {
                return res.status(401).json({ msg: 'Invalid credentials' });
            }
            return res.status(200).json({ userExist });
        }
        const emailSchema = zod_1.z.string().email();
        const emailResponse = emailSchema.safeParse(Email);
        console.log('email response', emailResponse);
        // Return an error if the email is invalid
        if (!emailResponse.success) {
            return res.json({
                msg: 'Invalid email'
            });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        console.log(`hashedPassword :- ${hashedPassword}`);
        const createUser = yield db_1.default.user.create({
            data: {
                email: Email,
                password: hashedPassword,
                name: username,
            }
        });
        console.log('user created', createUser);
        return res.status(201).json({ createUser });
    }
    catch (error) {
        console.error('Error during login/signup:', error);
        return res.status(500).json({ msg: 'An error occurred during login/signup' });
    }
}));
router.post('/google', (req, res) => {
    console.log('inside google');
    const { name, email, image, googleId } = req.body;
    res.json({ msg: `successfully logged in with google` });
});
router.post('/github', (req, res) => {
    console.log('inside github');
    const { name, image, githubId } = req.body;
    res.json({ msg: `successfully logged in with github` });
});
router.post('/logout', (req, res) => {
    // Log out the user
});
router.get('/user', authMiddleware_1.authMiddleware, (req, res) => {
    // Retrieve authenticated user details
});
exports.default = router;
