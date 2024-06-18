import { headers } from 'next/headers';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req, res) => {
  console.log('// NEW POST REQ //')
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const headersList = headers(req);
  const sig = headersList.get("stripe-signature")

  try {
    const body = await req.text()
    const event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        // Handle successful checkout session
        console.log('Checkout session completed');
        const client_reference_id = session.client_reference_id;
        const { email, phone } = session.customer_details;
        console.log('client_reference_id: ', client_reference_id)
        console.log('client email: ', email)
        console.log('client phone: ', phone)
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  } catch (err) {
    console.log('error: ', err)
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
