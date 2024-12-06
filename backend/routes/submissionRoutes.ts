import { Request, Response } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import axios from 'axios';

const Router = require("express");

const router = Router();


// Submissions Routes
router.post('/', async (req: Request, res: Response) => {
    // Submit a solution
    console.log(req.body);

    const { source_code, language_id, stdin, expected_output } = req.body;
    const respone = await axios.post(`${process.env.JUDGE0_URL}/submissions/`, {
        source_code,
        language_id,
        stdin
    })
    console.log('token from judge0', respone.data.token);
    const token = respone.data.token;
    const response = await axios.get(`${process.env.JUDGE0_URL}/submissions/${token}`);
    console.log(`response from judge0:- ${JSON.stringify(response.data)}`);
    // const stdout = respone.data.stdout;
    // const description = respone.data.status.description;

    return res.json({ msg: response.data })
});

router.get('/:submissionId', (req: Request, res: Response) => {
    // Get submission details by ID
});

router.get('/user/:userId', authMiddleware, (req: Request, res: Response) => {
    // Get all submissions by user
});

router.get('problem/:problemId', authMiddleware, (req: Request, res: Response) => {
    // Get all submissions for a specific problem.
})

export default router;