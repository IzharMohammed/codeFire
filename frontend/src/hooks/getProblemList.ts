// "use client"

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// async function fetchProblemList() {
//     const response = await axios.get('http://localhost:4000/api/v1/problems/');
//     const problemList = response.data;
//     return problemList;
// }

// export default function getProblemList() {
    
//     const { isError, isLoading, data: problemList } = useQuery({
//         queryKey: ['problemList'],
//         queryFn: fetchProblemList,
//     });

//     return {
//         isError,
//         isLoading,
//         problemList
//     }

// }