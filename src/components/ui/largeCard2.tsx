import React from "react";
import Image from "next/image";
export default function LargeCard2() {
    return (
        <div className="relative w-full h-2/5 bg-[#4b52a3] rounded-xl flex flex-col justify-center items-center">
            <Image width={500} height={500} src="/media/event.jpg" alt="Event" className="w-full h-full rounded-xl object-cover"/>
            <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full rounded-xl backdrop-blur">
                <h1 className="text-9xl text-white font-black">
                    Events
                </h1>
                <h1 className="text-xl -ml-2 -mt-4 text-white ">
                    Come join us in our praise & worship to God
                </h1>
            </div>
        </div>
    );
}
