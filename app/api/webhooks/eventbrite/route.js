import { NextResponse } from 'next/server';

export async function POST(req) {
  //   const secret = process.env.EVENTBRITE_WEBHOOK_SECRET;

  const apiKey = process.env.EVENTBRITE_API_KEY;
  try {
    const event = await req.json();
    const {api_url} = event;
    const event_id = api_url.split('/').at(-2)
    const response = await fetch(`https://www.eventbriteapi.com/v3/events/${event_id}/?token=${apiKey}`, { cache: 'no-store' });

    // Log the received webhook event
    console.log('Received Eventbrite webhook event 😊');
    // Extract the action from the event config
    const action = event.config.action;
    // Process the event (e.g., update your database, trigger other actions)
    switch (action) {
      case 'order.placed':
        // Handle order placed event
        console.log('Order placed');
        break;
      case 'event.published':
        // Handle event published event
        console.log('Event published');
        break;
      case 'event.created':
        // Handle event created event
        console.log('Event created');
        break;
      case 'event.updated':
        // Handle event updated event
        console.log('Event updated');
        break;
      // Add other event types as needed
      default:
        console.log(`Unhandled event type: ${action}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('Error handling webhook event:', error);
    return NextResponse.json(
      { error: 'Webhook handling error' },
      { status: 500 }
    );
  }
}
