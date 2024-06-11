'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';
import './styles.css';
import {
  CalendarIcon,
  HomeIcon,
  MenuIcon,
} from '@/lib/customIcons';

const Component = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    {
      href: '/admin',
      className:
        'flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors',
      onClick: () => setIsSidebarOpen(false),
      prefetch: false,
      icon: <HomeIcon className="w-5 h-5" />,
      label: 'Overview',
    },
    {
      href: '/admin/events',
      className:
        'flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors',
      onClick: () => setIsSidebarOpen(false),
      prefetch: false,
      icon: <CalendarIcon className="w-5 h-5" />,
      label: 'Event Manager',
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
          isAdminDashboard={true}
        />

        {/* Content */}
        <div className="flex-1 bg-[#fbfbfb] dark:bg-gray-950 overflow-y-auto">
          <section className="w-full">
            <div className="">{children}</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Component;
