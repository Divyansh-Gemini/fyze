import type {Config} from "tailwindcss";
import {heroui} from "@heroui/react";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                gray100: "var(--gray100)",
                gray300: "var(--gray200)",
                gray200: "var(--gray300)",
                gray400: "var(--gray400)",
                gray500: "var(--gray500)",
                gray600: "var(--gray600)",
            },
            backgroundImage: {
                'bubble-purple': "url('/bg-gradient-left.png')",
                'bubble-blue': "url('/bg-gradient-right.png')",
            }
        },
    },
    darkMode: "class",
    plugins: [
        heroui({
            defaultTheme: "light",
            themes: {
                light: {
                    colors: {}
                },
                dark: {
                    colors: {}
                }
            }
        })
    ],
} satisfies Config;
