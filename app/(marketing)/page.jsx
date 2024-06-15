import dynamic from 'next/dynamic';
// _components
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
//styles
import "./_components/custom-css.css";

// Dynamic imports
const Footer = dynamic(() => import('./_components/footer'), { ssr: false });
const HowItWorks = dynamic(() => import('./_components/howItWorks'), { ssr: false });
const UpcomingEvents = dynamic(() => import('./_components/upcomingEvents'), { ssr: false });

export default function Component() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1 pt-0">
        <section id="hero" className="w-full pt-0 overflow-hidden">
          <Hero />
        </section>
        <section id="how-it-works" className="w-full pt-12 pb-12 md:pt-24 lg:pt-32 dark:bg-gray-800">
          <HowItWorks/>
        </section>
        <section id="upcoming-events" className="w-full pt-12 pb-64 md:pt-24 lg:pt-32 dark:bg-gray-800">
          <UpcomingEvents />
        </section>
      </main>
      <Footer />
    </div>
  )
}
