import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Component() {
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
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 rounded-lg border">
                  <Image layout="fill" objectFit="contain" src="/images/users/user2.webp" alt="@username" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">Jada Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Matched on June 1, 2023
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 rounded-lg border">
                  <Image layout="fill" objectFit="contain" src="/images/users/user4.webp" alt="@username" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">Jane Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Matched on May 15, 2023
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 rounded-lg border">
                  <Image layout="fill" objectFit="contain" src="/images/users/user1.webp" alt="@username" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">Sara Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Matched on May 15, 2023
                  </p>
                </div>
              </div>
            </div>

            <Link href="#" className="text-primary" prefetch={false}>
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
              <div className="flex items-center gap-4">
                <Image
                  src="/images/app/restaurant2.webp"
                   width={45} height={45}
                  className="object-cover rounded-md w-16 h-16"
                  alt="Event"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Speed Dating Event</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    June 15, 2023 - 7:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/app/restaurant1.webp"
                   width={45} height={45}
                  className="object-cover rounded-md w-16 h-16"
                  alt="Event"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Cocktail Mixer</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    July 1, 2023 - 8:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/app/restaurant3.webp"
                   width={45} height={45}
                  className="object-cover rounded-md w-16 h-16"
                  alt="Event"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Rooftop Mixer</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    July 20, 2023 - 8:00 PM
                  </p>
                </div>
              </div>
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
              <div className="flex items-center gap-4">
                <Image
                  src="/images/app/restaurant4.webp"
                   width={45} height={45}
                  className="object-cover rounded-md w-16 h-16"
                  alt="Event"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Rooftop Mixer</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    May 20, 2023
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/app/restaurant5.webp"
                   width={45} height={45}
                  className="object-cover rounded-md w-16 h-16"
                  alt="Event"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Wine Tasting</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    April 10, 2023
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/app/restaurant2.webp"
                   width={45} height={45}
                  className="object-cover rounded-md w-16 h-16"
                  alt="Event"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Wine Tasting</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    March 12, 2023
                  </p>
                </div>
              </div>
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
              <div className="flex items-center gap-4">
                <Image
                  src="/images/marketing/couple1.webp"
                  width={45}
                  height={45}
                  className="object-cover rounded-md w-16 h-16"
                  alt="Advice"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">
                    How to Make a Great First Impression
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tips for a successful first date
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/marketing/couple2.webp"
                  width={45}
                  height={45}                  
                  className="object-cover rounded-md w-16 h-16"
                  alt="Advice"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">
                    Navigating the Modern Dating Landscape
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Advice for finding love in the digital age
                  </p>
                </div>
              </div>
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
