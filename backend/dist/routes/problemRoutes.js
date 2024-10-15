"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("express");
const router = Router();
// Problem Routes
router.get('/', (req, res) => {
    // Retrieve all problems
});
router.get('/:problemId', (req, res) => {
    // Retrieve problem by ID
});
router.post('/createproblem', (req, res) => {
    //  Create a new problem
});
exports.default = router;
