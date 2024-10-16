import axios from 'axios';
import { useEffect, useState } from 'react';

interface Problem {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    testCases: string;
}

const useProblem = (id: number) => {
    const [loading, setLoading] = useState(false);
    const [problem, setProblem] = useState<Problem | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProblem = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/problems/${id}`);
                setProblem(response.data);
            } catch (error) {
                setError('Error fetching problem data');
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProblem();
    }, [id]); // Add `id` as a dependency so it re-fetches if `id` changes

    return {
        loading,
        problem,
        error
    };
};

export default useProblem;
