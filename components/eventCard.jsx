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
  function formatDate(dateString) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
  
    return {day, month};
  }
  
  const {day, month} = formatDate(event.date);

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
            {event.ageRange}
          </div>
        </div>
        <Image
          src={event.image}
          alt={event.title}
          width={400}
          height={400}
          className="w-full aspect-square object-cover"
        />
      </div>

      <div className="p-4 py-8 absolute bottom-0 w-full backdrop-blur-sm text-white bg-[#00000072]">
        <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
        <div className="flex items-center mb-2">
          <UserIcon stroke="white" className="w-4 h-4 mr-2" />
          <span className='text-base font-semibold'>Ages {event.ageRange}</span>
        </div>
        {/* <div className="flex items-center mb-2">
          <CalendarIcon stroke="white" className="w-4 h-4 mr-2" />
          <span className='text-base font-semibold'>{event.date}</span>
        </div> */}
        <div className="flex items-center mb-2">
          <ClockIcon stroke="white" className="w-4 h-4 mr-2" />
          <span className='text-base font-semibold'>{event.time}</span>
        </div>
        {/* <div className="flex items-center mb-2">
          <MapPinIcon stroke="white" className="w-4 h-4 mr-2" />
          <span className='text-base font-semibold'>{event.city}</span>
        </div> */}
        <div className="flex items-center">
          <LocateIcon stroke="white" className="w-4 h-4 mr-2" />
          <span className='text-base font-semibold'>{event.address}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
