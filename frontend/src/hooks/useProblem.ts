import axios from 'axios';
import { useEffect, useState } from 'react';

interface Problem {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    testCases: string;
}

interface TestCase {
    id: number;
    input: string;
    output: string;
}

interface Template {
    language: string;
    code: string;
    languageId: number;
    starterCode: string;
    stdInRetrievalCode: string;
    finalCode: string;
}

const useProblem = (id: number) => {
    const [loading, setLoading] = useState(false);
    const [problem, setProblem] = useState<Problem | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [testCases, setTestCases] = useState<TestCase[] | null>(null);
    const [template, setTemplate] = useState<Template[] | null>(null);

    useEffect(() => {
        const fetchProblem = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/problems/${id}`);
                console.log(`response:- ${JSON.stringify(response.data)}`);
                setTemplate(response.data.template);
                setTestCases(response.data.testCases);
                setProblem(response.data);
            } catch (error) {
                setError('Error fetching problem data');
                // console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProblem();
    }, [id]); // Add `id` as a dependency so it re-fetches if `id` changes
    // console.log(`template:- ${JSON.stringify(template)}`);

    return {
        loading,
        testCases,
        problem,
        template,
        error
    };
};

export default useProblem;
