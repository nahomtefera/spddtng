/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RVYqyPMnM3D
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// _components
import Navbar from "./_components/navbar"
import Hero from "./_components/hero"
//styles
import "./_components/custom-css.css"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1 pt-0">
        <section id="hero" className="w-full pt-0">
          <Hero />
        </section>
        <section id="features" className="w-full pt-12 md:pt-24 lg:pt-32 bg-gray-100 dark:bg-gray-800">

        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">

        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">

        </section>
      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        Footer
      </footer>
    </div>
  )
}
