import PaginationControls from "@/components/PaginationControls";
import ProblemTitle from "@/components/problemTitle";
import { NEXT_AUTH } from "@/lib/auth";
import axios from "axios";
import { getServerSession } from "next-auth/next"

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const page = searchParams['page'] ?? '1';
  const take = searchParams['take'] ?? '10';

  // (page - 1) 0 * (take) 10 = 0(skip)
  // 1 * 10 = 10
  // 2 * 10 = 20

  const skip = (+page - 1) * (+take);

  const session = await getServerSession(NEXT_AUTH);


  const response = await axios.get(`http://localhost:4000/api/v1/problems/?skip=${skip}&take=${take}`);
  const problemList = response.data.data;

  const hasMore = response.data.hasMore;

  return (
    <div className="flex justify-center my-[7rem]">
      <div className="border border-gray-700 w-full md:w-2/3 h-screen rounded-md sm:border-red-700 md:border-green-700">
        <div className="flex justify-between p-4 border-b-2">
          <div>status</div>
          <div>title</div>
          <div>description</div>
          <div>done</div>
        </div>
        {
          problemList && problemList.map((problem: Problem) => (
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
        <PaginationControls hasMore={hasMore} />
      </div>
    </div>
  );
}
