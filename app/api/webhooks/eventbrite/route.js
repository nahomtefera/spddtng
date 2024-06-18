import { NextResponse } from 'next/server';

export async function POST(req) {
  //   const secret = process.env.EVENTBRITE_WEBHOOK_SECRET;

  try {
    const event = await req.json();

    // Handle the webhook event
    console.log('Received Eventbrite webhook event:', event);

    // Process the event (e.g., update your database, trigger other actions)
    switch (event.config.action) {
      case 'order.placed':
        // Handle order placed event
        console.log('Order placed:', event);
        break;
      case 'event.published':
        // Handle event published event
        console.log('Event published:', event);
        break;
      case 'event.created':
        // Handle event created event
        console.log('Event created:', event);
        break;
      case 'event.updated':
        // Handle event updated event
        console.log('Event updated:', event);
        break;
      // Add other event types as needed
      default:
        console.log(`Unhandled event type: ${event.config.action}`);
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
