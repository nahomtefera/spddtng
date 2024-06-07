import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
// events
import events from "@/lib/mockEvents"

export default function UpcomingEvents() {


    return (
        <div className="container px-4 md:px-6">
          <div className="space-y-6 text-left">
            <div className="flex items-center">
                <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
                <div className="w-[150px] h-[3px] bg-[#ffabab] ml-[20px]"></div>
            </div>
            <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our events provide a refined way to date, making it a comfortable and delightful experience to find a special connection.
            </p>
          </div>
        {/* Filters */}
        <div className="flex flex-col pt-10 gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid grid-cols-3 gap-4">
              <Select>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="san-francisco">San Francisco</SelectItem>
                  <SelectItem value="san-diego">San Diego</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Age" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ages</SelectItem>
                  <SelectItem value="18-plus">18+</SelectItem>
                  <SelectItem value="21-plus">21+</SelectItem>
                </SelectContent>
              </Select>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="h-10 w-full">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Date
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 max-w-[276px]">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
            <Button variant="outline">
              <FilterIcon className="mr-2 h-4 w-4" />
              Filter Events
            </Button>
          </div>

        {/* Events */}
        <div className="grid gap-10 pt-10 md:grid-cols-2 lg:grid-cols-3">
            {
                events.map(event => {
                    return( 
                        <Card key={event.id} className="overflow-hidden rounded-lg cursor-pointer shadow-xs hover:shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2">
                            <div className="relative">
                                <div className="absolute top-4 left-4 flex items-center gap-4">
                                  <div className=" bg-[#fff] font-semibold text-black px-3 py-1 rounded-md text-sm font-medium dark:bg-gray-50 dark:text-gray-900">
                                      {event.city}
                                  </div>
                                  <div className="flex items-center gap-2 bg-[#000000] font-semibold text-white px-3 py-1 rounded-md text-sm font-medium dark:bg-gray-50 dark:text-gray-900">
                                      <UserIcon className="h-4 w-4" />
                                      {event.ageRange}
                                  </div>
                                </div>
                                
                                <Image
                                    src={event.imgSrc}
                                    alt="Event 1"
                                    width={600}
                                    height={400}
                                    className="aspect-[16/9] w-full rounded-t-lg object-cover"
                                />
                            </div>
                            
                            <CardContent className="space-y-3 p-4 sm:p-6">
                              <div className="space-y-1">
                                <h3 className="text-xl font-semibold">{event.title}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                  <CalendarIcon className="h-4 w-4" />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                  <MapPinIcon className="h-4 w-4" />
                                  <span>{event.address}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                  <UserIcon className="h-4 w-4" />
                                  <span>{event.ageRange}</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {event.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="text-lg font-semibold">{event.price}</div>
                                <Button variant="outline" size="sm">
                                  Buy Tickets
                                </Button>
                              </div>
                            </CardContent>
                        </Card>
                    )
                })
            }
          </div>
        </div>
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