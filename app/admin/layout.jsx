'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import './styles.css'
import {CalendarCheckIcon, CalendarIcon, HomeIcon, MenuIcon, XIcon, SettingsIcon, UserIcon, MountainIcon, HeartIcon, UsersIcon} from '@/lib/customIcons'

const Component = ({children}) => {
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
                    <div className="flex h-[60px] items-center border-b border-[#222783] px-6">
                        <Link href="/admin" className="flex items-center gap-2" prefetch={false}>
                        {/* <CalendarIcon className="h-6 w-6" /> */}
                        <span className="text-white font-light tracking-widest">Admin Panel</span>
                        </Link>
                    </div>
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-4 md:mt-10 mb-10">
                        <Link href="/" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
                            <MountainIcon className="h-6 w-6" />
                            <span className="text-light text-white">Speed</span>
                        </Link>
                    </div>

                    {/* Sidebar Links */}
                    <nav className="flex flex-col gap-2 mt-5">
                        <Link
                            href="/admin"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/admin') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            onClick={() => setIsSidebarOpen(false)}
                            prefetch={false}
                        >
                            <HomeIcon className="w-5 h-5" />
                            <span className="text-white">Overview</span>
                        </Link>
                        <Link
                            href="/admin/events"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/admin/events') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            onClick={() => setIsSidebarOpen(false)}
                            // prefetch={false}
                        >
                            <CalendarIcon className="w-5 h-5" />
                            <span className="text-white">Event Manager</span>
                        </Link>
                        {/* <Link
                            href="/admin/users"
                            className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${isActive('/admin/users') ? 'bg-[#222783]' : 'hover:bg-[#222783]'}`}
                            onClick={() => setIsSidebarOpen(false)}
                            // prefetch={false}
                        >
                            <UsersIcon className="w-5 h-5" />
                            <span className="text-white">Users</span>
                        </Link> */}
                    </nav>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#fbfbfb] dark:bg-gray-950 overflow-y-auto">
                  <section className="w-full">
                    <div className="">
                      {children}
                    </div>
                  </section>
                </div>
            </div>
        </div>
     );
}

 
export default Component;