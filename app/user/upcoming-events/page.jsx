"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { useMemo, useState } from "react"
// Custom icons
import {CalendarIcon, ClockIcon, DollarSignIcon, InfoIcon, LocateIcon, MailIcon, MapPinIcon, PhoneIcon, ShirtIcon, StarIcon, TagIcon, UserIcon, UsersIcon, XIcon, FilterIcon, ListOrderedIcon} from '../_components/customIcons'

export default function Component() {
  const [filters, setFilters] = useState({
    age: [18, 50],
    distance: [0, 50],
    interests: [],
})  
const [sortBy, setSortBy] = useState("newest")


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
    {
      id: 4,
      image: "/images/app/restaurant3.webp",
      title: "Rooftop Mixer",
      date: "August 22, 2023",
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
    {
      id: 5,
      image: "/images/app/restaurant4.webp",
      title: "Pool Mixer",
      date: "August 22, 2023",
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
         <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10">

      <div>
          <h1 className="text-2xl font-bold tracking-tight">My upcoming Events</h1>
          <p className="text-gray-500 dark:text-gray-400">Find your perfect match</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        
        <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
          <Input type="text" placeholder="Search matches..." className="w-full md:w-96" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FilterIcon className="w-4 h-4" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold mb-2">Age</h3>
                <div />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Distance</h3>
                <div />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Interests</h3>
                <div className="grid gap-2">
                  <Checkbox value="Hiking">Hiking</Checkbox>
                  <Checkbox value="Travel">Travel</Checkbox>
                  <Checkbox value="Cooking">Cooking</Checkbox>
                  <Checkbox value="Technology">Technology</Checkbox>
                  <Checkbox value="Outdoors">Outdoors</Checkbox>
                  <Checkbox value="Networking">Networking</Checkbox>
                  <Checkbox value="Art">Art</Checkbox>
                  <Checkbox value="Music">Music</Checkbox>
                  <Checkbox value="Food">Food</Checkbox>
                  <Checkbox value="Fitness">Fitness</Checkbox>
                  <Checkbox value="Sports">Sports</Checkbox>
                  <Checkbox value="Social">Social</Checkbox>
                  <Checkbox value="Sustainability">Sustainability</Checkbox>
                  <Checkbox value="Books">Books</Checkbox>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <ListOrderedIcon className="w-4 h-4" />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] p-2">
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy} className="space-y-2">
                <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="highest">Match Percentage (Highest)</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="lowest">Match Percentage (Lowest)</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className={`${selectedEvent && 'w-1/3'} transition-all ease-in-out grid w-full gap-4 gap-y-12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(300px,400px))]`}>
        {events.slice(0,2).map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleEventClick(event)}
          >
            <div className="relative">
                <div className="absolute top-4 right-4 flex items-center gap-4">
                    <div className=" bg-[#fff] font-semibold text-black px-3 py-1 rounded-md text-sm  dark:bg-gray-50 dark:text-gray-900">
                        {event.city}
                    </div>
                    <div className="flex items-center gap-2 bg-[#fff]  text-black font-semibold px-3 py-1 rounded-md text-sm  dark:bg-gray-50 dark:text-gray-900">
                        <UserIcon className="h-4 w-4" />
                        {event.ageRange}
                    </div>
                </div>
                <img
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                    />
            </div>
            
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
        <div className="fixed top-0 right-0 w-full md:w-1/2 h-full bg-white dark:bg-gray-950 shadow-lg overflow-y-auto flex flex-col " style={{marginTop: 0}}>
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
            {/* <div className="mt-auto align-bottom">
              <Link href="/user/attended-events/scorecard" prefetch={false}>
                <Button variant="default" className="w-full">
                    View Scorecard
                </Button>
              </Link>
            </div> */}
          </div>
        </div>
      )}

        <div>
          <h1 className="text-2xl font-bold tracking-tight">Upcoming Events in your area</h1>
        </div>

        <div className={`${selectedEvent && 'w-1/3'} transition-all ease-in-out grid w-full gap-4 gap-y-12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(300px,400px))]`}>
        {events.slice(2, events.length).map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleEventClick(event)}
          >
            <div className="relative">
                <div className="absolute top-4 right-4 flex items-center gap-4">
                    <div className=" bg-[#fff] font-semibold text-black px-3 py-1 rounded-md text-sm  dark:bg-gray-50 dark:text-gray-900">
                        {event.city}
                    </div>
                    <div className="flex items-center gap-2 bg-[#fff]  text-black font-semibold px-3 py-1 rounded-md text-sm  dark:bg-gray-50 dark:text-gray-900">
                        <UserIcon className="h-4 w-4" />
                        {event.ageRange}
                    </div>
                </div>
                <img
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                    />
            </div>
            
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
      </div>
    </>
  )
}
