'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
// Custom icons
import {
  FilterIcon,
  ListOrderedIcon,
} from '@/lib/customIcons';
import EventCard from '@/components/eventCard'
import EventCardSidebar from '@/components/eventCardSidebar'
import events from './eventsMockData'

export default function Component() {
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

  return (
    <>
      <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            My upcoming Events
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Find your perfect match
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
            <Input type="text" placeholder="Search matches..." className="w-full md:w-96" />
            <FilterDropdown filters={filters} setFilters={setFilters} />
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          </div>
        </div>

        <div className={`${selectedEvent && 'w-1/3'} transition-all ease-in-out grid w-full gap-4 gap-y-12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(300px,400px))]`}>
          {events.slice(0, 2).map(event => (
            <EventCard key={event.id} event={event} handleEventClick={handleEventClick} />
          ))}
        </div>
        
        {/* Nearby Events */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Upcoming Events in your area
          </h1>
        </div>

        <div className={`${selectedEvent && 'w-1/3'} transition-all ease-in-out grid w-full gap-4 gap-y-12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(300px,400px))]`}>
          {events.slice(2).map(event => (
            <EventCard key={event.id} handleEventClick={handleEventClick} event={event} />
          ))}
        </div>
        
        {/* Event info sidebar */}
        {selectedEvent && <EventCardSidebar selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} />}
      </div>
    </>
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
          {['Hiking', 'Travel', 'Cooking', 'Technology', 'Outdoors', 'Networking', 'Art', 'Music', 'Food', 'Fitness', 'Sports', 'Social', 'Sustainability', 'Books'].map(interest => (
            <Checkbox key={interest} value={interest}>{interest}</Checkbox>
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
      <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy} className="space-y-2">
        <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="highest">Match Percentage (Highest)</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="lowest">Match Percentage (Lowest)</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);
