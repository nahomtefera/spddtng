'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { Button } from './ui/button';

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleLogout = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push('/login');
    } else {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <Button variant="destructive" onClick={handleLogout} disabled={loading}>
      <div className="flex gap-2 items-center">
        {loading && (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        )}
        Logout
      </div>
    </Button>
  );
}
