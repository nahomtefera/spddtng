'use client';
import React, { useEffect, useState } from 'react';
// events
// import getEventbriteEvents from '@/lib/mockEvents';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import { FilterIcon, ListOrderedIcon } from '@/lib/customIcons';
import { Checkbox } from '@/components/ui/checkbox';
import EventCard from '@/components/eventCard';
import EventCardSidebar from '@/components/eventCardSidebar';
import Loading from '@/components/loading';

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  const [filters, setFilters] = useState({
    age: [18, 50],
    distance: [0, 50],
    interests: [],
  });
  const [sortBy, setSortBy] = useState('newest');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  useEffect(() => {
    fetch(`api/eventbrite/events`, { cache: 'no-store' })
      .then((data) => data.json())
      .then((eventsResponse) => eventsResponse.events)
      .then((events) => setEvents(events));
  }, []);

  console.log('upcoming events: ', events);

  return (
    <div className="container px-4 md:px-6">
      <div className="space-y-6 text-left">
        <div className="flex items-center">
          <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl">
            Upcoming Events
          </h2>
          <div className="w-[150px] h-[3px] bg-[#ffabab] ml-[20px]"></div>
        </div>
        <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Our events provide a refined way to date, making it a comfortable and
          delightful experience to find a special connection.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 mt-12">
        <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
          <Input
            type="text"
            placeholder="Search matches..."
            className="w-full md:w-96"
          />
          <FilterDropdown filters={filters} setFilters={setFilters} />
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      {/* Events */}
      <div
        className={`${
          selectedEvent && 'w-1/3'
        } transition-all ease-in-out grid w-full gap-4 gap-y-12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]`}
      >
        {events.length > 0 ? (
          events
            .slice(2)
            .map((event) => (
              <EventCard
                key={event.id}
                handleEventClick={handleEventClick}
                event={event}
              />
            ))
        ) : (
          <Loading />
        )}
      </div>

      {/* Event info sidebar */}
      {selectedEvent && (
        <EventCardSidebar
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
        />
      )}
    </div>
  );
}

const FilterDropdown = ({ filters, setFilters }) => (
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
          {[
            'Hiking',
            'Travel',
            'Cooking',
            'Technology',
            'Outdoors',
            'Networking',
            'Art',
            'Music',
            'Food',
            'Fitness',
            'Sports',
            'Social',
            'Sustainability',
            'Books',
          ].map((interest) => (
            <Checkbox key={interest} value={interest}>
              {interest}
            </Checkbox>
          ))}
        </div>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SortDropdown = ({ sortBy, setSortBy }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="flex items-center gap-2">
        <ListOrderedIcon className="w-4 h-4" />
        Sort by
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-[200px] p-2">
      <DropdownMenuRadioGroup
        value={sortBy}
        onValueChange={setSortBy}
        className="space-y-2"
      >
        <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="highest">
          Match Percentage (Highest)
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="lowest">
          Match Percentage (Lowest)
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);
