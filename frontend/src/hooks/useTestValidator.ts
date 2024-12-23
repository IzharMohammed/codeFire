import useProblem from "./useProblem";

const useTestValidator = (problemId: number) => {
    const { loading, problem, error, testCases, template } = useProblem(problemId);
    // await axios.get(`http://localhost:4000/api/v1/problems/${problemId}`);
    console.log(`loading, problem:-${problem}, error:- ${error}, testCases:- ${testCases}, template`);

    return {
        testCases
    }
}

export default useTestValidator;