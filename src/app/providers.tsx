'use client'

import React from "react";
import {HeroUIProvider} from '@heroui/react'
import {ReduxProvider} from "@/store/provider";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}: { children: React.ReactNode }) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <ReduxProvider>
            <HeroUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="dark">
                    {children}
                </NextThemesProvider>
            </HeroUIProvider>
        </ReduxProvider>
    )
}
