const events = [
  {
    id: 1,
    image: '/images/app/restaurant5.webp',
    title: 'Speed Dating Event',
    date: 'June 10, 2023',
    time: '7:00 PM - 10:00 PM',
    city: 'New York City',
    address: '123 Main St, New York, NY 10001',
    ageRange: '25-35',
    description:
      'Join us for a fun and exciting speed dating event in the heart of the city. Meet new people and find your perfect match!',
    price: 50,
    host: 'John Doe',
    capacity: 100,
    tags: ['Singles', 'Networking', 'Fun'],
    dressCode: 'Casual',
    specialInstructions: 'Please arrive on time and be ready to mingle.',
    attendees: [
      { id: 1, image: '/images/users/user1.webp', name: 'Jane Doe' },
      { id: 2, image: '/images/users/user2.webp', name: 'Bob Smith' },
      { id: 3, image: '/images/users/user3.webp', name: 'Sarah Johnson' },
      { id: 4, image: '/images/users/user4.webp', name: 'Tom Wilson' },
    ],
    contact: {
      email: 'info@speeddate.com',
      phone: '555-1234',
    },
    rating: 4.8,
    reviews: [
      {
        id: 1,
        user: 'Jane Doe',
        rating: 5,
        comment: 'Had a great time at this event!',
      },
      {
        id: 2,
        user: 'Bob Smith',
        rating: 4,
        comment: 'Enjoyed the event, but could have been better organized.',
      },
    ],
    schedule: [
      { time: '7:00 PM', activity: 'Check-in' },
      { time: '7:30 PM', activity: 'Speed Dating Rounds' },
      { time: '9:00 PM', activity: 'Networking' },
      { time: '9:45 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Acme Corp' },
      { id: 2, image: '/placeholder.svg', name: 'Widgets Inc' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Dating App' },
      { id: 2, image: '/placeholder.svg', name: 'Event Planner' },
    ],
  },
  {
    id: 2,
    image: '/images/app/restaurant1.webp',
    title: 'Cocktail Mixer',
    date: 'July 15, 2023',
    time: '8:00 PM - 11:00 PM',
    city: 'Los Angeles',
    address: '456 Oak St, Los Angeles, CA 90001',
    ageRange: '21-40',
    description:
      'Join us for a sophisticated cocktail mixer in the heart of LA. Mingle with like-minded professionals and enjoy delicious drinks.',
    price: 75,
    host: 'Jane Smith',
    capacity: 150,
    tags: ['Networking', 'Cocktails', 'Professionals'],
    dressCode: 'Business Casual',
    specialInstructions: 'Please RSVP in advance to secure your spot.',
    attendees: [
      { id: 1, image: '/images/users/user1.webp', name: 'John Doe' },
      { id: 2, image: '/images/users/user2.webp', name: 'Sarah Johnson' },
      { id: 3, image: '/images/users/user3.webp', name: 'Tom Wilson' },
      { id: 4, image: '/images/users/user4.webp', name: 'Emily Davis' },
    ],
    contact: {
      email: 'info@cocktailmixer.com',
      phone: '555-5678',
    },
    rating: 4.5,
    reviews: [
      {
        id: 1,
        user: 'John Doe',
        rating: 5,
        comment: 'Fantastic event, great networking opportunities!',
      },
      {
        id: 2,
        user: 'Sarah Johnson',
        rating: 4,
        comment:
          'Enjoyed the drinks and atmosphere, but could have been more organized.',
      },
    ],
    schedule: [
      { time: '8:00 PM', activity: 'Check-in and Welcome Drinks' },
      { time: '8:30 PM', activity: 'Networking' },
      { time: '9:30 PM', activity: 'Cocktail Tasting' },
      { time: '10:30 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Cocktail Bar' },
      { id: 2, image: '/placeholder.svg', name: 'Liquor Distributor' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Event Planner' },
      { id: 2, image: '/placeholder.svg', name: 'Catering Company' },
    ],
  },
  {
    id: 3,
    image: '/images/app/restaurant2.webp',
    title: 'Singles Hike',
    date: 'August 20, 2023',
    time: '10:00 AM - 2:00 PM',
    city: 'San Francisco',
    address: '789 Pine St, San Francisco, CA 94101',
    ageRange: '30-45',
    description:
      'Explore the beautiful nature of San Francisco while meeting new people on this singles hike.',
    price: 30,
    host: 'Emily Davis',
    capacity: 75,
    tags: ['Outdoors', 'Fitness', 'Singles'],
    dressCode: 'Active Wear',
    specialInstructions:
      'Please bring water, snacks, and comfortable hiking shoes.',
    attendees: [
      { id: 1, image: '/images/users/user1.webp', name: 'Bob Smith' },
      { id: 2, image: '/images/users/user2.webp', name: 'Jane Doe' },
      { id: 3, image: '/images/users/user3.webp', name: 'Tom Wilson' },
      { id: 4, image: '/images/users/user4.webp', name: 'Sarah Johnson' },
    ],
    contact: {
      email: 'info@singleshike.com',
      phone: '555-9012',
    },
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: 'Bob Smith',
        rating: 5,
        comment: 'Had a great time on the hike and met some awesome people!',
      },
      {
        id: 2,
        user: 'Jane Doe',
        rating: 4,
        comment:
          'The hike was beautiful, but could have been better organized.',
      },
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Check-in and Warm-up' },
      { time: '10:30 AM', activity: 'Hike Begins' },
      { time: '12:00 PM', activity: 'Lunch Break' },
      { time: '1:00 PM', activity: 'Hike Continues' },
      { time: '2:00 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Outdoor Gear Store' },
      { id: 2, image: '/placeholder.svg', name: 'Hiking Club' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Adventure Tour Company' },
      { id: 2, image: '/placeholder.svg', name: 'Healthy Snacks' },
    ],
  },
  {
    id: 4,
    image: '/images/app/restaurant3.webp',
    title: 'Rooftop Mixer',
    date: 'August 22, 2023',
    time: '10:00 AM - 2:00 PM',
    city: 'San Francisco',
    address: '789 Pine St, San Francisco, CA 94101',
    ageRange: '30-45',
    description:
      'Explore the beautiful nature of San Francisco while meeting new people on this singles hike.',
    price: 30,
    host: 'Emily Davis',
    capacity: 75,
    tags: ['Outdoors', 'Fitness', 'Singles'],
    dressCode: 'Active Wear',
    specialInstructions:
      'Please bring water, snacks, and comfortable hiking shoes.',
    attendees: [
      { id: 1, image: '/images/users/user1.webp', name: 'Bob Smith' },
      { id: 2, image: '/images/users/user2.webp', name: 'Jane Doe' },
      { id: 3, image: '/images/users/user3.webp', name: 'Tom Wilson' },
      { id: 4, image: '/images/users/user4.webp', name: 'Sarah Johnson' },
    ],
    contact: {
      email: 'info@singleshike.com',
      phone: '555-9012',
    },
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: 'Bob Smith',
        rating: 5,
        comment: 'Had a great time on the hike and met some awesome people!',
      },
      {
        id: 2,
        user: 'Jane Doe',
        rating: 4,
        comment:
          'The hike was beautiful, but could have been better organized.',
      },
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Check-in and Warm-up' },
      { time: '10:30 AM', activity: 'Hike Begins' },
      { time: '12:00 PM', activity: 'Lunch Break' },
      { time: '1:00 PM', activity: 'Hike Continues' },
      { time: '2:00 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Outdoor Gear Store' },
      { id: 2, image: '/placeholder.svg', name: 'Hiking Club' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Adventure Tour Company' },
      { id: 2, image: '/placeholder.svg', name: 'Healthy Snacks' },
    ],
  },
  {
    id: 5,
    image: '/images/app/restaurant4.webp',
    title: 'Pool Mixer',
    date: 'August 22, 2023',
    time: '10:00 AM - 2:00 PM',
    city: 'San Francisco',
    address: '789 Pine St, San Francisco, CA 94101',
    ageRange: '30-45',
    description:
      'Explore the beautiful nature of San Francisco while meeting new people on this singles hike.',
    price: 30,
    host: 'Emily Davis',
    capacity: 75,
    tags: ['Outdoors', 'Fitness', 'Singles'],
    dressCode: 'Active Wear',
    specialInstructions:
      'Please bring water, snacks, and comfortable hiking shoes.',
    attendees: [
      { id: 1, image: '/images/users/user1.webp', name: 'Bob Smith' },
      { id: 2, image: '/images/users/user2.webp', name: 'Jane Doe' },
      { id: 3, image: '/images/users/user3.webp', name: 'Tom Wilson' },
      { id: 4, image: '/images/users/user4.webp', name: 'Sarah Johnson' },
    ],
    contact: {
      email: 'info@singleshike.com',
      phone: '555-9012',
    },
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: 'Bob Smith',
        rating: 5,
        comment: 'Had a great time on the hike and met some awesome people!',
      },
      {
        id: 2,
        user: 'Jane Doe',
        rating: 4,
        comment:
          'The hike was beautiful, but could have been better organized.',
      },
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Check-in and Warm-up' },
      { time: '10:30 AM', activity: 'Hike Begins' },
      { time: '12:00 PM', activity: 'Lunch Break' },
      { time: '1:00 PM', activity: 'Hike Continues' },
      { time: '2:00 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Outdoor Gear Store' },
      { id: 2, image: '/placeholder.svg', name: 'Hiking Club' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Adventure Tour Company' },
      { id: 2, image: '/placeholder.svg', name: 'Healthy Snacks' },
    ],
  },
];

export default events;