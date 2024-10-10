'use client'

import React from "react";

import MediumCard from "./mediumCard";

export default function GetInvolvedViewer() {

    
    return (
        <div className="w-full h-full flex flex-row gap-4 items-center">
                    <div className="flex-1">
                        <MediumCard title="" imgUrl="/images/youth.png"/>
                    </div>
                    <div className="flex-1">
                        <MediumCard title="" imgUrl="/images/mudi.png"/>
                    </div>



        </div>
    )
}