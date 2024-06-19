import { NextResponse } from 'next/server';
import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import path from 'path';

export async function POST() {
  const organizationId = process.env.EVENTBRITE_ORGANIZATION_ID;
  const token = process.env.EVENTBRITE_API_KEY;

  if (!organizationId || !token) {
    return NextResponse.json(
      { error: 'Missing Eventbrite configuration' },
      { status: 400 }
    );
  }

  const name = generateRandomName();

  const eventBody = {
    event: {
      name: {
        html: name,
      },
      start: { timezone: 'America/New_York', utc: '2024-08-15T22:00:00Z' },
      end: { timezone: 'America/New_York', utc: '2024-08-16T01:00:00Z' },
      currency: 'USD',
      online_event: false,
      listed: false,
      shareable: false,
      invite_only: false,
      show_remaining: true,
      capacity: 20,
      is_reserved_seating: false,
      is_series: false,
      show_pick_a_seat: false,
      show_seatmap_thumbnail: false,
      show_colors_in_seatmap_thumbnail: false,
      locale: 'en_US',
      venue_id: '219129959',
      capacity: 24,
      summary:
        'Get ready to meet new people and potentially find a spark in just a few minutes at our Speed Dating event!',
    },
  };

  try {
    // Create new event
    const eventResponse = await fetch(
      `https://www.eventbriteapi.com/v3/organizations/${organizationId}/events/`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventBody),
      }
    );

    if (!eventResponse.ok) {
      throw new Error(`Error creating event: ${eventResponse.statusText}`);
    }
    const eventData = await eventResponse.json();
    console.log('eventData.id: ', eventData.id);

    // Create tickets for men
    const ticketForMen = await fetch(
      `https://www.eventbriteapi.com/v3/events/${eventData.id}/ticket_classes/`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticket_class: {
            name: 'Ticket for Men',
            quantity_total: 12,
            cost: 'USD,5000',
          },
        }),
      }
    );
    if (!ticketForMen.ok) {
      throw new Error(
        `Error creating ticket for Men: ${ticketForMen.statusText}`
      );
    }
    console.log('ticket for men created successfully');

    // Create tickets for women
    const ticketForWomen = await fetch(
      `https://www.eventbriteapi.com/v3/events/${eventData.id}/ticket_classes/`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticket_class: {
            name: 'Ticket for Women',
            quantity_total: 12,
            cost: 'USD,4500',
          },
        }),
      }
    );
    if (!ticketForWomen.ok) {
      throw new Error(
        `Error creating ticket for Men: ${ticketForWomen.statusText}`
      );
    }
    console.log('ticket for women created successfully');

    // Upload image to event
    const eventId = eventData.id;
    const imagePath = path.join(
      process.cwd(),
      'public/images/app/speeddantingg_promo_img.png'
    ); // Absolute path to the image file

    try {
      console.log('eventId', eventId);
      console.log('imagePath', imagePath);
      console.log('image upload ');

      // Step 1: Get upload token
      const uploadTokenData = await getUploadToken();
      console.log('upload token data received');
      // Step 2: Upload the image
      await uploadImage(imagePath, uploadTokenData);

      // Step 3: Notify the API and get image ID
      const imageId = await notifyApi(uploadTokenData.upload_token);
      console.log('image id: ', imageId);

      // Step 4: Link the image to the event
      const updatedEvent = await linkImageToEvent(eventId, imageId);

      return NextResponse.json(
        {
          message: 'Event Created & Image uploaded and linked successfully.',
          event: updatedEvent,
        },
        { status: 201 }
      );
    } catch (error) {
      console.error('Error uploading image:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

const generateRandomName = () => {
  const adjectives = ['Exciting', 'Fun', 'Energetic', 'Lively', 'Charming'];
  const nouns = ['Event', 'Night', 'Meetup', 'Gathering', 'Mixer'];
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return `API - ${randomAdjective} Speed Dating ${randomNoun}`;
};

const uploadImage = async (filePath, uploadData) => {
  //   console.log('uploadData', uploadData);
  try {
    console.log('filePath', filePath);
    const formData = new FormData();

    for (const key in uploadData.upload_data) {
      formData.append(key, uploadData.upload_data[key]);
    }

    formData.append(
      uploadData.file_parameter_name,
      fs.createReadStream(filePath)
    );

    console.log(
      'uploadData.file_parameter_name: ',
      uploadData.file_parameter_name
    );

    const response = await axios.post(uploadData.upload_url, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    console.log('Image upload response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error.message);
    throw new Error('Image upload failed');
  }
};

const notifyApi = async (uploadToken) => {
  const token = process.env.EVENTBRITE_API_KEY;

  const notifyUrl = `https://www.eventbriteapi.com/v3/media/upload/?token=${token}`;

  const imageData = {
    upload_token: uploadToken,
    crop_mask: {
      top_left: { y: 1, x: 1 },
      width: 1280,
      height: 640,
    },
  };

  const response = await axios.post(notifyUrl, imageData);
  return response.data.id; // Return the image ID
};

const linkImageToEvent = async (eventId, imageId) => {
  console.log('linking image to event');
  const token = process.env.EVENTBRITE_API_KEY;
  const updateEventUrl = `https://www.eventbriteapi.com/v3/events/${eventId}/`;
  try {
    const response = await axios.post(
      updateEventUrl,
      { event: { logo_id: imageId } },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (err) {
    console.error('Error linking image to event:', err.message);
    throw new Error('Error linking image to event');
  }
};

// UTILS

const generateRandomDates = () => {
  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setFullYear(startDate.getFullYear() + 1);

  const randomStartDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  const randomEndDate = new Date(
    randomStartDate.getTime() + Math.random() * (2 * 60 * 60 * 1000)
  ); // Random end time within 2 hours after start

  return {
    start: randomStartDate.toISOString(),
    end: randomEndDate.toISOString(),
  };
};

const getUploadToken = async () => {
  const token = process.env.EVENTBRITE_API_KEY;
  const response = await axios.get(
    'https://www.eventbriteapi.com/v3/media/upload/',
    {
      params: {
        type: 'image-event-logo',
        token: token,
      },
    }
  );
  return response.data;
};
