'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
    const [api, setApi] = useState(null)
    const [current, setCurrent] = useState(0)
    
    useEffect(() => {
        if (!api) {
            return
        }
    
        setCurrent(api.selectedScrollSnap())
    
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const images = [
        {src: "/images/marketing/couple1.webp", bgColor: "#E098A2"},
        {src: "/images/marketing/couple2.webp", bgColor: "#de9b37"},
        {src: "/images/marketing/couple3.webp", bgColor: "#E3E3E3"},
        {src: "/images/marketing/couple4.webp", bgColor: "#F89FBA"},
        {src: "/images/marketing/couple5.webp", bgColor: "#9ED6DF"},
        {src: "/images/marketing/couple6.webp", bgColor: "#F4CB09"},
        {src: "/images/marketing/couple7.webp", bgColor: "#9ecee7"},
        {src: "/images/marketing/couple8.webp", bgColor: "#c96f42"},
    ]

    return (
        <div className="relative w-full mx-auto pt-5 pb-0">
            <div 
                className={`carousel-background absolute w-full h-full inset-0 bg-cover bg-center`}
                style={{ backgroundColor: images[current].bgColor }}
            />
            <div 
                className={`carousel-background absolute w-full h-full inset-0 bg-cover bg-center blur-[15px]`}
                style={{ backgroundImage: `url(${images[current].src})`, backgroundColor: images[current].bgColor }}
            >
                <Image
                    // src={images[current].src}
                    alt="Carousel background"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                />
            </div>

            <Carousel 
                plugins={[Autoplay({delay: 5000,}),]}
                setApi={setApi}
                className="relative z-10 px-4 py-12 sm:px-6 lg:px-8 pb-0 max-w-6xl mx-auto"
            >
                
                <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8 pb-0">
                    
                    <CarouselContent>
                        {images.map((image, i) => (
                        <CarouselItem key={i}>
                            <div className="flex flex-col items-center justify-center h-[500px] sm:h-[600px] rounded-lg rounded-b-none overflow-hidden">
                            <Image
                                src={image.src}
                                alt={`Carousel image ${i + 1}`}
                                width={800}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* navigation */}
                    {/* <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                        <ChevronLeftIcon className="w-6 h-6" />
                        <span className="sr-only">Previous</span>
                    </CarouselPrevious>
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRightIcon className="w-6 h-6" />
                        <span className="sr-only">Next</span>
                    </CarouselNext> */}
                    <h1 className='absolute md:text-6xl text-4xl bottom-10 left-10 sm:left-20 md:left-20   text-white font-semibold'>
                        Spark new <br />
                        connections this <br />
                        summer
                    </h1>
                </div>
                
            </Carousel>
        </div>
    )
}


function ChevronLeftIcon(props) {
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
        <path d="m15 18-6-6 6-6" />
      </svg>
    )
}
  
  
function ChevronRightIcon(props) {
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
        <path d="m9 18 6-6-6-6" />
        </svg>
    )
}