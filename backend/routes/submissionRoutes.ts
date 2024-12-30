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

   const savedSubmissionResponse =  await saveSubmission(result, problemId, language_id, usersEmail, testCaseCount.testCaseCount,testCaseCount.totalTestCases, source_code,id);
   console.log(`saveSubmissionResponse :- ${JSON.stringify(savedSubmissionResponse) }`);
   
   return res.json({ msg: result, testCaseCount,});
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
    totalTestCases: number,
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
        userId: id,
        result,
        createdAt,
        code: source_code,
        languageId: Number(language_id),    
        testCaseCount,
        totalTestCases,
        status: (testCaseCount == 3 ? 'ACCEPTED' : 'WRONG_ANSWER'),
        problemId: Number(problemId),
    }

    try {
        const savedSubmission = await prisma.submission.create({
            data: submission
        })

        return savedSubmission;

    } catch (error) {
        console.error("Error saving submission:", error);
        throw new Error("Failed to submission");
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

const validateTestCases = async (result: Judge0Results, problemId: number): Promise<{ testCaseCount: number, totalTestCases: number }> => {
    const response1 = await fetchProblemDetails(problemId);

    console.log(`stdIn:- ${JSON.stringify(response1?.testCases[0].input)}`);

    let testCaseCount = 0;
    console.log(`response1?.testCases.length:- ${response1?.testCases.length}`);

    for (let i = 0; i < response1?.testCases.length!; i++) {
        console.log(`response1?.testCases:- ${JSON.stringify(response1?.testCases[i])}`);
        console.log(`result:- ${JSON.stringify(result[i])}`);
        
        const expectedOutput = JSON.stringify(response1?.testCases[i].output);
        const actualOutput = result[i].stdout ? JSON.stringify(result[i].stdout.trim()) : null;

        if (actualOutput === null) {
            console.log(`Test case ${i + 1} has no output.`);
            // continue; // Skip or handle as needed
        }

        console.log(`expectedOutput: ${expectedOutput}`);
        console.log(`actualOutput: ${actualOutput}`);

        if (expectedOutput === actualOutput) {
            console.log('Inside for loop - Test case passed');
            testCaseCount++;
        }
    }

    return { testCaseCount, totalTestCases: response1?.testCases.length! };
};


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

router.get('/user/:userId',async (req: Request, res: Response) => {
    // Get all submissions by user
    const userId = req.params['userId'];
    const respone = await prisma.submission.findMany({
        where: {
            userId: Number(userId)
        }
    })
    console.log(`respone:- ${JSON.stringify(respone)}`);
    
    res.json(respone);
});

router.get('problem/:problemId', authMiddleware, (req: Request, res: Response) => {
    // Get all submissions for a specific problem.
})

export default router;