import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MediumCard({title, href = "#", imgUrl}: {title: string; href?: string; imgUrl: string}) {

    return (
        <div className="w-full h-64 flex flex-col rounded-xl group mb-12">
            <Link href={href}> {/* Updated href */}
            <div className="w-full h-64 relative"> {/* Updated height to h-32 */}
                <Image
                    src={imgUrl} 
                    alt="logo"
                    width={500} 
                    height={500}
                    className="w-full h-full rounded-xl transition-all duration-300 group-hover:opacity-50 object-cover" 
                /> {/* Added object-cover to maintain aspect ratio */}
                <div className="absolute inset-0 flex w-full h-full bg-black bg-opacity-50 rounded-xl justify-center items-center">
                    <h1 className="text-md text-white p-2 rounded-xl">{title}</h1>
                </div>
            </div>
            </Link>



        </div>
    );
}