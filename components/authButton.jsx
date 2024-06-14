'use server';

import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LogOutIcon, UserIcon, HeartIcon } from '@/lib/customIcons';

export default async function AuthButton() {
  const supabase = createClient();
  let userName = '';
  let userProfilePicture = '';

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data, error } = await supabase
      .from('users')
      .select('first_name, profile_picture')
      .eq('id', user.id)
      .single();
    userName = data?.first_name;
    userProfilePicture = data?.profile_picture;
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
        <span className="font-bold"> {capitalizeFirstLetter(userName)}</span>!
      </div>
      <div className="ml-auto flex gap-2">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <Avatar className="h-9 w-9">
              <AvatarImage src={userProfilePicture || "/images/app/placeholder-user.jpg"} />
              <AvatarFallback>JP</AvatarFallback>
              <span className="sr-only">Toggle user menu</span>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/user/my-profile" prefetch={false} className="flex">
                <UserIcon className="mr-2 h-4 w-4" stroke="#030816" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <form action={signOut}>
                <button type="submit" className="flex cursor-pointer">
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Logout
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/user" prefetch={false} variant="secondary">
          <Button variant="secondary">Dashboard</Button>
        </Link>
      </div>
    </div>
  ) : (
    <div className='flex gap-3'>
      <Link
        href="/login"
        className="flex rounded-md no-underline"
      >
        <Button 
          className='backdrop-blur-md	bg-[#2c2c2c4f] text-white hover:bg-[#2c2c2c7d] font-semibold' 
          variant="default"
        >
            Login
        </Button>
      </Link>
      <Link
        href="/signup"
        className="backgropd flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        <Button
          className='fil flex gap-2 items-center justify-center font-semibold px-4 backdrop-blur-md	bg-[#000000d3] hover:bg-[#000]' 
          variant="default"
        >
          <HeartIcon size="16" fill="#fff" stroke="#fff" /> Sign Up
        </Button>
      </Link>
    </div>
  );
}
