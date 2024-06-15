'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { mockMatches, mockUpcomingEvents, mockAttendedEvents, mockAdviceItems } from './mockData'
import { useEffect, useState } from 'react';

export default function Component() {

  const [matches, setMatches] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [attendedEvents, setAttendedEvents] = useState([])
  const [adviceItems, setAdviceItems] = useState([])

  // Fetch user dashboard information
  useEffect(() => {
    async function fetchDashboardData() {
      try {
        // Simulating a network request with a timeout
        setTimeout(() => {
          setMatches(mockMatches);
          setUpcomingEvents(mockUpcomingEvents);
          setAttendedEvents(mockAttendedEvents);
          setAdviceItems(mockAdviceItems);
        }, 1000); // 1-second delay
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    }
    fetchDashboardData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Matches */}
        <Card>
          <CardHeader className="flex items-baseline justify-between">
            <CardTitle className="text-left">Recent Matches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {matches.map((match) => (
                <div key={match.id} className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 rounded-lg border">
                    <Image layout="fill" objectFit="contain" src={match.imageUrl} alt={match.name} />
                    <AvatarFallback>{match.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{match.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Matched on {match.matchedOn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/user/matches" className="text-primary" prefetch={false}>
              <Button className="w-full mt-5">All Matches</Button>
            </Link>
          </CardContent>
        </Card>
        {/* Upcoming Events */}
        <Card>
          <CardHeader className="flex items-baseline justify-between">
            <CardTitle className="text-left">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-4">
                  <Image
                    src={event.imageUrl}
                    width={45}
                    height={45}
                    className="object-cover rounded-md w-16 h-16"
                    alt={event.title}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {event.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#" className="text-primary" prefetch={false}>
              <Button className="w-full mt-5">All Upcoming Events</Button>
            </Link>
          </CardContent>
        </Card>
        {/* Attended Events */}
        <Card>
          <CardHeader className="flex items-baseline justify-between">
            <CardTitle className="text-left">Attended Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {attendedEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-4">
                  <Image
                    src={event.imageUrl}
                    width={45}
                    height={45}
                    className="object-cover rounded-md w-16 h-16"
                    alt={event.title}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {event.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#" className="text-primary" prefetch={false}>
              <Button className="w-full mt-5">All Past Events</Button>
            </Link>
          </CardContent>
        </Card>
        {/* Advice */}
        <Card>
          <CardHeader className="flex items-baseline justify-between">
            <CardTitle className="text-left">Advice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {adviceItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.imageUrl}
                    width={45}
                    height={45}
                    className="object-cover rounded-md w-16 h-16"
                    alt="Advice"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#" className="text-primary" prefetch={false}>
              <Button className="w-full mt-5">See All</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
