import { Request, Response } from "express";
import prisma from "../lib/db";
const Router = require("express")
const router = Router();
import { CreateProblemBody } from "../types/problem";

type Problem = {
    id: number;
    title: string;
    description: string;
    difficulty: string;
};

type ProblemsResponse = {
    data: Problem[];
    hasMore: boolean;
};
// Problem Routes
router.get('/', async (req: Request, res: Response) => {
    // Retrieve all problems
    const { skip, take } = req.query;

    console.log(`skip:- ${skip}, take:- ${take}`);

    const skipValue = parseInt(skip as string, 10) || 0;
    const takeValue = parseInt(take as string, 10) || 10;

    const { data, hasMore } = await fetchProblems(skipValue, takeValue);

    res.json({ data, hasMore });
});



async function fetchProblems(skipValue: number, takeValue: number){

    try {
        const problems = await prisma.problem.findMany({ skip: skipValue, take: takeValue + 1 });
        const hasMore = problems.length > takeValue;
        const data = problems.slice(0, takeValue);
        return { data, hasMore };
    } catch (error) {
        console.log(`error:- ${error}`);
        return { data: [], hasMore: false };
    }
}

router.get('/:problemId', async (req: Request, res: Response) => {
    // Retrieve problem by ID
    const problemId = Number(req.params['problemId']);
    const problem = await prisma.problem.findUnique({
        where: {
            id: problemId
        },
        include: {
            testCases: true,
            template: true,
        }
    })
    console.log(problem);
    return res.json(problem);
});

router.post('/createproblem', async (req: Request<{}, {}, CreateProblemBody>, res: Response) => {
    //  Create a new problem
    const { title, description, difficulty, testCases, template } = req.body;

    try {
        const problem = await prisma.problem.create({
            data: {
                title,
                difficulty,
                description,
                testCases: {
                    create: testCases.map((tc) => ({
                        input: tc.input,
                        output: tc.output,
                    }))
                },
                template: {
                    create: template.map((tc) => ({
                        language: tc.language,
                        languageId: tc.languageId,
                        starterCode: tc.starterCode,
                        stdInRetrievalCode: tc.stdInRetrievalCode,
                        finalCode: tc.finalCode,
                    }))
                }
            },
        })


        console.log(`${JSON.stringify(problem)} added`);

        return res.json({ msg: `${title} added successfully` })

    } catch (error) {
        console.log(`error:- ${error}`);
        return res.json({ msg: `Error in adding of the problem :- ${error}` });
    }
});

router.post('/updateproblem', async (req: Request, res: Response) => {
    const { id, description } = req.body;
    try {
        await prisma.problem.update({
            where: {
                id
            },
            data: {
                description
            }
        })
        return res.json({ msg: `${id} updated successfully` })
    } catch (error) {
        console.log(`error:- ${error}`);
        return res.json({ msg: `Error in adding of the problem :- ${error}` });
    }
})

export default router;