'use client'

import React from "react";


import EventViewerCard from "./eventViewerCard";

export default function EventViewer() {
    
    return (
        <div className="w-full h-full flex flex-row items-center gap-4">

            <div className="flex-1">
                <EventViewerCard title="JCHEKIM Jeddah 16th Anniversary" date="" imgUrl="/images/bibleStudy.jpg"/>
        
            </div>
            <div className="flex-1">
                <EventViewerCard title="Friday Service" date="" imgUrl="/images/history.jpg"/>
            </div>



        </div>
    )
}