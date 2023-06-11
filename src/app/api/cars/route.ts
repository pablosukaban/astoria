import { NextResponse } from 'next/server';
import { db } from '~/db/db';
import { User } from '~/db/schema';

export async function GET(req: Request) {
  const allUsers = await db.select().from(User);
  return NextResponse.json({ allUsers: allUsers });
}

export async function POST(req: Request) {
  const result = await db
    .insert(User)
    .values({ fullName: 'John Doe', phone: '123456789' });

  return NextResponse.json({ result: result });
}
