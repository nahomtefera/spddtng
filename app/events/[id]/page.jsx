'use client';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
// import events from '@/lib/mockEvents';
import { Button } from '@/components/ui/button';
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UsersIcon,
} from '@/lib/customIcons';
import Loading from '@/components/loading';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

export default function EventPage() {
  const [event, setEvent] = useState([]);

  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [gender, setGender] = useState('');
  const [showCheckoutPage, setShowCheckoutPage] = useState(false);
  const [widgetRendered, setWidgetRendered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768; // You can adjust the threshold
      setIsMobile(isMobileView);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const widgetRef = useRef(null);
  const mutationObserver = new MutationObserver(async () => {
    console.log('mutationObserver operation');
    console.log(
      'document.querySelectorAll(".eds-modal-title"): ',
      document.querySelector('#eds-modal-title')
    );
    if (widgetRef.current.children.length > 0) {
      console.log('children added: ', widgetRef.current.children);
      const iframe = widgetRef.current.querySelector('iframe');
      if (iframe) {
        iframe.addEventListener('load', () => {
          setWidgetRendered(true);
        });
      }
    }
  });

  // widget mutations
  useEffect(() => {
    console.log('widgetRef.current: ', widgetRef.current);
    console.log('widgetRendered: ', widgetRendered);
    if (widgetRef.current) {
      mutationObserver.observe(widgetRef.current, {
        childList: true,
        subtree: true,
      });

      return () => {
        mutationObserver.disconnect();
      };
    }
  }, [showCheckoutPage, widgetRendered]);

  useEffect(() => {
    fetch(`/api/eventbrite/events/${id}`, { cache: 'no-store' })
      .then((data) => data.json())
      .then((event) => {
        // console.log('event', event);
        setEvent(event);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (showCheckoutPage) {
      console.log('build widget');
      var exampleCallback = function () {
        console.log('Order complete!');
      };

      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: id,
        iframeContainerId: `eventbrite-widget-container-${id}`,
        iframeContainerHeight: isMobile ? 650 : 800,
        onOrderComplete: exampleCallback,
      });
    }
  }, [showCheckoutPage]);

  if (loading) return <Loading />;
  if (!event) return <div>Event not found</div>;

  const handleCheckout = () => {
    router.push(`https://www.eventbrite.com/e/${id}`);
  };

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      <div className="relative">
        <Image
          src={event.logo.url}
          width={550}
          height={550}
          alt="Hero"
          unoptimized
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className={`${
          showCheckoutPage && 'bg-white'
        } h-auto transition transition-all-300 relative flex flex-col justify-between bg-muted p-8 md:p-12 lg:p-16`}
      >
        {showCheckoutPage && event.status == 'live' ? (
          <div className="h-full" style={{ height: '100%' }}>
            <div className="absolute top-1 left-1 lg:top-5 lg:left-5 cursor-pointer">
              <ArrowLeftIcon
                onClick={() => {
                  setShowCheckoutPage(false);
                  setWidgetRendered(false);
                }}
                className="w-10 h-10"
              />
            </div>
            {!widgetRendered && (
              <div className="absolute top-0 left-0 w-full backdrop-blur-md bg-[##ffffff00]">
                {<Loading color="f05537" text="Loading Tickets.." />}
              </div>
            )}

            <div
              ref={widgetRef}
              id={`eventbrite-widget-container-${id}`}
              className="h-full"
              style={{ height: '100%' }}
            ></div>
          </div>
        ) : (
          <EventDetails
            event={event}
            setShowCheckoutPage={setShowCheckoutPage}
            handleBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}

const EventDetails = ({ event, setShowCheckoutPage, handleBack }) => {
  return (
    <>
      <div className="absolute top-1 left-1 lg:top-5 lg:left-5 cursor-pointer">
        <ArrowLeftIcon onClick={handleBack} className="w-10 h-10" />
      </div>
      <div>
        <div className="space-y-4 lg:mt-10">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Speed Dating
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            {event.name.text}
          </h1>
          <p className="text-muted-foreground md:text-xl lg:text-base/relaxed xl:text-xl/relaxed">
            {event.summary}
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-col sm:items-center lg:items-start">
          <div className="grid gap-2">
            <div className="text-lg font-semibold flex items-center gap-3">
              <CalendarIcon stroke="black" className="w-7 h-7" />
              June 24, 2023 - June 25, 2023
            </div>
          </div>
          <div className="grid gap-2">
            <div className="text-lg font-semibold flex items-center gap-3">
              <MapPinIcon stroke="black" className="w-7 h-7" />
              Acme Park, 123 Main St, Anytown USA
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button
          size="lg"
          className="w-full sm:w-auto"
          onClick={() => {
            setShowCheckoutPage(true);
          }}
        >
          Buy Tickets
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto">
          Learn More
        </Button>
      </div>
    </>
  );
};
