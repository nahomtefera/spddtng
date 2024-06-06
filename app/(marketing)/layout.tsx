import React from "react";
// import Navbar from "@/components/ui/navbar";

const MarketingLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="dark:dark-background">
            {/* <Navbar /> */}
            <main >
                {children}
            </main>
        </div>
     );
}
 
export default MarketingLayout;