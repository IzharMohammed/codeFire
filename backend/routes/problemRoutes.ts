import { Request, Response } from "express";
import prisma from "../lib/db";
const Router = require("express")
const router = Router();

interface TestCase {
    input: string,
    output: string,
}

interface CreateProblemBody {
    title: string;
    description: string;
    difficulty: string;
    testCases: TestCase[];
}
  
// Problem Routes
router.get('/', async (req: Request, res: Response) => {
    // Retrieve all problems
    try {
        const problems = await prisma.problems.findMany();
        return res.json(problems);
    } catch (error) {
        console.log(`error:- ${error}`);
        return res.json({ msg: `Error in fetching of the problem :- ${error}` });
    }
});

router.get('/:problemId', async (req: Request, res: Response) => {
    // Retrieve problem by ID
    const problemId = Number(req.params['problemId']);
    const problem = await prisma.problems.findUnique({
        where: {
            id: problemId
        },
        include:{
            testCases: true
        }
    })
    console.log(problem);
    return res.json(problem);
});

router.post('/createproblem', async (req: Request<{}, {}, CreateProblemBody>, res: Response) => {
    //  Create a new problem
    const { title, description, difficulty, testCases } = req.body;

    try {
        const problem = await prisma.problems.create({
            data: {
                title,
                difficulty,
                description,
                testCases: {
                    create: testCases.map((tc) => ({
                        input: tc.input,
                        output: tc.output,
                    }))
                }
            }
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
        await prisma.problems.update({
            where: {
                id
            },
            data: {
                description
            }
        })
        return res.json({msg: `${id} updated successfully`})
    } catch (error) {
        console.log(`error:- ${error}`);
        return res.json({ msg: `Error in adding of the problem :- ${error}` });
    }
})

export default router;