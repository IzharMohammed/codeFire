// submission Routes
interface Judge0Result {
    status: {
        id: number;
        description: string;
    };
    stdout: string;
    stderr: string | null;
    compile_output: string | null;
    time: string | null;
    memory: number | null;
    token: string;
}

interface Submission {
    languageId: number;
    status: "ACCEPTED" | "WRONG ANSWER";
    result: any;
    memory: number;
    time: number;
    createdAt: string;
    code: string
}

// ProblemRoutes
interface TestCase {
    input: string,
    output: string,
}

interface CreateProblemBody {
    title: string;
    description: string;
    difficulty: string;
    testCases: TestCase[];
    template: {
        language: string;
        code: string;
        languageId: number;
    }[];
}
