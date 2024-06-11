import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import {
  XIcon,
  MountainIcon,
} from '@/lib/customIcons';

export default function Sidebar({ links, isSidebarOpen, setIsSidebarOpen, isAdminDashboard, isUserDashboard }) {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
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
            <img src="/images/users/user3.webp" alt="@username" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button
            variant="ghost"
            className="rounded text-white hover:bg-red-600 hover:text-white"
          >
            Logout
          </Button>
        </div>
      )}

      {/* Sidebar Links */}
      <nav className="flex flex-col gap-2 mt-5">
        {links?.map((link) => {
          return (
            <Link
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
  );
}
