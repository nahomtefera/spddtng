import React from 'react';
// Supabase
import { createClient } from '@/app/utils/supabase';
// components
import Sidebar from '@/components/sidebar';
import { userLinks } from '@/lib/sidebarLinks';
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
import { redirect } from 'next/navigation';

const MarketingLayout = async ({ children }) => {
  // subase auth
  const supabase = createClient()
  // sidebar

  const { data: { user } } = await supabase.auth.getUser();

  if(!user) {
    redirect('/login')
  }
  console.log('user? ', user)
  return (
    <div className="dark:dark-background">
      <div className="flex min-h-screen max-h-screen">
        {/* Sidebar */}
        <Sidebar
          links={userLinks}
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
