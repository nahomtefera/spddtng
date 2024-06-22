'use client';

import { useEffect, useState } from 'react';
import moment from 'moment';
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
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';
// custom icons
import {
  CalendarIcon,
  CloudUploadIcon,
  SearchIcon,
  TrashIcon,
  XIcon,
  ShuffleIcon
} from '@/lib/customIcons';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import Loading from '@/components/loading';
import axios from 'axios';
import { toast } from 'sonner';
import formatDate from '@/lib/formatDate';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Component() {
  const [events, setEvents] = useState([]);
  const [venues, setVenues] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [publishAlertEventId, setPublishAlertEventId] = useState(null);
  const [deleteAlertEventId, setDeleteAlertEventId] = useState(null);
  const [isLoadingCreateEvent, setIsLoadingCreateEvent] = useState(false)
  const [files, setFiles] = useState([]);
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 1) {
      // Show an error message: "Only one file allowed"
      return;
    }
  
    const newFile = {
      file: e.dataTransfer.files[0],
      url: URL.createObjectURL(e.dataTransfer.files[0]),
    };
    setFiles([newFile]); // Replace or update the existing file array
  };
  
  const handleFileSelect = (e) => {
    if (e.target.files.length > 1) {
      // Show an error message: "Only one file allowed"
      return;
    }
  
    const newFile = {
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    };
    setFiles([newFile]); // Replace or update the existing file array
  };
  const handleRemoveFile = (index) => {
    if (files.length > 0) {
      URL.revokeObjectURL(files[0].url); // Revoke the URL to avoid memory leaks
      setFiles([]);
    }
  };

  useEffect(() => {
    console.log('image added: ', files)
  }, [files])

  const [newEvent, setNewEvent] = useState({
    name: '',
    summary: 'Get ready to meet new people and potentially find a spark in just a few minutes at our Speed Dating event!',
    date: moment().format("YYYY-MM-DD"),
    start_time: '20:00',
    end_time: '22:00',
    venue_id: '',
    img_src: '',
  });

  const [updatedEvent, setUpdatedEvent] = useState({
    name: '',
    summary: '',
    date: '',
    start_time: '',
    end_time: '',
    venue_id: '',
    img_src: '',
  });

  const handleInputChange = (e, newOrUpdate) => {
    if(newOrUpdate == 'new') {
      setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    } else {
      setUpdatedEvent({ ...updatedEvent, [e.target.name]: e.target.value });
    }
  };

  // useEffect(() => {
  //   console.log('New event after update:', newEvent);
  // }, [newEvent]);
  // useEffect(() => {
  //   console.log('Updated event after update:', updatedEvent);
  // }, [updatedEvent]);

  const handleVenueChange = (id, newOrUpdate) => {
    if(newOrUpdate == 'new') {
      setNewEvent({...newEvent, venue_id: id})
      console.log('newEvent: ', newEvent)  
    } else {
      setUpdatedEvent({...updatedEvent, venue_id: id})
      console.log('updatedEvent: ', updatedEvent)  
    }
  }

  const handleStartTimeChange = (time, newOrUpdate) => {
    if(newOrUpdate == 'new') {
      setNewEvent({...newEvent, start_time: time})
      console.log('newEvent: ', newEvent)  
    } else {
      setUpdatedEvent({...updatedEvent, start_time: time})
      console.log('updatedEvent: ', updatedEvent)  
    }
  }
  const handleEndTimeChange = (time, newOrUpdate) => {
    if(newOrUpdate == 'new') {
      setNewEvent({...newEvent, end_time: time})
      console.log('newEvent: ', newEvent)  
    } else {
      setUpdatedEvent({...updatedEvent, end_time: time})
      console.log('updatedEvent: ', updatedEvent)  
    }
  }
  const [filters, setFilters] = useState({
    age: [18, 50],
    distance: [0, 50],
    interests: [],
  });
  const [sortBy, setSortBy] = useState('newest');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Delete event
  const handleDeleteEvent = async (eventId) => {
    console.log('handledelete called');
    try {
      const response = await axios.post(
        `/api/eventbrite/events/delete/${eventId}`
      );
      console.log('Event deleting:', response.data);
      setDeleteAlertEventId(null);
      toast.success('Event DELETED successfully 😍');
    } catch (error) {
      console.error('Error deleting event:', error.message);
      setDeleteAlertEventId(null);
      toast.error(`Error deleting event: ${error.message}`);
    } finally {
      // refresh events
      console.log('refresh events');
      fetch(`/api/eventbrite/events`, { cache: 'no-store' })
        .then((data) => data.json())
        .then((eventsResponse) => eventsResponse.events)
        .then((events) => setEvents(events));
    }
  };

  // Publish event
  const handlePublish = async (eventId) => {
    console.log('handlepublish called');
    try {
      const response = await axios.post(
        `/api/eventbrite/events/publish/${eventId}`
      );
      console.log('Event published:', response.data);
      setPublishAlertEventId(null);
      toast.success('Event PUBLISHED successfully 😍');
    } catch (error) {
      console.error('Error publishing event:', error.message);
      setPublishAlertEventId(null);
      toast.error(`Error publishing event: ${error.message}`);
    } finally {
      // refresh events
      console.log('refresh events');
      fetch(`/api/eventbrite/events`, { cache: 'no-store' })
        .then((data) => data.json())
        .then((eventsResponse) => eventsResponse.events)
        .then((events) => setEvents(events));
    }
  };

  // Unpublish event
  const handleUnPublish = async (eventId) => {
    console.log('handlepublish called');
    try {
      const response = await axios.post(
        `/api/eventbrite/events/unpublish/${eventId}`
      );
      console.log('Event published:', response.data);
      setPublishAlertEventId(null);
      toast.success('Event UNPUBLISHED successfully 😍');
    } catch (error) {
      console.error('Error unpublishing event:', error.message);
      setPublishAlertEventId(null);
      toast.error(`Error unpublishing event: ${error.message}`);
    } finally {
      // refresh events
      console.log('refresh events');
      fetch(`/api/eventbrite/events`, { cache: 'no-store' })
        .then((data) => data.json())
        .then((eventsResponse) => eventsResponse.events)
        .then((events) => setEvents(events));
    }
  };

  // Pull events from eventbrite
  useEffect(() => {
    // console.log('fetching events...');
    fetch(`/api/eventbrite/events`, { cache: 'no-store' })
      .then((data) => data.json())
      .then((eventsResponse) => eventsResponse.events)
      .then((events) => setEvents(events));
  }, []);

  // Pull venues from eventbrite
  useEffect(() => {
    console.log('fetching venues...');
    fetch(`/api/eventbrite/venues`, { cache: 'no-store' })
      .then((data) => data.json())
      .then((venuesResponse) => venuesResponse.venues)
      .then((venues) => {
        const uniqueVenues = venues.filter((venue, index) => venues.findIndex(v => v.address.address_1 === venue.address.address_1) === index);
        // const uniqueVenuesArr = [...uniqueVenues]
        setVenues(uniqueVenues)
      });
  }, []);
  // console.log('events: ', events);
  // console.log('venues: ', venues);

  // open modal on row click
  const handleRowClick = (event) => {
    setUpdatedEvent({
      name: event.name.text,
      summary: event.summary,
      date: moment(event.start.local).format("YYYY-MM-DD"),
      start_time: moment(event.start.local).format("HH:mm"),
      end_time: moment(event.end.local).format("HH:mm"),
      venue_id: event.venue?.id,
      img_src: '',
    });
    setSelectedEvent(event);
    setShowModal(true);
  };

  // Search header
  const Header = () => {
    return (
      <header className="flex h-[60px] lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link href="#" className="lg:hidden" prefetch={false}>
          <CalendarIcon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>

        {/* SEARCH */}
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
    );
  };

  // List of events
  const EventsTable = () => {
    return (
      <div className="border shadow-sm rounded-lg">
        <Table className="font-normal text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="font-normal text-gray-900"></TableHead>
              <TableHead className="font-normal text-gray-900">Image</TableHead>
              <TableHead className="font-normal text-gray-900">Title</TableHead>
              <TableHead className="font-normal text-gray-900">Date</TableHead>
              <TableHead className="font-normal text-gray-900">Venue</TableHead>
              <TableHead className="font-normal text-gray-900">City</TableHead>
              <TableHead className="font-normal text-gray-900"> </TableHead>
              <TableHead className="font-normal text-gray-900"> </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow
                key={event.id}
                className="cursor-pointer"
                onClick={() => {
                  handleRowClick(event);
                }}
              >
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
                <TableCell>{formatDate(event.start.local, 'long')}</TableCell>
                <TableCell>{event.venue?.name}</TableCell>
                <TableCell>{event.venue?.address.city}</TableCell>
                <TableCell
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <AlertDialog
                    open={publishAlertEventId === event.id}
                    onOpenChange={(isOpen) =>
                      setPublishAlertEventId(isOpen ? event.id : null)
                    }
                  >
                    <AlertDialogTrigger asChild>
                      {event.status == 'live' ? (
                        <Button variant="destructive" className="w-full">
                          Unpublish
                        </Button>
                      ) : (
                        <Button className="bg-blue-600 w-full hover:bg-blue-700">
                          Publish
                        </Button>
                      )}
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {event.status == 'live'
                            ? 'Are you sure you want to pause this event?'
                            : 'Are you sure you want to publish this event?'}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          {event.status == 'live'
                            ? 'This action will pause the event and it will no longer be publicly visible.'
                            : 'This action will publish the event and it will become publicly visible.'}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation(); // Prevent click event from bubbling up
                            event.status == 'live'
                              ? handleUnPublish(event.id)
                              : handlePublish(event.id);
                          }}
                        >
                          {event.status == 'live' ? 'Pause' : 'Publish'}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
                <TableCell></TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <AlertDialog
                    open={deleteAlertEventId === event.id}
                    onOpenChange={(isOpen) =>
                      setDeleteAlertEventId(isOpen ? event.id : null)
                    }
                  >
                    <AlertDialogTrigger asChild>
                      <TrashIcon className="hover:text-red-600 w-7 h-7" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you sure you want to delete this event?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This event and all its
                          data will be permanently deleted.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            handleDeleteEvent(event.id);
                          }}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  const generateRandomName = (newOrUpdate) => {
    const adjectives = ['Exciting', 'Fun', 'Energetic', 'Lively', 'Charming'];
    const nouns = ['Event', 'Night', 'Meetup', 'Gathering', 'Mixer'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    const randomTitle = `Admin Portal - ${randomAdjective} Speed Dating ${randomNoun}`

    if(newOrUpdate == 'new') {
      setNewEvent({...newEvent, name: randomTitle})
      console.log('newEvent: ', newEvent)  
    } else {
      setUpdatedEvent({...updatedEvent, name: randomTitle})
      console.log('updatedEvent: ', updatedEvent)  
    }
  };

  const postCreateOrUpdateEvent = async (newOrUpdate) => {
    if(newOrUpdate == 'new') {
      console.log('create new event called');
      console.log('newEvent: ', newEvent)
    try {
      setIsLoadingCreateEvent(true)
      const formatedEvent = {
        ...newEvent, 
        start: {
          timezone: 'America/New_York', 
          utc: moment(`${newEvent.date} ${newEvent.start_time}`, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]')
        },
        end: {
          timezone: 'America/New_York', 
          utc: moment(`${newEvent.date} ${newEvent.end_time}`, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]')
        }
      }
      console.log("formatedEvent: " + formatedEvent);

      const formData = new FormData();
      formData.append('eventData', JSON.stringify(formatedEvent));
      if (files.length > 0) {
        formData.append('image', files[0].file);
      }
    
      console.log('formData: ' + formData);


      const response = await axios.post(
        `/api/eventbrite/events/create`,
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }  
      );

      console.log('Creating event:', response.data);
      setIsLoadingCreateEvent(false);
      setShowModal(false);
      toast.success('Event CREATED successfully 😍');
    } catch (error) {
      console.error('Error creating event:', error.message);
      setShowModal(false);
      toast.error(`Error creating event: ${error.message}`);
    } finally {
      // refresh events
      console.log('refresh events..');
      fetch(`/api/eventbrite/events`, { cache: 'no-store' })
        .then((data) => data.json())
        .then((eventsResponse) => eventsResponse.events)
        .then((events) => setEvents(events));
    }
    } else {
      console.log('updatedEvent: ', updatedEvent)  
    }
  }
  

  return (
    <>
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {/* Headnline */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Event Manager</h1>
            <Button
              onClick={() => {
                setSelectedEvent(null);
                setShowModal(true);
              }}
            >
              Create Event
            </Button>
          </div>

          {/* EVENTS Table */}
          <EventsTable />

          {/* UPDATE / CREATE Event */}
          <Dialog class="pb-6 md:pb-0" open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="text-base">
          <DialogHeader>
            <DialogTitle>
              {selectedEvent ? 'Edit Event' : 'Create Event'}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[400px] lg:max-h-[80vh]">
            <div className="p-4">
              <div
                className="border-2 border-dashed border-gray-400 rounded-lg p-8 flex flex-col items-center justify-center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {files.length == 0 ? (
                  <>
                    <CloudUploadIcon className="w-12 h-12 text-primary" />
                    <h3 className="text-lg font-semibold mt-4">
                      Drag and drop files here
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      or click to select files
                    </p>
                    <Button
                      className="mt-4"
                      onClick={() =>
                        document.getElementById('file-input').click()       
                      }
                    >
                      Select Files
                    </Button>
                    <input
                      id="file-input"
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                  </>
                ) : (
                  <>
                    <div className="w-full flex justify-center">
                      {files.map((fileData, index) => (
                        <div key={index} className="relative">
                          <Image
                            unoptimized
                            width={200}
                            height={150}
                            src={fileData.url}
                            alt={fileData.file.name}
                            className="h-40 aspect-square object-cover object-center rounded-lg"
                          />
                          <div
                            className="absolute top-2 right-2 bg-background p-1 rounded bg-gray-900 hover:bg-red-900"
                            onClick={() => handleRemoveFile(index)}
                          >
                            <XIcon className="w-4 h-4 text-muted-foreground cursor-pointer" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className='space-y-2 py-4 px-4'>
              <Label htmlFor="name">Event Name</Label>
              <div className="flex items-center w-full max-w-md gap-2">
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter a title..."
                  className="flex-1 rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  value={
                    selectedEvent ? updatedEvent.name : newEvent.name
                  }
                  onChange={(event) => {selectedEvent ? handleInputChange(event, 'update') : handleInputChange(event, 'new')}}      
                />
                <Button 
                  onClick={() => {selectedEvent ? generateRandomName('update') : generateRandomName('new')}}
                  type="button" 
                  // variant="ghost" 
                  className="rounded-md p-2 bg-gray-700 hover:bg-gray-900"
                >
                  <ShuffleIcon className="w-5 h-5" />
                  <span className="sr-only">Generate Random Title</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2 px-4">
              <Label htmlFor="venue_id">Venue</Label>
              <Select 
                name="venue_id" 
                value={
                  selectedEvent 
                    ? updatedEvent.venue_id 
                    : newEvent.venue_id
                } 
                onValueChange={(id) => {selectedEvent ? handleVenueChange(id, 'update') : handleVenueChange(id, 'new')}}
              >
                <SelectTrigger id="venue_id">
                  <SelectValue placeholder="Select a venue" />
                </SelectTrigger>
                <SelectContent>
                  {
                    venues?.map(venue => {
                      return <SelectItem key={`venue-${venue.id}`} value={venue.id}>{venue.name}</SelectItem>
                    })
                  }
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-4 py-4 px-4">
              <div className="">
                <div className="space-y-2">
                  <Label htmlFor="start-date">
                    Date: <span className='font-bold'>
                      {selectedEvent
                          ? moment(updatedEvent.date).format('dddd MMMM Do, YYYY')
                          : moment(newEvent.date).format('dddd MMMM Do, YYYY')}
                    </span>
                  </Label>
                  <Input 
                    id="date" 
                    type="date"
                    name="date"
                    value={
                      selectedEvent
                        ? updatedEvent.date
                        : newEvent.date
                    }
                    onChange={(event) => {selectedEvent ? handleInputChange(event, 'update') : handleInputChange(event, 'new')}} 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="start-time">Start</Label>
                    <Select 
                      value={
                        selectedEvent 
                          ? moment(selectedEvent.start.local).format("HH:mm")
                          : newEvent.start_time
                      } 
                      onValueChange={(time) => {selectedEvent ? handleStartTimeChange(time, 'update') : handleStartTimeChange(time, 'new')}}
                    >
                      <SelectTrigger id="start-time">
                        <SelectValue placeholder="Time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="17:00">17:00</SelectItem>
                        <SelectItem value="18:00">18:00</SelectItem>
                        <SelectItem value="19:00">19:00</SelectItem>
                        <SelectItem value="20:00">20:00</SelectItem>
                        <SelectItem value="21:00">21:00</SelectItem>
                        <SelectItem value="22:00">22:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                <div className="space-y-2">
                  <Label htmlFor="end-time">End</Label>
                  <Select 
                    value={
                      selectedEvent 
                        ? moment(selectedEvent.end.local).format("HH:mm")
                        : newEvent.end_time
                    } 
                    onValueChange={(time) => {selectedEvent ? handleEndTimeChange(time, 'update') : handleEndTimeChange(time, 'new')}}
                  >
                    <SelectTrigger id="end-time">
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="19:00">19:00</SelectItem>
                      <SelectItem value="20:00">20:00</SelectItem>
                      <SelectItem value="21:00">21:00</SelectItem>
                      <SelectItem value="22:00">22:00</SelectItem>
                      <SelectItem value="23:00">23:00</SelectItem>
                      <SelectItem value="24:00">24:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  className="text-base"
                  id="summary"
                  name="summary"
                  value={
                    selectedEvent ? updatedEvent.summary : newEvent.summary
                  }
                  onChange={(event) => {selectedEvent ? handleInputChange(event, 'update') : handleInputChange(event, 'new')}}
                />
              </div>
            </div>
            <ScrollBar />
          </ScrollArea>
          <DialogFooter className='gap-4'>
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button onClick={() => {selectedEvent ? postCreateOrUpdateEvent('update') : postCreateOrUpdateEvent('new')}}>
              {
                selectedEvent 
                  ? 'Update Event' 
                  : isLoadingCreateEvent 
                    ? <><Loading width="5" height="5" border="2" noText={true}/> <span className='pl-4'>Creating Event</span></>
                    : 'Create Event'
              }
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
        </main>
      </div>
    </>
  );
}
