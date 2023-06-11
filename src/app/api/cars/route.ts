import { NextResponse } from 'next/server';
import { db } from '~/db/db';
import { User } from '~/db/schema';

export async function GET(req: Request) {
  const allUsers = await db.select().from(User);
  return NextResponse.json({ allUsers: allUsers });
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log('🚀 ~ file: route.ts:12 ~ POST ~ body:', body);

  return NextResponse.json({ message: body });
}
