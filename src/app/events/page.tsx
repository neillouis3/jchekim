import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LargeCard2 from "@/components/ui/largeCard2";


export default function Events() {
  
  return (
    <div className="bg-[#F3F4F6] w-screen h-fit flex flex-col items-center ">
        <div className="sticky top-0 z-10 w-full">
            <Header />
        </div>
        <div className="mt-10 px-16 w-full h-screen flex justify-center">
          <LargeCard2 title="Events" description="Come join JCHEKIM in worship and fellowship" imgUrl="/event.jpg" />
        </div>

        <Footer />

    </div>
  );
}
