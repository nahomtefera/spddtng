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
        {src: "/marketing/couple1.jpg", bgColor: "#E098A2"},
        {src: "/marketing/couple2.jpg", bgColor: "#de9b37"},
        {src: "/marketing/couple3.jpg", bgColor: "#E3E3E3"},
        {src: "/marketing/couple4.jpg", bgColor: "#F89FBA"},
        {src: "/marketing/couple5.jpg", bgColor: "#9ED6DF"},
        {src: "/marketing/couple6.jpg", bgColor: "#F4CB09"},
        {src: "/marketing/couple7.jpg", bgColor: "#9ecee7"},
        {src: "/marketing/couple8.jpg", bgColor: "#c96f42"},
    ]

    const currentImage = images[currentIndex];

    return (
        <div
            className="flex items-center justify-center h-screen transition-colors duration-100 pt-40"
            style={{ backgroundColor: currentImage.bgColor }}
        >
            <Image src={currentImage.src} alt="Slideshow image" width={800} height={800} />
        </div>
    )
}
