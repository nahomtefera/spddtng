import React from 'react';
// supabase
import { createClient } from "@/utils/supabase/server";

// components
import { redirect } from "next/navigation";
import Sidebar from '@/components/sidebar';
import { userLinks } from '@/lib/sidebarLinks';
import './styles.css';

const UserLayout = async ({ children }) => {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }


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

export default UserLayout;
