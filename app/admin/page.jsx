"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
// custom icons
import { CalendarIcon, SearchIcon } from '@/lib/customIcons';
import { Link } from "lucide-react"

export default function Component() {

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
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Upcoming Events</h1>
            <Button className="ml-auto" size="sm">
              Create Event
            </Button>
          </div>
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="max-w-[150px]">Event Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Attendees</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Tech Conference</TableCell>
                  <TableCell>June 15, 2023</TableCell>
                  <TableCell>San Francisco, CA</TableCell>
                  <TableCell>500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Product Launch</TableCell>
                  <TableCell>August 1, 2023</TableCell>
                  <TableCell>New York, NY</TableCell>
                  <TableCell>250</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Charity Gala</TableCell>
                  <TableCell>October 10, 2023</TableCell>
                  <TableCell>Miami, FL</TableCell>
                  <TableCell>1000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Create Event</CardTitle>
              <CardDescription>Fill out the form below to create a new event.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="eventName">Event Name</Label>
                  <Input id="eventName" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="eventDate">Event Date</Label>
                  <Input id="eventDate" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="eventLocation">Location</Label>
                  <Input id="eventLocation" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="eventAttendees">Expected Attendees</Label>
                  <Input id="eventAttendees" type="number" />
                </div>
                <Button type="submit">Create Event</Button>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  )
}
