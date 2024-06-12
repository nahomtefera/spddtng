import React from 'react';
import Sidebar from '@/components/sidebar';
import { adminLinks } from '@/lib/sidebarLinks';
// supabase
import { createClient } from '@/utils/supabase/server';
import './styles.css';
import { redirect } from 'next/navigation';

const Component = async ({ children }) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }


  return (
    <div className="dark:dark-background">
      <div className="flex min-h-screen max-h-screen">
        {/* Sidebar */}
        <Sidebar links={adminLinks} isAdminDashboard={true} />

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
