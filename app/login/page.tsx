// supabase login
import { login } from './actions'
// components
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LockIcon, MountainIcon, ChromeIcon, AppleIcon } from '@/lib/customIcons'
import Link from 'next/link'
import Image from 'next/image'

export default function LoginPage() {
    return (
        <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <Link href="/"
                            prefetch={false}
                        >
                            <MountainIcon stroke="black" className="mx-auto h-12 w-auto" />
                        </Link>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>
                    <div className="grid gap-6">
                        <Button variant="outline" className="w-full">
                        <ChromeIcon className="mr-2 h-5 w-5" />
                        Sign in with Google
                        </Button>
                        <Button variant="outline" className="w-full">
                        <AppleIcon className="mr-2 h-5 w-5" />
                        Sign in with Apple
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500 dark:bg-gray-950 dark:text-gray-400">Or continue with</span>
                        </div>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-3">
                            <div>
                                <Label htmlFor="email" className="sr-only">
                                    Email address
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="text-base relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <Label htmlFor="password" className="sr-only">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="text-base relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="text-base h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </Label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <Button
                                formAction={login}
                                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
                                </span>
                                Sign in
                            </Button>
                        </div>
                    </form>
                    <div className="text-center">
                        <span className="text-sm text-gray-500">Don&apos;t have an account?</span>
                        <Link
                            href="/signup"
                            className="relative ml-2 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            <Button variant="ghost">Sign up</Button>
                        </Link>

                    </div>
                </div>
            </div>

            <div className="hidden shadow-lg bg-gray-100 lg:block dark:bg-gray-800">
                <Image src="/images/marketing/couple1.webp" alt="Image" width={1920} height={1080} className="h-full w-full object-cover" />
            </div>
        </div>
    )
}