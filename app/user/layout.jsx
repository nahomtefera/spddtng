'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const MarketingLayout = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return ( 
        <div className="dark:dark-background">
            <div className="flex min-h-screen">
                {/* Toggle Sidebar button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full md:hidden absolute top-0 right-0"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <MenuIcon className="w-6 h-6" />
                </Button>
                {/* Sidebar */}
                {/* box-shadow:-5px 0px 20px 12px #0813395c */}
                <div 
                    className={`shadow-[-5px_0px_20px_12px_rgba(157,157,157,0)]
 bg-primary text-gray-900 py-6 px-4 md:px-6 lg:px-10 flex flex-col gap-6 z-10 shadow-gray-400/50 transition-all duration-300 ${
                        isSidebarOpen
                        ? "fixed z-50 w-full h-full sm:block sm:w-full sm:h-full md:static md:w-auto md:h-auto"
                        : "hidden sm:hidden md:block"
                    }`}
                >
                    {/* Close sidebar */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full md:hidden absolute top-1 right-1"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <XIcon className="w-6 h-6" /> {/* Replace with an appropriate close icon */}
                    </Button>

                    {/* Logo */}
                    <div className="flex items-center justify-center gap-4 md:mt-10 mb-5">
                        <Link href="/" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
                            <MountainIcon className="h-6 w-6" />
                            <span className="text-light text-white">Speed</span>
                        </Link>
                    </div>
                    {/* Avatar */}
                    <div className="flex flex-col items-center gap-4">
                        <Avatar className="w-[150px] h-[150px] rounded-lg border">
                            <img src="/images/users/user3.webp" alt="@username" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Button variant="ghost"  className="rounded text-white hover:bg-red-600 hover:text-white">
                            Logout
                        </Button>
                    </div>
                    {/* Sidebar Links */}
                    <nav className="flex flex-col gap-2 mt-5">
                        <Link
                            href="/user"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors ${isActive('/user') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                            
                            prefetch={false}
                        >
                            <HomeIcon className="w-5 h-5" />
                            <span className="text-white">Home</span>
                        </Link>
                        <Link
                            href="/user/my-profile"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors ${isActive('/user/my-profile') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                            
                            prefetch={false}
                        >
                            <UserIcon className="w-5 h-5" />
                            <span className="text-white">My Profile</span>
                        </Link>
                        <Link
                            href="/user/matches"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors ${isActive('/user/matches') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                            prefetch={false}
                        >
                            <HeartIcon className="w-5 h-5" />
                            <span className="text-white">Matches</span>
                        </Link>
                        {/* <Link
                            href="#"
                            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                            prefetch={false}
                        >
                            <LayoutDashboardIcon className="w-5 h-5" />
                            <span className="text-white">Dashboard</span>
                        </Link> */}
                        <Link
                            href="#"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors ${isActive('/user/attended-events') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                            prefetch={false}
                        >
                            <CalendarCheckIcon className="w-5 h-5" />
                            <span className="text-white">Attended Events</span>
                        </Link>
                        <Link
                            href="#"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors ${isActive('/user/upcoming-events') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                            prefetch={false}
                        >
                            <CalendarIcon className="w-5 h-5" />
                            <span className="text-white">Upcoming Events</span>
                        </Link>
                        <Link
                            href="#"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors ${isActive('/user/matchmaking') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                            prefetch={false}
                        >
                            <CompassIcon className="w-5 h-5" />
                            <span className="text-white">Matchmaking</span>
                        </Link>
                        <Link
                            href="#"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors ${isActive('/user/advice') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                            prefetch={false}
                        >
                            <BookIcon className="w-5 h-5" />
                            <span className="text-white">Advice</span>
                        </Link>
                        <Link
                            href="#"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors ${isActive('/user/how-it-works') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                            prefetch={false}
                        >
                            <InfoIcon className="w-5 h-5" />
                            <span className="text-white">How It Works</span>
                        </Link>
                        <Link
                            href="#"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors ${isActive('/user/account-settings') ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                            prefetch={false}
                        >
                            <SettingsIcon className="w-5 h-5" />
                            <span className="text-white">Account Settings</span>
                        </Link>
                    </nav>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#fbfbfb] dark:bg-gray-950 md:pt-20 py-6 px-4 md:px-6 lg:px-8 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
     );
}

function BookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
}
  
function CalendarCheckIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    )
  }
  
  function CalendarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    )
  }
  
  
  function CompassIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  }
  
  
  function HomeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
  function InfoIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    )
  }
  
  
  function LayoutDashboardIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    )
  }
  
  
  function MenuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  
  function XIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }
  
  function Package2Icon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    )
  }
  
  
  function SettingsIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  
  
  function UserIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }
  
  
  function UsersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }

  
function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }

  function HeartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  }
 
export default MarketingLayout;