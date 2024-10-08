import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LargeCard2 from "@/components/ui/largeCard2";
import MediumCard from "@/components/ui/mediumCard";


export default function About() {
  
  return (
    <div className="bg-[#F3F4F6] w-screen h-fit flex flex-col items-center ">
        <div className="sticky top-0 z-10 w-full">
            <Header />
        </div>
        <div className="mt-10 mb-16 px-16 w-full h-[40vh] flex justify-center">
          <LargeCard2 imgUrl="/about.jpg" title="About" description="Learn more about JCHEKIM"/>
        </div>
        <div className="w-full flex px-16 mb-32">
          <h1 className="flex-1 font-black text-3xl">More on JCHEKIM</h1>
          <div className="flex-5 flex flex-row w-full gap-4">
            <div className="flex-1">
                <MediumCard title="Purpose" imgUrl="/images/bibleStudy.jpg"/>
            </div>
            <div className="flex-1">
                <MediumCard title="History" imgUrl="/images/history.jpg"/>
            </div>


        </div>

          </div>
        <Footer />

    </div>
  );
}
