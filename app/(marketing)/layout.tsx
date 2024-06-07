import React from "react";
// import Navbar from "@/components/ui/navbar";

const MarketingLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="h-full dark:dark-background">
            <main className="h-full">
                {children}
            </main>
        </div>
     );
}
 
export default MarketingLayout;