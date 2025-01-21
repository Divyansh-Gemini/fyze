import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
    return (
        <Link href="/">
            {/*<Image src="/assets/svg/logo-transparent.svg" alt="logo" radius="none" className="w-4 h-4"/>*/}
            <p className="text-2xl font-bold text-inherit">FYZE</p>
        </Link>
    );
};

export default Logo;
