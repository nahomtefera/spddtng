"use client"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useMemo, useState } from "react"

export default function Component() {
    const [filters, setFilters] = useState({
        age: [18, 50],
        distance: [0, 50],
        interests: [],
    })  
    const [sortBy, setSortBy] = useState("newest")
    
    const matches = [
    {
      id: 1,
      name: "Emily Wilkins",
      age: 28,
      location: "New York, NY",
      bio: "Adventurous and outgoing, I love exploring new places and trying new things. Let's connect!",
      interests: ["Travel", "Cooking", "Hiking"],
      match: 90,
      image: "/images/users/user2.webp",
    },
    {
      id: 2,
      name: "Michael Johnson",
      age: 32,
      location: "Los Angeles, CA",
      bio: "I'm a passionate entrepreneur looking to meet someone who shares my drive and ambition.",
      interests: ["Startups", "Technology", "Fitness"],
      match: 85,
      image: "/images/users/user4.webp",
    },
    {
      id: 3,
      name: "Sarah Lee",
      age: 25,
      location: "Chicago, IL",
      bio: "I love the arts and culture. Let's explore the city together and see where it takes us.",
      interests: ["Art", "Music", "Museums"],
      match: 92,
      image: "/images/users/user1.webp",
    }
  ];

  const filteredMatches = useMemo(() => {
    return matches
      .filter((match) => {
        return (
          match.age >= filters.age[0] &&
          match.age <= filters.age[1] &&
          match.location.split(", ")[1] === filters.distance[1]
        )
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "newest":
            return new Date(b.createdAt) - new Date(a.createdAt)
          case "highest":
            return b.matchPercentage - a.matchPercentage
          case "lowest":
            return a.matchPercentage - b.matchPercentage
          default:
            return 0
        }
      })
  }, [filters, sortBy])

  return (
    <>
     <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Matches</h1>
          <p className="text-gray-500 dark:text-gray-400">Find your perfect match</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Input type="text" placeholder="Search matches..." className="w-96" />
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
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {matches.map((match) => (
              <div
                key={match.id}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
              >
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Profile</span>
                </Link>
                <div className="relative">
                  <img
                    src={match.image}
                    alt={match.name}
                    width={500}
                    height={500}
                    className="object-cover w-full h-64"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent" /> */}
                </div>
                <div className="bg-white p-4 dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">{match.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <LocateIcon className="w-4 h-4" />
                        {match.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <HeartIcon className="w-5 h-5 fill-primary" />
                      {match.match}%
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{match.bio}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {match.interests.map((interest, index) => (
                      <div
                        key={index}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium dark:bg-gray-800"
                      >
                        {interest}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                    <Button size="sm">Like</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
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


function FilterIcon(props) {
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
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    )
  }
  
  function ListOrderedIcon(props) {
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
        <line x1="10" x2="21" y1="6" y2="6" />
        <line x1="10" x2="21" y1="12" y2="12" />
        <line x1="10" x2="21" y1="18" y2="18" />
        <path d="M4 6h1v4" />
        <path d="M4 10h2" />
        <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
      </svg>
    )
  }
  
  
  function MessageCircleIcon(props) {
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
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    )
  }