'use server'
import db from "@/app/api/persistence/db";
import {cats, NewCat, Cat} from "@/app/api/persistence/schema";
import {Cat as CatRequest} from "@/app/components/CatItem";
import {eq} from "drizzle-orm";
import type {NextRequest} from "next/server";

export async function POST(req: NextRequest) {
    const cat: CatRequest = await req.json();
    const data = await db.insert(cats).values([cat as unknown as NewCat]).returning();
    return Response.json(data)
}

export async function PUT(req: NextRequest) {
    const cat: CatRequest = await req.json();
    const data = await db.update(cats).set(cat as unknown as NewCat).where(eq(cats.id, cat.id!!)).returning()
    return Response.json(data);
}

export async function DELETE(req: NextRequest) {
    const catId: number = Number(req.headers.get("cat_id"));
    await db.delete(cats).where(eq(cats.id, catId!!)).returning()
    return Response.json({});
}