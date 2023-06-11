import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // const allCars = await prisma.car.findMany({ orderBy: { id: 'asc' } });

  // return NextResponse.json(allCars);
  return NextResponse.json({ name: 'John Doe' });
}

export async function POST(req: Request) {}
