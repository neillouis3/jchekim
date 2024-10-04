'use client'

import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import MediumCard from "./mediumCard";

export default function AboutViewer() {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
   
    
    return (
        <div className="w-full h-full flex flex-col items-center">
            <Carousel 
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full"
                setApi={setApi}
            >
                <CarouselContent className="-ml-4">
                    <CarouselItem className="pl-4 basis-1/4">
                        <MediumCard title="Purpose" imgUrl="/images/bibleStudy.jpg"/>
                    </CarouselItem>
                    <CarouselItem className="pl-4 basis-1/4">
                        <MediumCard title="History" imgUrl="/images/history.jpg"/>
                    </CarouselItem>

                    <CarouselItem className="pl-4 basis-1/4">
                        <MediumCard title="Belief" imgUrl="/images/bible.jpg"/>
                    </CarouselItem>
                    <CarouselItem className="pl-4 basis-1/4">
                        <MediumCard title="Location" imgUrl="/images/prayerMeeting.jpg"/>
                    </CarouselItem>

                    
                </CarouselContent>
            </Carousel>

        </div>
    )
}