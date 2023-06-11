import { NextRequest, NextResponse } from 'next/server';
import { db } from '~/db/db';
import { CarModel } from '~/db/schema';

interface Model {
  name: string;
}

export async function GET(req: Request) {
  const allModels = await db.select().from(CarModel);

  return NextResponse.json({ allModels });
}

export async function POST(request: NextRequest) {
  const res: Model = await request.json();

  const newModel = await db.insert(CarModel).values(res);

  return NextResponse.json({ newModel }, { status: 201 });
  //   const data = req.body;
  //   console.log('🚀 ~ file: route.ts:12 ~ POST ~ data:', data);
}
