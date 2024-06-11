'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';
import { usePathname } from 'next/navigation';
import './styles.css';
import {
  CalendarCheckIcon,
  CalendarIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
  SettingsIcon,
  UserIcon,
  MountainIcon,
  HeartIcon,
} from '@/lib/customIcons';

const MarketingLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const links = [
    {
      href: '/user',
      className:
        'flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors',
      activeClass: 'bg-[#222783]',
      onClick: () => setIsSidebarOpen(false),
      prefetch: false,
      icon: <HomeIcon className="w-5 h-5" />,
      label: 'Home',
    },
    {
      href: '/user/matches',
      className:
        'flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors',
      activeClass: 'bg-[#222783]',
      onClick: () => setIsSidebarOpen(false),
      prefetch: false,
      icon: <HeartIcon className="w-5 h-5" />,
      label: 'Matches',
    },
    {
      href: '/user/my-profile',
      className:
        'flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors',
      activeClass: 'bg-[#222783]',
      onClick: () => setIsSidebarOpen(false),
      prefetch: false,
      icon: <UserIcon className="w-5 h-5" />,
      label: 'My Profile',
    },
    {
      href: '/user/attended-events',
      className:
        'flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors',
      activeClass: 'bg-[#222783]',
      onClick: () => setIsSidebarOpen(false),
      prefetch: false,
      icon: <CalendarCheckIcon className="w-5 h-5" />,
      label: 'Attended Events',
    },
    {
      href: '/user/upcoming-events',
      className:
        'flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors',
      activeClass: 'bg-[#222783]',
      onClick: () => setIsSidebarOpen(false),
      prefetch: false,
      icon: <CalendarIcon className="w-5 h-5" />,
      label: 'Upcoming Events',
    },
    {
      href: '/user/account-settings',
      className:
        'flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors',
      activeClass: 'bg-[#222783]',
      onClick: () => setIsSidebarOpen(false),
      prefetch: false,
      icon: <SettingsIcon className="w-5 h-5" />,
      label: 'Account Settings',
    },
  ];

  return (
    <div className="dark:dark-background">
      <div className="flex min-h-screen max-h-screen">
        {/* Toggle Sidebar button */}
        <div className="relative">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed md:hidden top-6 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-gray-50 transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
        {/* Sidebar */}
        <Sidebar
          links={links}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isUserDashboard={true}
        />
        {/* Content */}
        <div className="flex-1 bg-[#fbfbfb] dark:bg-gray-950 md:pt-10 py-6 px-4 md:px-6 lg:px-8 overflow-y-auto">
          <section className="w-full">
            <div className="container px-4 md:px-6">{children}</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MarketingLayout;
