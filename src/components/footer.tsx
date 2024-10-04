import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer () {
    return (
        <nav
            className="w-full bg-white h-96 px-16 py-8 flex flex-col"
        >
            <div className="flex flex-row items-end h-fit w-full mb-8">
                <img src="/images/logo.jpg" className="w-32 h-fit" />
            </div>
            <div className="flex flex-row gap-4 text-gray-500 ">
                <Link href="#">
                    <div className="underline hover:text-black">
                        Events
                    </div>
                </Link>
                <Link href="#">
                    <div className="underline hover:text-black">
                        About JCHEKIM
                    </div>
                </Link>
                <Link href="#">
                    <div className="underline hover:text-black">
                        Locations
                    </div>
                </Link>
                <Link href="#">
                    <div className="underline hover:text-black">
                        Beliefs
                    </div>
                </Link>
            </div>

            <div className="mt-auto text-gray-500 text-sm">
                <p>© 2024 JCHEKIM. All rights reserved.</p>
                <p className="opacity-10">neillouis3</p>
            </div>
            
        </nav>
    )
}