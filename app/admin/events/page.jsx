'use client';

import { useEffect, useState } from 'react';
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
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
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
import { CalendarIcon, SearchIcon, TrashIcon } from '@/lib/customIcons';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import Loading from '@/components/loading';
import axios from 'axios';

export default function Component() {
  const [events, setEvents] = useState([]);
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

  const [filters, setFilters] = useState({
    age: [18, 50],
    distance: [0, 50],
    interests: [],
  });
  const [sortBy, setSortBy] = useState('newest');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDeleteEvent = async (eventId) => {
    console.log('handledelete called')
    // setLoading(true);
    try {
      const response = await axios.post(`/api/eventbrite/events/delete/${eventId}`);
      console.log('Event deleting:', response.data);
      // Optionally, refresh the page or update the event state
      // router.reload();
    } catch (error) {
      console.error('Error deleting event:', error.message);
    } finally {
      // setLoading(false);
      fetch(`/api/eventbrite/events`, { cache: 'no-store' })
        .then((data) => data.json())
        .then((eventsResponse) => eventsResponse.events)
        .then((events) => setEvents(events));
    }
  };

  const handlePublish = async (eventId) => {
    console.log('handlepublish called')
    // setLoading(true);
    try {
      const response = await axios.post(`/api/eventbrite/events/publish/${eventId}`);
      console.log('Event published:', response.data);
      // Optionally, refresh the page or update the event state
      // router.reload();
    } catch (error) {
      console.error('Error publishing event:', error.message);
    } finally {
      // setLoading(false);
      fetch(`/api/eventbrite/events`, { cache: 'no-store' })
        .then((data) => data.json())
        .then((eventsResponse) => eventsResponse.events)
        .then((events) => setEvents(events));
    }
  };

  const handleUnPublish = async (eventId) => {
    console.log('handlepublish called')
    // setLoading(true);
    try {
      const response = await axios.post(`/api/eventbrite/events/unpublish/${eventId}`);
      console.log('Event unpublished:', response.data);
      // Optionally, refresh the page or update the event state
      // router.reload();
    } catch (error) {
      console.error('Error unpublishing event:', error.message);
    } finally {
      // setLoading(false);
      fetch(`/api/eventbrite/events`, { cache: 'no-store' })
        .then((data) => data.json())
        .then((eventsResponse) => eventsResponse.events)
        .then((events) => setEvents(events));
    }
  };


  useEffect(() => {
    console.log('fetching events...');
    fetch(`/api/eventbrite/events`, { cache: 'no-store' })
      .then((data) => data.json())
      .then((eventsResponse) => eventsResponse.events)
      .then((events) => setEvents(events));
  }, []);

  console.log('events: ', events);

  const handleRowClick = (event) => {
    
    setSelectedEvent(event);
    setShowModal(true)

  }

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
            <Table className='font-normal text-base'>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead> </TableHead>
                  <TableHead> </TableHead>
                  <TableHead> </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* {events.length == 0 && <TableCell><Loading /></TableCell>} */}
                {events.map((event) => (
                  <TableRow key={event.id} className='cursor-pointer' onClick={()=>{handleRowClick(event)}}>
                    <TableCell></TableCell>
                    <TableCell>
                      <Image
                        src={event.logo?.url || '/images/app/image-not-found.png'}
                        width={80}
                        height={80}
                        alt={event.name.text}
                        className="rounded-md aspect-square object-cover object-center"
                        unoptimized
                      />
                    </TableCell>
                    <TableCell>{event.name.text}</TableCell>
                    <TableCell>{event.start.local}</TableCell>
                    <TableCell>{event.venue_id}</TableCell>
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          {
                            event.status == 'live'
                              ? <Button variant="destructive" className='w-full'>Pause</Button>
                              : <Button className='bg-blue-600 w-full hover:bg-blue-700'>
                                  Publish
                                </Button>
                          }
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                          <AlertDialogTitle>
                            {event.status == 'live' ? 'Are you sure you want to pause this event?' : 'Are you sure you want to publish this event?'}
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            {event.status == 'live' ? 'This action will pause the event and it will no longer be publicly visible.' : 'This action will publish the event and it will become publicly visible.'}
                          </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation(); // Prevent click event from bubbling up
                                event.status == 'live'
                                  ? handleUnPublish(event.id)
                                  : handlePublish(event.id)
                              }}>
                              {event.status == 'live' ? 'Pause' : 'Publish'}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <TrashIcon className="hover:text-red-600 w-7 h-7"/>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you sure you want to delete this event?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This event and all its data will be permanently deleted.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={()=>{handleDeleteEvent(event.id)}}>Delete</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{selectedEvent ? 'Edit Event' : 'Create Event'}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={selectedEvent ? selectedEvent.name.text : newEvent.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={selectedEvent ? selectedEvent.start.local.split('T')[0] : newEvent.date}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={selectedEvent ? selectedEvent.summary : newEvent.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={selectedEvent ? selectedEvent.venue_id : newEvent.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="host">Host</Label>
                    <Input
                      id="host"
                      name="host"
                      value={selectedEvent ? selectedEvent.host : newEvent.host}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={selectedEvent ? selectedEvent.address : newEvent.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age_range">Age Range</Label>
                    <Input
                      id="age_range"
                      name="age_range"
                      value={selectedEvent ? selectedEvent.age_range : newEvent.age_range}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="img_src">Image URL</Label>
                    <Input
                      id="img_src"
                      name="img_src"
                      value={selectedEvent ? selectedEvent.logo?.url : newEvent.img_src}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateEvent}>{selectedEvent ? 'Update Event' : 'Create Event'}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </>
  );
}
