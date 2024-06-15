import {
    CalendarIcon,
    ClockIcon,
    LocateIcon,
    MapPinIcon,
    TagIcon,
    UserIcon,
    UsersIcon,
    XIcon,
    FilterIcon,
    ListOrderedIcon,
} from '@/lib/customIcons';

import Image from 'next/image';

const EventCard = ({ event, handleEventClick}) => {
  return (
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
            <UserIcon stroke="black" className="h-4 w-4" />
            {event.ageRange}
          </div>
        </div>
        <Image
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
          <CalendarIcon stroke="black" className="w-4 h-4 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center mb-2">
          <ClockIcon stroke="black" className="w-4 h-4 mr-2" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center mb-2">
          <MapPinIcon stroke="black" className="w-4 h-4 mr-2" />
          <span>{event.city}</span>
        </div>
        <div className="flex items-center">
          <LocateIcon stroke="black" className="w-4 h-4 mr-2" />
          <span>{event.address}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
