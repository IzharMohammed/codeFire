import Appbar from "@/components/appbar";
import ProblemTitle from "@/components/problemTitle";
import leetcodeProblems from "@/constants/sampleProblemList";
import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth/next"

export default async function Home() {

  const session = await getServerSession(NEXT_AUTH);

  return (
    <div className="flex justify-center my-[7rem]">
      <div className="border border-gray-700 w-2/3 h-screen rounded-md">
        <div className="flex justify-between p-4 border-b-2">
          <div>status</div>
          <div>title</div>
          <div>difficulty</div>
          <div>solved by</div>
        </div>

        {
          leetcodeProblems.map(problem => (
            <div className="flex justify-between p-4 ">
              <div>done</div>
              <div className="flex gap-12 w-[25rem] justify-between">
                <ProblemTitle problem={problem} />
                <div>{problem.difficulty}</div>
              </div>
              <div>{problem.solvedBy}</div>
            </div>
          ))
        }


      </div>

    </div>
  );
}
