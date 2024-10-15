import Appbar from "@/components/appbar";
import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth/next"

export default async function Home() {

  const session = await getServerSession(NEXT_AUTH);

  return (
    <div className="flex justify-center mt-[8rem]">
     {JSON.stringify(session)}
      <Appbar />
    </div>
  );
}
