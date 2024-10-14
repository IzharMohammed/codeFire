import { Request, Response } from "express";
const Router = require("express")
const router = Router();


// Problem Routes
router.get('/', (req: Request, res: Response) => {
    // Retrieve all problems
});

router.get('/:problemId', (req: Request, res: Response) => {
    // Retrieve problem by ID
});

router.post('/createproblem', (req: Request, res: Response) => {
    //  Create a new problem
});

export default router;