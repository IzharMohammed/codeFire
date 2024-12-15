import { Request, Response } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import axios from 'axios';
import prisma from "../lib/db";

const Router = require("express");

const router = Router();


// Submissions Routes
router.post('/', async (req: Request, res: Response) => {
    // Submit a solution
    console.log(req.body);


    const { source_code, language_id, problemId } = req.body;

    const response = await prisma.problem.findUnique({
        where: {
            id: Number(problemId)
        },
        include: {
            testCases: true,
        }
    })
    console.log(`stdIn:- ${JSON.stringify(response?.testCases[0].input)}`);
    const stdin = response?.testCases[0].input;
    const inputArray = response?.testCases.map(testCase => testCase.input);

    const submissions = response?.testCases.map(testCase => ({
        source_code: source_code,
        language_id: language_id,
        stdin: testCase.input
    }))

    console.log(submissions);
    const respone = await axios.post(`${process.env.JUDGE0_URL}/submissions/batch`, {
        submissions
    })

    console.log('token from judge0', respone.data);

    const token = respone.data;
    const result = await pollingResponseFromJudge0(token);


    console.log(`response from judge0:- ${JSON.stringify(result)}`);
    // const stdout = respone.data.stdout;
    // return res.json({ msg:respone.data.token})

    return res.json({ msg: result });
    // return res.json({ msg: 'izhar' })
});

const pollingResponseFromJudge0 = async (token: any) => {

    const interval = 2000;
    const maxWaitTime = 50000;
    const startTime = Date.now();
    let result = null;

    let submissionSuccessful = false;

    const allTokens = token.map((tk: { token: string }) => tk.token).join(',');

    while (!submissionSuccessful) {

        if (Date.now() - startTime > maxWaitTime) {
            throw new Error("Timeout: Submission is still in queue");
        }

        const response = await axios.get(`${process.env.JUDGE0_URL}/submissions/batch?tokens=${allTokens}`);

        result = response.data;


        console.log(`result:- ${JSON.stringify(result.submissions)}`);

        const submissions = result.submissions;

        submissionSuccessful = submissions.every((sub: any) => sub.status.id > 2);
        // console.log('status', status.id);

        if (submissionSuccessful) {
            result = result.submissions;
            break;
        }

        await new Promise((resolve) => setTimeout(resolve, interval))
    }

    return result;

}

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