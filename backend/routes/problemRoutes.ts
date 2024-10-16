import { Request, Response } from "express";
import prisma from "../lib/db";
const Router = require("express")
const router = Router();


// Problem Routes
router.get('/', (req: Request, res: Response) => {
    // Retrieve all problems
});

router.get('/:problemId', async (req: Request, res: Response) => {
    // Retrieve problem by ID
    const problemId = Number(req.params['problemId']);
    const problem = await prisma.problems.findUnique({
        where: {
            id: problemId
        }
    })
    console.log(problem);
    return res.json(problem);
});

router.post('/createproblem', async (req: Request, res: Response) => {
    //  Create a new problem
    const { title, description, difficulty, testCases } = req.body;
    try {
        const problem = await prisma.problems.create({
            data: {
                title,
                difficulty,
                description,
                testCases
            }
        })

        console.log(`${JSON.stringify(problem)} added`);

        return res.json({ msg: `${title} added successfully` })

    } catch (error) {
        console.log(`error:- ${error}`);
        return res.json({ msg: `Error in adding of the problem :- ${error}` });
    }
});

export default router;