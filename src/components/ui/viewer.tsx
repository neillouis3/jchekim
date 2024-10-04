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

export default function Viewer() {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
   
    React.useEffect(() => {
      if (!api) {
        return
      }
   
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
   
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])
   
    const handlePrevious = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])
   
    const handleNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])
   
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
                    <CarouselItem className="pl-4 basis-1/3">
                        <MediumCard />
                    </CarouselItem>
                    <CarouselItem className="pl-4 basis-1/3">
                        <MediumCard />
                    </CarouselItem>
                    <CarouselItem className="pl-4 basis-1/3">
                        <MediumCard />
                    </CarouselItem>
                    <CarouselItem className="pl-4 basis-1/3">
                        <MediumCard />
                    </CarouselItem>
                    <CarouselItem className="pl-4 basis-1/3">
                        <MediumCard />
                    </CarouselItem>
                    <CarouselItem className="pl-4 basis-1/3">
                        <MediumCard />
                    </CarouselItem>
                    
                </CarouselContent>
            </Carousel>
            <div className="flex w-full space-x-2 mt-4  items-center">
                <button onClick={handlePrevious} className="w-6 justify-center items-center h-6 bg-gray-200 rounded-full">
                    &lt;
                </button>
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === current - 1
                                ? 'w-2 bg-gray-400'
                                : 'w-2 bg-gray-500'
                        }`}
                    />
                ))}
                <button onClick={handleNext} className="w-6 h-6 bg-gray-200 rounded-full">
                    &gt;
                </button>
            </div>

        </div>
    )
}