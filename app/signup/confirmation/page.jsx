'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Link from "next/link"
import { useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CircleCheckIcon, InfoIcon, MailIcon } from '@/lib/customIcons';

export default function Component() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const emailProviderUrl = getEmailProviderUrl(email);
  const router = useRouter();


  useEffect(() => {
    if (!email) {
      router.push('/login'); // Redirect to login if no email is provided
    }
  }, [email, router]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
      <Card className="mx-auto max-w-md">
      <CardHeader>
        <CircleCheckIcon className="h-12 w-12 text-green-500" stroke="green" />
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Thank you for signing up!</h3><br />
          <p className="text-gray-500 dark:text-gray-400">
          A confirmation email has been sent to {email ? <strong>{email}</strong> : 'your email'}. Please check your inbox and follow the instructions to complete your signup.          
          </p>
        </div>
        <br />
        <div className="mt-6">
              {emailProviderUrl ? (
                <p className="text-left">
                  <Link
                    href={emailProviderUrl.href}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Open {emailProviderUrl.provider}
                  </Link>
                </p>
              ) : (
                <p className="text-center">
                  <Link
                    href="/login"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Go to Login
                  </Link>
                </p>
              )}
            </div>
      </CardContent>
              </Card>
      </div>
    </section>
  )
}

// 
const getEmailProviderUrl = (email) => {
  const domain = email.split('@')[1];
  switch (domain) {
    case 'gmail.com':
      return {href: 'https://mail.google.com', provider: 'Gmail'};
    case 'yahoo.com':
      return {href: 'https://mail.yahoo.com', provider: 'Yahoo Mail'};
    case 'outlook.com':
      return {href: 'https://outlook.live.com', provider: 'Outlook'};
    case 'hotmail.com':
      return {href: 'https://outlook.live.com', provider: 'Hotmail'};
    // Add more email providers as needed
    default:
      return null;
  }
};