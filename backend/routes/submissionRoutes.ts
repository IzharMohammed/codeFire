import { Request, Response } from "express";
import { authMiddleware } from "../middleware/authMiddleware";

const Router = require("express");

 const router = Router();


// Submissions Routes
router.post('/', authMiddleware, (req: Request, res: Response) => {
    // Submit a solution
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