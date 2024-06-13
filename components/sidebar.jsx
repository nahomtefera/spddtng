'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import LogoutButton from '@/components/logoutButton';
import { XIcon, MountainIcon, MenuIcon } from '@/lib/customIcons';
// supabase
import { createClient } from '@/utils/supabase/client';

export default function Sidebar({ links, isAdminDashboard, isUserDashboard }) {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userProfilePicture, setUserProfilePicture] = useState('/images/app/placeholder-user.jpg');

  // supabase
  useEffect(() => {
    async function fetchUserProfile() {
      const supabase = createClient();

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        console.error('Error fetching user:', userError.message);
        return;
      }

      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select('first_name, profile_picture')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching user details:', error.message);
        } else {
          setUserName(data?.first_name || '');
          setUserProfilePicture(data?.profile_picture || '/images/app/placeholder-user.jpg');
        }
      }
    }

    fetchUserProfile();
  }, []);


  return (
    <>
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
      <div
        className={`sidebar-background shadow-[-5px_0px_20px_12px_rgba(157,157,157,0)] bg-primary text-gray-900 py-6 px-4 md:px-6 lg:px-10 flex flex-col gap-6 z-10 shadow-gray-400/50 transition-all duration-300 ${
          isSidebarOpen
            ? 'fixed z-50 w-full h-full sm:block sm:w-full sm:h-full md:static md:w-auto md:h-auto'
            : 'hidden sm:hidden md:block'
        }`}
      >
        {/* Close sidebar */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full md:hidden absolute top-1 right-1"
          onClick={() => setIsSidebarOpen(false)}
        >
          <XIcon className="w-6 h-6" />{' '}
          {/* Replace with an appropriate close icon */}
        </Button>

        {/* Admin Header - ADMIN DASHBOARD ONLY */}
        {isAdminDashboard && (
          <div className="flex h-[60px] items-center border-b border-[#222783] px-6">
            <Link
              href="/admin"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <span className="text-white font-light tracking-widest">
                Admin Panel
              </span>
            </Link>
          </div>
        )}

        {/* Logo */}
        <div className="flex items-center justify-center gap-4 md:mt-10 mb-5">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6" />
            <span className="text-light text-white">Speed</span>
          </Link>
        </div>

        {/* User Image / Logout btn - USER DASHBOARD ONLY*/}
        {isUserDashboard && (
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-[150px] h-[150px] rounded-lg border">
              <img src={userProfilePicture} alt="@username" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        )}

        {/* Logout Button */}
        <div className="flex flex-col items-center gap-4 my-4">
          <LogoutButton />
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-2 mt-5">
          {links?.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#222783] transition-colors ${
                  isActive(link.href) ? 'bg-[#222783]' : 'hover:bg-[#222783]'
                }`}
                onClick={() => setIsSidebarOpen(false)}
                prefetch={link.prefetch}
              >
                {link.icon}
                <span className="text-white">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
