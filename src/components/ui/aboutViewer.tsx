'use client'

import React from "react";

import MediumCard from "./mediumCard";

export default function AboutViewer() {

    
    return (
        <div className="w-full h-full flex flex-row gap-4 items-center">
                    <div className="flex-1">
                        <MediumCard title="Purpose" imgUrl="/images/bibleStudy.jpg"/>
                    </div>
                    <div className="flex-1">
                        <MediumCard title="History" imgUrl="/images/history.jpg"/>
                    </div>

                    <div className="flex-1">
                        <MediumCard title="Belief" imgUrl="/images/bible.jpg"/>
                    </div>
                    <div className="flex-1">
                        <MediumCard title="Location" imgUrl="/images/prayerMeeting.jpg"/>
                    </div>


        </div>
    )
}