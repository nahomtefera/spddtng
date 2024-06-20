import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request, { params }) {
  const { id } = params; // Extract event ID from URL
  const token = process.env.EVENTBRITE_API_KEY;

  // CODE GOES HERE
  return NextResponse.json('update route', { status: 200 });
}
