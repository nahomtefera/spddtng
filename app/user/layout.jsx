'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import './styles.css'
import {CalendarCheckIcon, CalendarIcon, HomeIcon, MenuIcon, XIcon, SettingsIcon, UserIcon, MountainIcon, HeartIcon} from '@/lib/customIcons'

const MarketingLayout = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return ( 
        <div className="dark:dark-background">
            <div className="flex min-h-screen max-h-screen">
                {/* Toggle Sidebar button */}
                <div className="relative">
                  <button onClick={() => setIsSidebarOpen(true)} className="fixed md:hidden top-6 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-gray-50 transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation</span>
                  </button>
                </div>
                {/* Sidebar */}
                {/* box-shadow:-5px 0px 20px 12px #0813395c */}
                <div 
                    className={`sidebar-background shadow-[-5px_0px_20px_12px_rgba(157,157,157,0)]
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
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/user') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            onClick={() => setIsSidebarOpen(false)}
                            prefetch={false}
                        >
                            <HomeIcon className="w-5 h-5" />
                            <span className="text-white">Home</span>
                        </Link>
                        <Link
                            href="/user/matches"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/user/matches') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            onClick={() => setIsSidebarOpen(false)}
                            prefetch={false}
                        >
                            <HeartIcon className="w-5 h-5" />
                            <span className="text-white">Matches</span>
                        </Link>
                        <Link
                            href="/user/my-profile"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/user/my-profile') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            onClick={() => setIsSidebarOpen(false)}
                            prefetch={false}
                        >
                            <UserIcon className="w-5 h-5" />
                            <span className="text-white">My Profile</span>
                        </Link>
                        {/* <Link
                            href="#"
                            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors"
                            prefetch={false}
                        >
                            <LayoutDashboardIcon className="w-5 h-5" />
                            <span className="text-white">Dashboard</span>
                        </Link> */}
                        <Link
                            href="/user/attended-events"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/user/attended-events') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            onClick={() => setIsSidebarOpen(false)}
                            prefetch={false}
                        >
                            <CalendarCheckIcon className="w-5 h-5" />
                            <span className="text-white">Attended Events</span>
                        </Link>
                        <Link
                            href="/user/upcoming-events"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/user/upcoming-events') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            onClick={() => setIsSidebarOpen(false)}
                            prefetch={false}
                        >
                            <CalendarIcon className="w-5 h-5" />
                            <span className="text-white">Upcoming Events</span>
                        </Link>
                        {/* <Link
                            href="#"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/user/matchmaking') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            prefetch={false}
                        >
                            <CompassIcon className="w-5 h-5" />
                            <span className="text-white">Matchmaking</span>
                        </Link> */}
                        {/* <Link
                            href="#"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/user/advice') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            prefetch={false}
                        >
                            <BookIcon className="w-5 h-5" />
                            <span className="text-white">Advice</span>
                        </Link> */}
                        {/* <Link
                            href="#"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/user/how-it-works') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            prefetch={false}
                        >
                            <InfoIcon className="w-5 h-5" />
                            <span className="text-white">How It Works</span>
                        </Link> */}
                        <Link
                            href="/user/account-settings"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/user/account-settings') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            onClick={() => setIsSidebarOpen(false)}
                            prefetch={false}
                        >
                            <SettingsIcon className="w-5 h-5" />
                            <span className="text-white">Account Settings</span>
                        </Link>
                    </nav>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#fbfbfb] dark:bg-gray-950 md:pt-20 py-6 px-4 md:px-6 lg:px-8 overflow-y-auto">
                  <section className="w-full py-6 md:py-6 lg:py-6">
                    <div className="container px-4 md:px-6">
                      {children}
                    </div>
                  </section>
                </div>
            </div>
        </div>
     );
}

 
export default MarketingLayout;