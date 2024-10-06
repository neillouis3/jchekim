import React from "react";
import Link from "next/link";

export default function Header () {
    return (
        <nav
            className="w-full bg-white h-fit py-2 flex px-16 items-center justify-between "
        >
            <Link className="w-12 h-fit p-0" href="/">  
                <img src="/images/logo.jpg" className="w-12 h-fit bg-black" />

            </Link>
            
            <div className="flex flex-row gap-12 text-gray-500 ">
                <Link href="/events">
                    <div className="hover:text-black">
                        Events
                    </div>
                </Link>
                <Link href="/about">
                    <div className="hover:text-black">
                        About
                    </div>
                </Link>
                <Link href="/locations">
                    <div className="hover:text-black">
                        Locations
                    </div>
                </Link>
                <Link href="/beliefs">
                    <div className="hover:text-black">
                        Beliefs
                    </div>
                </Link>
            </div>
            
        </nav>
    )
}