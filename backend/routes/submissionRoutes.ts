import { Request, Response } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import axios from 'axios';
import prisma from "../lib/db";
import { Submission,Judge0Result,Judge0Results } from "../types/submission";

const Router = require("express");


const router = Router();

// Submissions Routes
router.post('/', async (req: Request, res: Response) => {
    // Submit a solution
    console.log(req.body);

    const { source_code, language_id, problemId, usersEmail, id } = req.body;

    const response = await fetchProblemDetails(problemId);

    console.log(`stdIn:- ${JSON.stringify(response?.testCases[0].input)}`);

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

    const testCaseCount = await validateTestCases(result, problemId);
    console.log(`testCaseCount:-${testCaseCount}`);

    await saveSubmission(result, problemId, language_id, usersEmail, testCaseCount, source_code, id);
    return res.json({ msg: result, testCaseCount });
});



function getFormattedDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString("en-US");
    const time = now.toLocaleTimeString("en-US");

    return `${date}, ${time}`;
}

const saveSubmission = async (
    result: Judge0Results,
    problemId: number,
    language_id: number,
    usersEmail: string,
    testCaseCount: number,
    source_code: string,
    id: number
) => {

    // const memory = (result[0].memory! + result[1].memory! + result[2].memory!) / 3;
    // const time = (parseFloat(result[0].time || '0') + parseFloat(result[0].time || '0') + parseFloat(result[0].time || '0')) / 3;
    const memory = result.reduce((sum, res) => sum + (res.memory || 0), 0) / result.length;
    const time = result.reduce((sum, res) => sum + parseFloat(res.time || '0'), 0) / result.length;
    console.log(`memory :- ${memory} time:- ${time}`);

    const createdAt = getFormattedDateTime();
    const submission: Submission = {
        email: usersEmail,
        memory,
        time,
        result,
        createdAt,
        code: source_code,
        languageId: language_id,
        status: (testCaseCount == 3 ? 'ACCEPTED' : 'WRONG_ANSWER'),
        userId: id,
        problemId,
    }

    try {
        const savedSubmission = await prisma.submission.create({
            data: submission
        })

        return savedSubmission;

    } catch (error) {
        console.error("Error saving submission:", error);
        throw new Error("Failed to save submission");
    }
}


const fetchProblemDetails = async (problemId: number) => {
    return await prisma.problem.findUnique({
        where: {
            id: Number(problemId)
        },
        include: {
            testCases: true,
        }
    })
}

const validateTestCases = async (result: Judge0Results, problemId: number): Promise<number> => {
    const response1 = await fetchProblemDetails(problemId);

    console.log(`stdIn:- ${JSON.stringify(response1?.testCases[0].input)}`);

    let testCaseCount = 0;
    console.log(`response1?.testCases.length:- ${response1?.testCases.length}`);

    for (let i = 0; i < response1?.testCases.length!; i++) {
        const expectedOutput = JSON.stringify(response1?.testCases[i].output);
        const actualOutput = JSON.stringify((result[i].stdout.trim())); // Parse stdout and then stringify

        console.log(`expectedOutput: ${expectedOutput}`);
        console.log(`actualOutput: ${actualOutput}`);

        if (expectedOutput === actualOutput) {
            console.log('Inside for loop - Test case passed');
            testCaseCount++;
        }
    }

    return testCaseCount;
}

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