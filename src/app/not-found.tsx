"use client";

import React from "react";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";

const NotFound: React.FC = () => {
    return (
        <>
            <main className="h-[70vh] flex justify-center items-center">
                <DotLottieReact
                    src="assets/lottie/page-not-found.lottie"
                    loop
                    autoplay
                    className="w-96 h-96"
                />
            </main>
        </>
    );
};

export default NotFound;