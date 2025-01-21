import type {Metadata} from "next";
import {Archivo} from "next/font/google";
import "../styles/globals.css";
import {Providers} from "./providers";
import React from "react";
import Header from "@/components/layout/Header";
import {LayoutProps} from "@/types";
import {Toaster} from "react-hot-toast";
import {SITE_DESCRIPTION, SITE_NAME} from "@/utils/Constants";

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s - ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: [
        "fyze",
        "finance",
        "investments",
        "money",
        "budgeting",
        "stocks",
    ],
    authors: [{name: "Divyansh Gemini", url: "https://www.divyanshgemini.dev"}],
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        type: "website",
        siteName: SITE_NAME,
        title: {
            default: SITE_NAME,
            template: `%s - ${SITE_NAME}`,
        },
        description: SITE_DESCRIPTION,
        locale: "en_US",
        images: [
            {
                url: "/assets/svg/logo-with-background.svg",
                width: 500,
                height: 500,
                alt: SITE_NAME,
            },
        ],
        countryName: "India",
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        images: ["/assets/svg/logo-with-background.svg"],
    },
    manifest: "manifest.ts",
};

const RootLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <html lang="en">
        <body className={`${archivo.className} text-foreground bg-background`}>
        <Providers>
            <Header/>

            <Toaster
                position="top-right"
                reverseOrder={false}
                containerClassName="mt-14"/>

            {children}
        </Providers>
        </body>
        </html>
    );
};

export default RootLayout;