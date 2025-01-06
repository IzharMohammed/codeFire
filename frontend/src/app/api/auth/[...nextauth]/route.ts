import NextAuth from "next-auth";
import { NEXT_AUTH } from "@/lib/auth";

// export function GET(req: NextRequest, {params: {nextauth}}: {params: {nextauth: string[]}}){
//     console.log(nextauth);

//     return NextResponse.json({
//         msg: nextauth
//     })
// }    

const handler = NextAuth(NEXT_AUTH);

// export {handler as GET, handler as POST}
export const GET = handler;
export const POST = handler;