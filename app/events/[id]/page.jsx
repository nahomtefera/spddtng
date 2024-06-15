'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import events from '@/lib/mockEvents';
import { Button } from "@/components/ui/button"
import {
    CalendarIcon,
    ClockIcon,
    MapPinIcon,
    UsersIcon
} from '@/lib/customIcons'
import Loading from '@/components/loading'

export default function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const eventId = parseInt(id, 10); // Convert id to an integer
    const foundEvent = events.find(event => event.id === eventId);
    if (foundEvent) {
      setEvent(foundEvent);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) return <Loading />;

  if (!event) return <div>Event not found</div>;

  return (
    <div className="flex flex-col min-h-screen justify-center">
      <section className="w-full py-0 pb-12 lg:pb-0">
        <div>
          <div className="min-h-screen grid lg:grid-cols-[1fr_1fr]  xl:grid-cols-[1fr_1fr]">
            <div>
                <Image
                    src={event.image}
                    width={550}
                    height={550}
                    alt="Hero"
                    className="shadow-xl mx-auto w-full h-full aspect-video overflow-hidden lg:rounded-none  object-cover sm:w-full lg:order-last"
                />
            </div>
            <div className="flex flex-col justify-center space-y-4 m-auto md:px-6 px-8">
              <div className="space-y-5">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {event.title}
                </h1>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
                    <div className="flex items-center gap-2">
                        <CalendarIcon stroke="black" className="w-4 h-4" />
                        <span>June 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ClockIcon stroke="black" className="w-4 h-4" />
                        <span>6:00 PM - 11:00 PM</span>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
                    <div className="flex items-center gap-2">
                        <UsersIcon stroke="black" className="w-4 h-4" />
                        <span>Ages 18+</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPinIcon stroke="black" className="w-4 h-4" />
                        <span>Central Park, New York City</span>
                    </div>
                  </div>
                </div>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {event.description}
                </p>

              </div>
              <Button className='hidden lg:block'>Get Tickets</Button>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden sticky bottom-0 bg-white p-4 dark:bg-gray-800">
        <Button className="w-full">Checkout</Button>
      </div>
    </div>
  );
}

const handleCheckout = (event) => {
  // Handle the checkout process
  console.log('Proceeding to checkout for event:', event);
};