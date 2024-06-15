import {
    CalendarIcon,
    ClockIcon,
    LocateIcon,
    MapPinIcon,
    TagIcon,
    UserIcon,
    UsersIcon,
    XIcon,
} from '@/lib/customIcons';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';

const EventCardSidebar = ({ selectedEvent, setSelectedEvent}) => {
  return (
    <div
            className="z-50 fixed top-0 right-0 w-full md:w-1/2 h-full bg-white dark:bg-gray-950 shadow-lg overflow-y-auto flex flex-col "
            style={{ marginTop: 0 }}
          >
            <div>
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                width={600}
                height={500}
                className="w-full h-80 object-cover object-center"
              />
              <Button
                variant="secondary"
                className="fixed right-8 top-5 bg-gray-800 hover:bg-gray-900"
                size="icon"
                onClick={() => setSelectedEvent(null)}
              >
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
                      <CalendarIcon stroke="black" className="w-4 h-4 mr-2" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <ClockIcon stroke="black" className="w-4 h-4 mr-2" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPinIcon stroke="black" className="w-4 h-4 mr-2" />
                      <span>{selectedEvent.city}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <LocateIcon stroke="black" className="w-4 h-4 mr-2" />
                      <span>{selectedEvent.address}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <UserIcon stroke="black" className="w-4 h-4 mr-2" />
                      <span>Hosted by {selectedEvent.host}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <UsersIcon stroke="black" className="w-4 h-4 mr-2" />
                      <span>{selectedEvent.ageRange}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p>{selectedEvent.description}</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <TagIcon stroke="black" className="w-4 h-4 mr-2" />
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm"
                        >
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
                        <Image layout="fill" objectFit="contain" src={attendee.image} alt={attendee.name} />
                        <AvatarFallback>
                          {attendee.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
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
  );
};

export default EventCardSidebar;
