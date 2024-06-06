import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-start">
                <Link href="#" className="inline-flex items-center mb-4" prefetch={false}>
                    <MountainIcon className="h-8 w-8 mr-2" />
                    <span className="text-2xl font-bold">Spddtng Inc.</span>
                </Link>
                <address className="not-italic text-sm text-gray-400 mb-4">
                    123 Main Street
                    <br />
                    Anytown, USA 12345
                </address>
                <div className="flex space-x-4">
                    <Link href="#" className="text-sm hover:text-gray-300" prefetch={false}>
                    Privacy Policy
                    </Link>
                    <Link href="#" className="text-sm hover:text-gray-300" prefetch={false}>
                    Terms of Service
                    </Link>
                </div>
                </div>
                <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <nav className="space-y-2">
                    <Link href="#" className="text-sm pr-5 hover:text-gray-300" prefetch={false}>
                    Home
                    </Link>
                    <br />
                    <Link href="#" className="text-sm pr-5 hover:text-gray-300" prefetch={false}>
                    About Us
                    </Link>
                    <br />
                    <Link href="#" className="text-sm pr-5 hover:text-gray-300" prefetch={false}>
                    Events
                    </Link>
                </nav>
                </div>
                <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-sm text-gray-400 mb-4">
                    Subscribe to our newsletter to stay up-to-date on our latest news and events.
                </p>
                <form className="flex space-x-2 w-full">
                    <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-800 border-none focus:ring-0 focus:outline-none"
                    />
                    <Button type="submit" className="bg-gray-800 hover:bg-gray-700">
                    Subscribe
                    </Button>
                </form>
                </div>
                <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
                <div className="flex space-x-4">
                    <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    <TwitterIcon className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    <FacebookIcon className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
                    <InstagramIcon className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                    </Link>
                </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-8 text-center text-sm text-gray-400">
                &copy; 2024 Spddtng Inc. All rights reserved.
            </div>
        </footer>
    )
}

function FacebookIcon(props) {
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
  
  function InstagramIcon(props) {
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
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
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
  
  
  function TwitterIcon(props) {
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
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }