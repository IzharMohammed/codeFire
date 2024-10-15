"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware_1 = require("../middleware/authMiddleware");
const Router = require("express");
const router = Router();
// Submissions Routes
router.post('/', authMiddleware_1.authMiddleware, (req, res) => {
    // Submit a solution
});
router.get('/:submissionId', (req, res) => {
    // Get submission details by ID
});
router.get('/user/:userId', authMiddleware_1.authMiddleware, (req, res) => {
    // Get all submissions by user
});
router.get('problem/:problemId', authMiddleware_1.authMiddleware, (req, res) => {
    // Get all submissions for a specific problem.
});
exports.default = router;
