"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  const events = [
    {
      id: 1,
      image: "/images/app/restaurant5.webp",
      title: "Speed Dating Event",
      date: "June 10, 2023",
      time: "7:00 PM - 10:00 PM",
      city: "New York City",
      address: "123 Main St, New York, NY 10001",
      ageRange: "25-35",
      description:
        "Join us for a fun and exciting speed dating event in the heart of the city. Meet new people and find your perfect match!",
      price: 50,
      host: "John Doe",
      capacity: 100,
      tags: ["Singles", "Networking", "Fun"],
      dressCode: "Casual",
      specialInstructions: "Please arrive on time and be ready to mingle.",
      attendees: [
        { id: 1, image: "/images/users/user1.webp", name: "Jane Doe" },
        { id: 2, image: "/images/users/user2.webp", name: "Bob Smith" },
        { id: 3, image: "/images/users/user3.webp", name: "Sarah Johnson" },
        { id: 4, image: "/images/users/user4.webp", name: "Tom Wilson" },
      ],
      contact: {
        email: "info@speeddate.com",
        phone: "555-1234",
      },
      rating: 4.8,
      reviews: [
        { id: 1, user: "Jane Doe", rating: 5, comment: "Had a great time at this event!" },
        { id: 2, user: "Bob Smith", rating: 4, comment: "Enjoyed the event, but could have been better organized." },
      ],
      schedule: [
        { time: "7:00 PM", activity: "Check-in" },
        { time: "7:30 PM", activity: "Speed Dating Rounds" },
        { time: "9:00 PM", activity: "Networking" },
        { time: "9:45 PM", activity: "Closing Remarks" },
      ],
      sponsors: [
        { id: 1, image: "/placeholder.svg", name: "Acme Corp" },
        { id: 2, image: "/placeholder.svg", name: "Widgets Inc" },
      ],
      partners: [
        { id: 1, image: "/placeholder.svg", name: "Dating App" },
        { id: 2, image: "/placeholder.svg", name: "Event Planner" },
      ],
    },
    {
      id: 2,
      image: "/images/app/restaurant1.webp",
      title: "Cocktail Mixer",
      date: "July 15, 2023",
      time: "8:00 PM - 11:00 PM",
      city: "Los Angeles",
      address: "456 Oak St, Los Angeles, CA 90001",
      ageRange: "21-40",
      description:
        "Join us for a sophisticated cocktail mixer in the heart of LA. Mingle with like-minded professionals and enjoy delicious drinks.",
      price: 75,
      host: "Jane Smith",
      capacity: 150,
      tags: ["Networking", "Cocktails", "Professionals"],
      dressCode: "Business Casual",
      specialInstructions: "Please RSVP in advance to secure your spot.",
      attendees: [
        { id: 1, image: "/images/users/user1.webp", name: "John Doe" },
        { id: 2, image: "/images/users/user2.webp", name: "Sarah Johnson" },
        { id: 3, image: "/images/users/user3.webp", name: "Tom Wilson" },
        { id: 4, image: "/images/users/user4.webp", name: "Emily Davis" },
      ],
      contact: {
        email: "info@cocktailmixer.com",
        phone: "555-5678",
      },
      rating: 4.5,
      reviews: [
        { id: 1, user: "John Doe", rating: 5, comment: "Fantastic event, great networking opportunities!" },
        {
          id: 2,
          user: "Sarah Johnson",
          rating: 4,
          comment: "Enjoyed the drinks and atmosphere, but could have been more organized.",
        },
      ],
      schedule: [
        { time: "8:00 PM", activity: "Check-in and Welcome Drinks" },
        { time: "8:30 PM", activity: "Networking" },
        { time: "9:30 PM", activity: "Cocktail Tasting" },
        { time: "10:30 PM", activity: "Closing Remarks" },
      ],
      sponsors: [
        { id: 1, image: "/placeholder.svg", name: "Cocktail Bar" },
        { id: 2, image: "/placeholder.svg", name: "Liquor Distributor" },
      ],
      partners: [
        { id: 1, image: "/placeholder.svg", name: "Event Planner" },
        { id: 2, image: "/placeholder.svg", name: "Catering Company" },
      ],
    },
    {
      id: 3,
      image: "/images/app/restaurant2.webp",
      title: "Singles Hike",
      date: "August 20, 2023",
      time: "10:00 AM - 2:00 PM",
      city: "San Francisco",
      address: "789 Pine St, San Francisco, CA 94101",
      ageRange: "30-45",
      description: "Explore the beautiful nature of San Francisco while meeting new people on this singles hike.",
      price: 30,
      host: "Emily Davis",
      capacity: 75,
      tags: ["Outdoors", "Fitness", "Singles"],
      dressCode: "Active Wear",
      specialInstructions: "Please bring water, snacks, and comfortable hiking shoes.",
      attendees: [
        { id: 1, image: "/images/users/user1.webp", name: "Bob Smith" },
        { id: 2, image: "/images/users/user2.webp", name: "Jane Doe" },
        { id: 3, image: "/images/users/user3.webp", name: "Tom Wilson" },
        { id: 4, image: "/images/users/user4.webp", name: "Sarah Johnson" },
      ],
      contact: {
        email: "info@singleshike.com",
        phone: "555-9012",
      },
      rating: 4.7,
      reviews: [
        { id: 1, user: "Bob Smith", rating: 5, comment: "Had a great time on the hike and met some awesome people!" },
        {
          id: 2,
          user: "Jane Doe",
          rating: 4,
          comment: "The hike was beautiful, but could have been better organized.",
        },
      ],
      schedule: [
        { time: "10:00 AM", activity: "Check-in and Warm-up" },
        { time: "10:30 AM", activity: "Hike Begins" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Hike Continues" },
        { time: "2:00 PM", activity: "Closing Remarks" },
      ],
      sponsors: [
        { id: 1, image: "/placeholder.svg", name: "Outdoor Gear Store" },
        { id: 2, image: "/placeholder.svg", name: "Hiking Club" },
      ],
      partners: [
        { id: 1, image: "/placeholder.svg", name: "Adventure Tour Company" },
        { id: 2, image: "/placeholder.svg", name: "Healthy Snacks" },
      ],
    },
  ]
  const [selectedEvent, setSelectedEvent] = useState(null)
  const handleEventClick = (event) => {
    setSelectedEvent(event)
  }
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Attended Events</h1>
      <div className={`${selectedEvent && 'w-1/3 lg:grid-cols-1'} transition-all ease-in-out grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleEventClick(event)}
          >
            <img
              src={event.image}
              alt={event.title}
              width={400}
              height={225}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{event.title}</h2>
              <div className="flex items-center mb-2">
                <CalendarIcon className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center mb-2">
                <ClockIcon className="w-4 h-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center mb-2">
                <MapPinIcon className="w-4 h-4 mr-2" />
                <span>{event.city}</span>
              </div>
              <div className="flex items-center">
                <LocateIcon className="w-4 h-4 mr-2" />
                <span>{event.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div className="fixed top-0 right-0 w-full md:w-1/2 h-full bg-white dark:bg-gray-950 shadow-lg overflow-y-auto flex flex-col">
          <div>
            <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                width={600}
                height={500}
                className="w-full h-80 object-cover object-center"
            />
            <Button variant="secondary" className="fixed right-8 top-5" size="icon" onClick={() => setSelectedEvent(null)}>
                <XIcon className="w-6 h-6" />
            </Button>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

              <div>
                <div className="flex justify-space-around gap-x-6 flex-wrap mb-6">
                    <div className="flex items-center mb-2">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span>{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center mb-2">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    <span>{selectedEvent.city}</span>
                    </div>
                    <div className="flex items-center mb-2">
                    <LocateIcon className="w-4 h-4 mr-2" />
                    <span>{selectedEvent.address}</span>
                    </div>
                    <div className="flex items-center mb-2">
                    <UserIcon className="w-4 h-4 mr-2" />
                    <span>Hosted by {selectedEvent.host}</span>
                    </div>
                    <div className="flex items-center mb-2">
                    <UsersIcon className="w-4 h-4 mr-2" />
                    <span>{selectedEvent.ageRange}</span>
                    </div>
                </div>
                <div className="mb-4">
                  <p>{selectedEvent.description}</p>
                </div>
                <div className="flex items-center mb-2">
                  <TagIcon className="w-4 h-4 mr-2" />
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Attendees</h3>
              <div className="flex flex-wrap gap-4">
                {selectedEvent.attendees.map((attendee) => (
                  <div key={attendee.id} className="flex items-center gap-2">
                    <Avatar>
                      <img src={attendee.image} alt={attendee.name} />
                      <AvatarFallback>{attendee.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    {/* <span>{attendee.name}</span> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto align-bottom">
              <Button variant="default" className="w-full">
                View Scorecard
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function ShirtIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}