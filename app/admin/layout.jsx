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

  if(user) {
    console.log('there is a user, getting user data from users table\n')
    console.log('user id is: ', user.id, "\n\n\n")

    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single();

    const userRole = data?.role;
    console.log('user role is: ', userRole, typeof userRole)
    if (userRole !== "admin") {
      return redirect('/user')
    }
  } else {
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
