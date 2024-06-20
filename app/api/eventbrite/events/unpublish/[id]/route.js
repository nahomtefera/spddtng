import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request, { params }) {
  const { id } = params; // Extract event ID from URL
  const token = process.env.EVENTBRITE_API_KEY;

console.log('id:', id)
  const updateEventUrl = `https://www.eventbriteapi.com/v3/events/${id}/unpublish/?token=${token}`;

  try {
    // Send the request to update the event's status to 'live'
    const response = await axios.post(updateEventUrl);

    return NextResponse.json(response.data, { status: 200 });
  } catch (err) {
    console.error('Error unpublishing event:', err.response?.data || err.message);
    return NextResponse.json(
      { error: 'Error unpublishing event', details: err.response?.data || err.message },
      { status: 500 }
    );
  }
}