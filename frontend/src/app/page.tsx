import ProblemTitle from "@/components/problemTitle";
import leetcodeProblems from "@/constants/sampleProblemList";
import { NEXT_AUTH } from "@/lib/auth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getServerSession } from "next-auth/next"

interface Problem {
  id: number,
  title: string,
  description: string,
  difficulty: string,
  testCases: string,
}


export default async function Home() {

  const session = await getServerSession(NEXT_AUTH);

  const response = await axios.get('http://localhost:4000/api/v1/problems/');
  const problemList = response.data;


  return (
    <div className="flex justify-center my-[7rem]">
      <div className="border border-gray-700 w-full md:w-2/3 h-screen rounded-md sm:border-red-700 md:border-green-700">
        <div className="flex justify-between p-4 border-b-2">
          <div>status</div>
          <div>title</div>
          <div>difficulty</div>
          <div>solved by</div>
        </div>

        {
          problemList.map((problem: Problem) => (
            <div className="flex justify-between p-4 " key={problem.id}>
              <div>done</div>
              <div className="flex gap-12 w-[10rem] md:w-[25rem] sm:w-[17rem] justify-between ">
                <ProblemTitle title={problem.title} id={problem.id} />
                <div className="">{problem.difficulty}</div>
              </div>
              <div>working...</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
