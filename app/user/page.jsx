import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Component() {
  const matches = [
    {
      id: 1,
      name: 'Jada Doe',
      matchedOn: 'June 1, 2023',
      imageUrl: '/images/users/user2.webp',
      fallback: 'JD'
    },
    {
      id: 2,
      name: 'Jane Smith',
      matchedOn: 'May 15, 2023',
      imageUrl: '/images/users/user4.webp',
      fallback: 'JS'
    },
    {
      id: 3,
      name: 'Sara Smith',
      matchedOn: 'May 15, 2023',
      imageUrl: '/images/users/user1.webp',
      fallback: 'SS'
    }
  ];
  const upcomingEvents = [
    {
      id: 1,
      title: 'Speed Dating Event',
      date: 'June 15, 2023 - 7:00 PM',
      imageUrl: '/images/app/restaurant2.webp',
    },
    {
      id: 2,
      title: 'Cocktail Mixer',
      date: 'July 1, 2023 - 8:00 PM',
      imageUrl: '/images/app/restaurant1.webp',
    },
    {
      id: 3,
      title: 'Rooftop Mixer',
      date: 'July 20, 2023 - 8:00 PM',
      imageUrl: '/images/app/restaurant3.webp',
    },
  ];
  const attendedEvents = [
    {
      id: 1,
      title: 'Rooftop Mixer',
      date: 'May 20, 2023',
      imageUrl: '/images/app/restaurant4.webp',
    },
    {
      id: 2,
      title: 'Wine Tasting',
      date: 'April 10, 2023',
      imageUrl: '/images/app/restaurant5.webp',
    },
    {
      id: 3,
      title: 'Wine Tasting',
      date: 'March 12, 2023',
      imageUrl: '/images/app/restaurant2.webp',
    },
  ];
  const adviceItems = [
    {
      id: 1,
      title: 'How to Make a Great First Impression',
      description: 'Tips for a successful first date',
      imageUrl: '/images/marketing/couple1.webp',
    },
    {
      id: 2,
      title: 'Navigating the Modern Dating Landscape',
      description: 'Advice for finding love in the digital age',
      imageUrl: '/images/marketing/couple2.webp',
    },
  ];
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
