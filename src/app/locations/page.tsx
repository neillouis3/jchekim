import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LargeCard2 from "@/components/ui/largeCard2";


export default function Location() {
  
  return (
    <div className="bg-[#F3F4F6] w-screen h-fit flex flex-col items-center ">
        <div className="sticky top-0 z-10 w-full">
            <Header />
        </div>
        <div className="mt-10 px-16 w-full h-[40vh] flex justify-center">
          <LargeCard2 imgUrl="/location.jpg" title="Locations" description="Come join us to praise & worship the Lord" />
        </div>

        <Footer />

    </div>
  );
}
