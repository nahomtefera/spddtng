import { NextResponse } from 'next/server';

export async function POST( req, res) {
  const organizationId = process.env.EVENTBRITE_ORGANIZATION_ID;
  const token = process.env.EVENTBRITE_API_KEY;
 
  try {
    const formData = await req.formData();
    const eventData = JSON.parse(await formData.get('eventData')); // Parse event data
    const imageFile = await formData.get('image'); // Get image file object

    // Process event data and image upload logic here
    // ...
    console.log('formData', formData)
    console.log('eventData', eventData)
    console.log('imageFile', imageFile)

    return NextResponse.json(
      { success: 'Event created successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

}