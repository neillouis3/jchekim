import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function EventCard({title, date, href = "#", imgUrl}: {title: string; date: string ;href?: string; imgUrl: string}) {

    return (
        <div className="w-full h-80 flex flex-col rounded-xl group">
            <Link href={href}> {/* Updated href */}
            <div className="w-full h-64 relative"> {/* Updated height to h-32 */}
                <Image
                    src={imgUrl} 
                    alt="logo" 
                    width={500}
                    height={500}
                    className="w-full h-full rounded-xl object-cover" 
                /> {/* Added object-cover to maintain aspect ratio */}
                <div className="flex flex-col w-full justify-center ">
                    <h1 className="mt-2 text-xl font-bold text-black rounded-xl">{title}</h1>
                    <h1 className="-mt-2 text-md text-black rounded-xl">{date}</h1>
                </div>
            </div>
            </Link>



        </div>
    );
}