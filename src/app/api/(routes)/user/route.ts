import db from "@/app/api/persistence/db";
import users from "@/app/api/persistence/user/schema";

// export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const data = await db.select().from(users);
    return Response.json({ data })
}