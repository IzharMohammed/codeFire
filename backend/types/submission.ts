export interface Submission {
    languageId: number;
    status: "ACCEPTED" | "WRONG ANSWER";
    result: any;
    memory: number;
    time: number;
    createdAt: string;
    code: string;
    email: string;
    problemId: number;
    userId: number;
}

export interface Judge0Result {
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

export type Judge0Results = Judge0Result[];