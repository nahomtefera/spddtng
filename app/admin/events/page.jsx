'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Label } from '@/components/ui/label';
// custom icons
import { CalendarIcon, SearchIcon } from '@/lib/customIcons';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';

export default function Component() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Tech Meetup',
      description:
        'A gathering of tech enthusiasts to discuss the latest trends',
      date: '2023-06-15',
      city: 'San Francisco',
      host: 'John Doe',
      address: '123 Main St, San Francisco, CA 94101',
      age_range: '18-35',
      img_src: '/images/app/restaurant1.webp',
      created_at: '2023-05-01',
    },
    {
      id: 2,
      title: 'Art Exhibition',
      description: 'Showcase of local artists and their works',
      date: '2023-07-01',
      city: 'New York',
      host: 'Jane Smith',
      address: '456 Broadway, New York, NY 10001',
      age_range: '16+',
      img_src: '/images/app/restaurant2.webp',
      created_at: '2023-05-15',
    },
    {
      id: 3,
      title: 'Cooking Class',
      description: 'Learn to make delicious meals from a professional chef',
      date: '2023-08-20',
      city: 'Chicago',
      host: 'Alex Johnson',
      address: '789 Michigan Ave, Chicago, IL 60601',
      age_range: '12-65',
      img_src: '/images/app/restaurant3.webp',
      created_at: '2023-06-01',
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    city: '',
    host: '',
    address: '',
    age_range: '',
    img_src: '',
  });
  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };
  const handleCreateEvent = () => {
    const event = {
      id: events.length + 1,
      ...newEvent,
      created_at: new Date().toISOString(),
    };
    setEvents([...events, event]);
    setShowModal(false);
    setNewEvent({
      title: '',
      description: '',
      date: '',
      city: '',
      host: '',
      address: '',
      age_range: '',
      img_src: '',
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <header className="flex h-[60px] lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <CalendarIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                />
              </div>
            </form>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Event Manager</h1>
            <Button onClick={() => setShowModal(true)}>Create Event</Button>
          </div>

          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Host</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Age Range</TableHead>
                  <TableHead>Created At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>
                      <img
                        src={event.img_src}
                        width={80}
                        height={80}
                        alt={event.title}
                        className="rounded-md aspect-square object-cover object-center"
                      />
                    </TableCell>
                    <TableCell>{event.title}</TableCell>
                    <TableCell>{event.description}</TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>{event.city}</TableCell>
                    <TableCell>{event.host}</TableCell>
                    <TableCell>{event.address}</TableCell>
                    <TableCell>{event.age_range}</TableCell>
                    <TableCell>{event.created_at}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create Event</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={newEvent.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={newEvent.date}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={newEvent.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={newEvent.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="host">Host</Label>
                    <Input
                      id="host"
                      name="host"
                      value={newEvent.host}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={newEvent.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age_range">Age Range</Label>
                    <Input
                      id="age_range"
                      name="age_range"
                      value={newEvent.age_range}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="img_src">Image URL</Label>
                    <Input
                      id="img_src"
                      name="img_src"
                      value={newEvent.img_src}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateEvent}>Create Event</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </>
  );
}
