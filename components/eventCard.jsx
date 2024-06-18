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
    TicketIcon
} from '@/lib/customIcons';

import Image from 'next/image';
import Link from 'next/link';

const EventCard = ({ event, handleEventClick, attended}) => {
  function formatDate(dateString) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
  
    return {day, month};
  }
  
  const {day, month} = formatDate(event.start.local);

  return (
    <div
      key={event.id}
      className="relative bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => handleEventClick(event)}
    >
      <div className="relative">
        <div className='absolute flex flex-col top-4 left-4 backdrop-blur-sm text-white bg-[#ffffff53] rounded p-4 px-8 text-center aspect-w-1 aspect-h-1'>
          <div className='text-2xl font-bold'>{day}</div>
          <div className='text-md font-semibold'>{month}</div>
        </div>
        <div className="hidden absolute top-4 right-4 flex items-center gap-4">
          <div className=" bg-[#fff] font-semibold text-black px-3 py-1 rounded-md text-sm  dark:bg-gray-50 dark:text-gray-900">
            {event.city}
          </div>
          <div className="flex items-center gap-2 bg-[#fff]  text-black font-semibold px-3 py-1 rounded-md text-sm  dark:bg-gray-50 dark:text-gray-900">
            <UserIcon stroke="black" className="h-4 w-4" />
            {event.ageRange || '+18'}
          </div>
        </div>
        <Image
          src={event.logo.url}
          alt={event.name.text}
          width={400}
          height={400}
          className="w-full aspect-square object-cover"
          unoptimized
        />
        {!attended && (
          <Link onClick={(e)=>{e.stopPropagation()}} href={`/events/${event.id}`} className="text-primary" prefetch={false}>
            <div className='flex items-center shadow-lg bg-[#ffffff] hover:bg-[#4a1c64] hover:text-white font-semibold backdrop-blur-sm text-black text-md absolute bottom-4 right-4 px-4 py-2 rounded'>
            {/* <TicketIcon stroke="black" className="w-6 h-6 mr-2" /> */}
              Get Tickets
            </div>
          </Link>
        )}
      </div>

      <div className="p-4 py-8 bottom-0 w-full backdrop-blur-sm text-black bg-[#ffffffb7]">
        <h2 className="text-2xl font-semibold mb-2">{event.name.text}</h2>
        <div className="flex items-center mb-2">
          <UserIcon stroke="black" className="w-4 h-4 mr-2" />
          <span className='text-base font-semibold'>Ages {event.ageRange || '+18'}</span>
        </div>
        {/* <div className="flex items-center mb-2">
          <CalendarIcon stroke="black" className="w-4 h-4 mr-2" />
          <span className='text-base font-semibold'>{event.date}</span>
        </div> */}
        <div className="flex items-center mb-2">
          <ClockIcon stroke="black" className="w-4 h-4 mr-2" />
          <span className='text-base font-semibold'>{event.time || "8PM"}</span>
        </div>
        {/* <div className="flex items-center mb-2">
          <MapPinIcon stroke="black" className="w-4 h-4 mr-2" />
          <span className='text-base font-semibold'>{event.city}</span>
        </div> */}
        <div className="flex items-center">
          <LocateIcon stroke="black" className="w-4 h-4 mr-2" />
          <span className='text-base font-semibold'>{event.city || "New York"}</span>
        </div>
        
      </div>
    </div>
  );
};

export default EventCard;
