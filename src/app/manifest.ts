import type {MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        id: "com.samartha.fyze",
        name: "Fyze Dashboard",
        short_name: "Fyze",
        description: "Fyze helps you manage your finances and investments.",
        categories: ["finance", "investments", "money", "budgeting", "stocks"],
        start_url: "/",
        lang: "en",
        display: "standalone",
        background_color: "#E9E5DE",
        theme_color: "#092D35",
        icons: [
            {
                src: "/assets/svg/logo-with-background.svg",
                sizes: "512x512",
                type: "image/svg+xml",
            },
        ],
    };
}
