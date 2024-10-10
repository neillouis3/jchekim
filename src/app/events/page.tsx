import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LargeCard2 from "@/components/ui/largeCard2";
import PreviousEventsViewer from "@/components/previousEventsViewer";
import UpcomingEventsViewer from "@/components/upcomingEventsViewer";


export default function Events() {
  
  return (
    <div className="bg-[#F3F4F6] w-screen h-fit flex flex-col items-center ">
        <div className="sticky top-0 z-10 w-full">
            <Header />
        </div>
        <div className="mb-32 px-16 w-full h-fit">
            <div className="mt-10 w-full h-[40vh] mb-16 flex justify-center">
            <LargeCard2 title="Events" description="" imgUrl="/event.jpg" />
            </div>

            <div className="w-full flex gap-4 ">
                <div className="flex-1 w-full">
                    <h1 className=" font-black text-5xl text-right text-theme">Upcoming Events</h1>
                </div>
                <div className="flex-4 w-full">
                    <UpcomingEventsViewer />
                </div>
                
            </div>

            <div className="w-full flex gap-4 ">
                <div className="flex-1 w-full">
                    <h1 className="font-black text-5xl text-right text-theme">Previous Events</h1>
                </div>
               
                <div className="flex-4 w-full">
                    <PreviousEventsViewer />
                </div>
                
            </div>
        </div>

        <Footer />

    </div>
  );
}
