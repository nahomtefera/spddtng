'use client'
// supabase login
import { signup } from './actions';
// components
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LockIcon, MountainIcon } from '@/lib/customIcons';
import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await signup(formData);
    if (result.error) {
      setError(result.error);
    } else {
      window.location.href = '/signup/confirmation';
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Link href="/" prefetch={false}>
            <MountainIcon stroke="black" className="mx-auto h-12 w-auto" />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-3">
            <div className="flex gap-4">
              <div className="w-1/2">
                <Label htmlFor="first-name" className="sr-only">
                  First name
                </Label>
                <Input
                  id="first-name"
                  name="first_name"
                  type="text"
                  required
                  placeholder="First name"
                  className="text-base rounded-t-md"
                />
              </div>
              <div className="w-1/2">
                <Label htmlFor="last-name" className="sr-only">
                  Last name
                </Label>
                <Input
                  id="last-name"
                  name="last_name"
                  type="text"
                  required
                  className="text-base"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="email-address" className="sr-only">
                Email address
              </Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="text-base"
                placeholder="Email address"
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="text-base"
                placeholder="Password"
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="phone-number" className="sr-only">
                Phone number (Optional)
              </Label>
              <Input
                id="phone-number"
                name="phone_number"
                type="tel"
                placeholder="Phone number (Optional)"
                className="text-base rounded-b-md"
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <Button
              // formAction={signup}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </Button>
          </div>
        </form>
        <div className="text-center">
          <span className="text-sm text-gray-500">
            Already have an account?
          </span>
          <Link
            href="/login"
            className="relative ml-2 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            <Button variant="ghost">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
