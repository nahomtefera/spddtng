import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    console.log('publish requested')
    const { id } = params;
  
    const apiKey = process.env.EVENTBRITE_API_KEY;
  
    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'Invalid event ID' }, { status: 400 });
    }
  
    try {
      const response = await fetch(
        `https://www.eventbriteapi.com/v3/events/${id}?token=${apiKey}`,
        { cache: 'no-store' }
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch event data');
      }
  
      const data = await response.json();
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      console.error('Error fetching event data:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
}