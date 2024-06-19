import React from "react";
// import Navbar from "@/components/ui/navbar";
import Navbar from "../../(marketing)/_components/navbar";
import dynamic from "next/dynamic";
import Script from "next/script";
const Footer = dynamic(() => import('../../(marketing)/_components/footer'), { ssr: false });

const MarketingLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="h-full dark:dark-background">
            <Script strategy="lazyOnload" src="https://www.eventbrite.com/static/widgets/eb_widgets.js" />
            <main className="h-full">
                {/* <Navbar /> */}
                {children}
                <Footer />
            </main>
        </div>
     );
}
 
export default MarketingLayout;