'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';
import { createUserLinks } from '@/lib/sidebarLinks';
import {
  CalendarCheckIcon,
  CalendarIcon,
  HomeIcon,
  MenuIcon,
  SettingsIcon,
  UserIcon,
  HeartIcon,
} from '@/lib/customIcons';
import './styles.css';

const MarketingLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userLinks = createUserLinks(isSidebarOpen) 

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
          links={userLinks}
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
