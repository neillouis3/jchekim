'use client'

import React from "react";

import MediumCard from "./mediumCard";

export default function AboutViewer() {

    
    return (
        <div className="w-full h-full flex flex-row gap-4 items-center">
                    <div className="flex-1">
                        <MediumCard title="" imgUrl="/images/purpose.png"/>
                    </div>
                    <div className="flex-1">
                        <MediumCard title="" imgUrl="/images/history.png"/>
                    </div>

                    <div className="flex-1">
                        <MediumCard title="" imgUrl="/images/belief.png"/>
                    </div>



        </div>
    )
}