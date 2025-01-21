"use client";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle
} from "@heroui/navbar";
import {Button} from "@heroui/button";
import Logo from "@/components/common/Logo";
import {usePathname} from 'next/navigation'
import Link from "next/link";
import {ThemeSwitcher} from "@/components/feature/ThemeSwitcher";

const Header: React.FC = () => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar isBordered
                onMenuOpenChange={setIsMenuOpen}
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "items-center",
                        "data-[active=true]:text-warning",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-1",
                        "data-[active=true]:after:rounded-t-lg",
                        "data-[active=true]:after:bg-warning",
                    ],
                }}
        >
            {/* Left */}
            <NavbarContent>
                {/* Menu Toggle */}
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"/>

                {/* Logo */}
                <NavbarBrand>
                    <Logo/>
                </NavbarBrand>
            </NavbarContent>

            {/* Center */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {/* Stocks */}
                <NavbarItem isActive={pathname == "/stocks"}>
                    <Link href="/stocks">
                        Stocks
                    </Link>
                </NavbarItem>

                {/* Recommendations */}
                <NavbarItem isActive={pathname == "/"}>
                    <Link href="/">
                        Recommendations
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* Right */}
            <NavbarContent justify="end">
                <ThemeSwitcher/>

                {/* Login */}
                <NavbarItem className="hidden lg:flex">
                    <Button as={Link} color="warning" href="#" variant="bordered">
                        Login
                    </Button>
                </NavbarItem>

                {/* Sign up */}
                <NavbarItem>
                    <Button as={Link} color="warning" href="#" variant="solid">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* Menu */}
            <NavbarMenu>
                {/* Stocks */}
                <NavbarMenuItem isActive={pathname === "/stocks"}>
                    <Link href="/stocks"
                          color={pathname === "/stocks" ? "warning" : "foreground"}
                          className="w-full">
                        Stocks
                    </Link>
                </NavbarMenuItem>

                {/* Recommendations */}
                <NavbarMenuItem isActive={pathname === "/"}>
                    <Link href="/"
                          color={pathname === "/" ? "warning" : "foreground"}
                          className="w-full">
                        Recommendations
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default Header;
