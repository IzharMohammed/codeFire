type Submission = {
    id: number;
    userId: number;
    email: string;
    problemId: number;
    languageId: number;
    testCaseCount: number;
    totalTestCases: number;
    code: string;
    status: string;
    result: Result[];
    memory: number;
    time: number;
    createdAt: string;
}

type Result = {
    time: string;
    token: string;
    memory: number;
    status: Status;
    stderr: string | null;
    stdout: string | null;
    message: string | null;
    compile_output: string | null;
}

type Status = {
    id: number;
    description: string;
}


interface Problem {
  id: number,
  title: string,
  description: string,
  difficulty: string,
  testCases: string,
}
