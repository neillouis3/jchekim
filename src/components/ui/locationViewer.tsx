import React from "react";

import LocationCard from "./locationCard";

export default function AboutViewer() {

    
    return (
        <div className="w-full h-full flex flex-row gap-4 items-center">
                    <div className="flex-1">
                        <LocationCard title="Purpose" imgUrl="/images/bibleStudy.jpg"/>
                    </div>
                    <div className="flex-1">
                        <LocationCard title="History" imgUrl="/images/history.jpg"/>
                    </div>



        </div>
    )
}