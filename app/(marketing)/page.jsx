import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// _components
import Navbar from "./_components/navbar"
import Hero from "./_components/hero"
import HowItWorks from "./_components/howItWorks"
//styles
import "./_components/custom-css.css"

export default function Component() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1 pt-0">
        <section id="hero" className="w-full pt-0">
          <Hero />
        </section>
        <section id="features" className="w-full pt-12 pb-64 md:pt-24 lg:pt-32 dark:bg-gray-800">
          <HowItWorks/>
        </section>

      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        Footer
      </footer>
    </div>
  )
}
