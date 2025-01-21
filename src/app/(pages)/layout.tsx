import React from "react";
import {Toaster} from "react-hot-toast";
import {LayoutProps} from "@/types";

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
                containerClassName="mt-14"
            />

            <main className="min-h-screen py-10 relative overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-64 h-64 bg-bubble-top-right bg-no-repeat bg-contain opacity-70 translate-x-1/3 -translate-y-1/3"
                ></div>

                {/* Bottom-left bubble */}
                <div
                    className="absolute bottom-0 left-0 w-64 h-64 bg-bubble-bottom-left bg-no-repeat bg-contain opacity-70 -translate-x-1/3 translate-y-1/3"
                ></div>

                {children}
            </main>
        </>
    );
};

export default Layout;
