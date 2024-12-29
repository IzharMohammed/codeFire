
export interface TestCase {
    input: string,
    output: string,
}

export interface CreateProblemBody {
    title: string;
    description: string;
    difficulty: string;
    testCases: TestCase[];
    template: {
        language: string;
        starterCode: string;
        finalCode: string;
        stdInRetrievalCode: string;
        languageId: number;
    }[];
}