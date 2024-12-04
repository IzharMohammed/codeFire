"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../lib/db"));
const Router = require("express");
const router = Router();
// Problem Routes
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Retrieve all problems
    try {
        const problems = yield db_1.default.problems.findMany();
        return res.json(problems);
    }
    catch (error) {
        console.log(`error:- ${error}`);
        return res.json({ msg: `Error in fetching of the problem :- ${error}` });
    }
}));
router.get('/:problemId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Retrieve problem by ID
    const problemId = Number(req.params['problemId']);
    const problem = yield db_1.default.problems.findUnique({
        where: {
            id: problemId
        }
    });
    console.log(problem);
    return res.json(problem);
}));
router.post('/createproblem', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //  Create a new problem
    const { title, description, difficulty, testCases } = req.body;
    try {
        const problem = yield db_1.default.problems.create({
            data: {
                title,
                difficulty,
                description,
                testCases
            }
        });
        console.log(`${JSON.stringify(problem)} added`);
        return res.json({ msg: `${title} added successfully` });
    }
    catch (error) {
        console.log(`error:- ${error}`);
        return res.json({ msg: `Error in adding of the problem :- ${error}` });
    }
}));
exports.default = router;
