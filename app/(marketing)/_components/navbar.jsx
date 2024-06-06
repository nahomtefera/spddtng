import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white-20 bg-opacity-0 px-4 lg:px-6 h-14 flex items-center shadow-sm dark:bg-gray-950 dark:text-gray-50">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="#" className="flex items-center" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="hidden lg:flex gap-4 sm:gap-6">
              <Link href="#" className="text-md font-semibold hover:text-[#bd744b]" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-md font-semibold hover:text-[#bd744b]" prefetch={false}>
                How it works
              </Link>
              <Link href="#" className="text-md font-semibold hover:text-[#bd744b]" prefetch={false}>
                About us
              </Link>
              <Link href="#" className="text-md font-semibold hover:text-[#bd744b]" prefetch={false}>
                Events
              </Link>
            </nav>
            <Button>Get Started</Button>
        </div>
      </header>
    )
}

function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }