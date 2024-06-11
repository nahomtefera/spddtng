// lib/userLinks.js
import {
  CalendarCheckIcon,
  CalendarIcon,
  HomeIcon,
  SettingsIcon,
  UserIcon,
  HeartIcon
} from '@/lib/customIcons';

export const createUserLinks = (setIsSidebarOpen) => [
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

export const createAdminLinks = (setIsSidebarOpen) => [
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
