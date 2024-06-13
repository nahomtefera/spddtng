'use server';

import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Button } from './ui/button';

export default async function AuthButton() {
  const supabase = createClient();
  let userName = '';

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data, error } = await supabase
      .from('users')
      .select('first_name')
      .eq('id', user.id)
      .single();
    userName = data?.first_name;
  }

  const signOut = async () => {
    'use server';

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect('/login');
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return user ? (
    <div className="flex items-center gap-4">
      <div>
      Hey,
      <span className='font-bold'> {capitalizeFirstLetter(userName)}</span>!
      </div>
      <form action={signOut}>
        <Button variant="destructive">Logout</Button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      <Button variant="default">Login</Button>
    </Link>
  );
}
