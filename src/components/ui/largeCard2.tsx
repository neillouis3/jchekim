import React from "react";
import Image from "next/image";
export default function LargeCard2({title, description, imgUrl="/media/event.jpg"}:{title:string; description: string; imgUrl:string}) {
    return (
        <div className="relative w-full h-full bg-[#4b52a3] rounded-xl flex flex-col justify-center items-center">
            <Image width={500} height={500} src={`/media${imgUrl}`} alt="Event" className="w-full h-full rounded-xl object-cover"/>
            <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full rounded-xl bg-black bg-opacity-50">
                <h1 className="text-8xl text-white font-black">
                    {title}
                </h1>
                <h1 className="text-l -ml-2 -mt-4 text-white ">
                    {description}
                </h1>
            </div>
        </div>
    );
}
