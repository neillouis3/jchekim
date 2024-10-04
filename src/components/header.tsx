import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return (
        <nav
            className="w-full bg-white h-fit py-2 flex px-16 items-center justify-between "
        >
            <div>
                <img src="/images/logo.jpg" className="w-12 h-fit" />
            </div>

            <div className="flex flex-row gap-12 text-gray-500 ">
                <Link href="#">
                    <div className="hover:text-black">
                        Events
                    </div>
                </Link>
                <Link href="#">
                    <div className="hover:text-black">
                        About JCHEKIM
                    </div>
                </Link>
                <Link href="#">
                    <div className="hover:text-black">
                        Locations
                    </div>
                </Link>
                <Link href="#">
                    <div className="hover:text-black">
                        Beliefs
                    </div>
                </Link>
            </div>
            
        </nav>
    )
}