import { NextResponse } from 'next/server';

export async function GET(req, res) {
  const apiKey = process.env.EVENTBRITE_API_KEY;
  const organizationId = process.env.EVENTBRITE_ORGANIZATION_ID;

  const response = await fetch(`https://www.eventbriteapi.com/v3/organizations/${organizationId}/events/?token=${apiKey}`, { cache: 'no-store'});


  if (!response.ok) {
    const error = await response.json();
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Error fetching events' },
      { status: response.status }
    );
  }
  const data = await response.json();
  const {events} = data;
  console.log('\n\n\n');
  events.map(event => {
    console.log('name:', event.name, event.id);
  })
  console.log('\n\n\n');
  
  const nextResponse = NextResponse.json(data);
  nextResponse.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
  nextResponse.headers.set('Pragma', 'no-cache');
  nextResponse.headers.set('Expires', '0');
  nextResponse.headers.set('Surrogate-Control', 'no-store');

  return nextResponse;

}
