import { NextRequest, NextResponse } from 'next/server';
import { db } from '~/db/db';
import { CarBrand } from '~/db/schema';

type Brand = {
  name: string;
};

export async function GET(req: NextRequest) {
  const allBrands = await db.select().from(CarBrand);

  return NextResponse.json({ allBrands });
}

export async function POST(req: NextRequest) {
  const body: Brand = await req.json();

  const newBrand = await db.insert(CarBrand).values(body);

  return NextResponse.json({ newBrand }, { status: 201 });
}
