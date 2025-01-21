"use client";

import {useTheme} from "next-themes";
import React, {useEffect, useState} from "react";
import Icon from "@mdi/react";
import {mdiBrightness6} from "@mdi/js";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Icon path={mdiBrightness6}
                  title="Switch theme"
                  color={theme === "light" ? "black" : "white"}
                  size={1}/>
        </button>
    )
}