'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
    
        return () => clearInterval(interval);
      }, []);
    

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

    const currentImage = images[currentIndex];

    return (
        <div
            className="flex items-center justify-center transition-colors duration-100 pt-40 shadow-sm"
            style={{ backgroundColor: currentImage.bgColor }}
        >   
            <div className='relative'>
                <h1 className='absolute -top-10 -left-10 text-6xl text-white font-semibold'>
                    Spark new <br />
                    connections this <br />
                    spring
                </h1>
                <Image 
                    className='hero-img'
                    src={currentImage.src} 
                    alt="Slideshow image" 
                    width={900} 
                    height={900}
                />
            </div>
        </div>
    )
}
