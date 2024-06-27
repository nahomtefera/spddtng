import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request, { params }) {
  const { id } = params; // Extract event ID from URL
  const token = process.env.EVENTBRITE_API_KEY;

    console.log('id:', id)
  const updateEventUrl = `https://www.eventbriteapi.com/v3/events/${id}/publish/`;

  try {
    // Send the request to update the event's status to 'live'
    const response = await fetch(updateEventUrl,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }
    );

    if (!response.ok) {
      console.log("response:", await response.json())
      throw new Error(`Error publishing event: ${response.statusText}`);
    }

    return NextResponse.json({message: 'event Published'}, { status: 200 });
  } catch (err) {
    console.error('Error publishing event:', err.response?.data || err.message);
    return NextResponse.json(
      { error: 'Error publishing event', details: err.response?.data || err.message },
      { status: 500 }
    );
  }
}