'use client';

import React from 'react';
import Sidebar from '@/components/sidebar';
import { adminLinks } from '@/lib/sidebarLinks'
import { MenuIcon } from '@/lib/customIcons';
import './styles.css';


const Component = ({ children }) => {
  
  return (
    <div className="dark:dark-background">
      <div className="flex min-h-screen max-h-screen">

        {/* Sidebar */}
        <Sidebar
          links={adminLinks}
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
