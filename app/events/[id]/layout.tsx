import React from "react";
// import Navbar from "@/components/ui/navbar";
import Navbar from "../../(marketing)/_components/navbar";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import('../../(marketing)/_components/footer'), { ssr: false });

const MarketingLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="h-full dark:dark-background">
            <main className="h-full">
                {/* <Navbar /> */}
                {children}
                <Footer />
            </main>
        </div>
     );
}
 
export default MarketingLayout;