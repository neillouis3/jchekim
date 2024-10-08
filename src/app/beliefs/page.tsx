import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LargeCard2 from "@/components/ui/largeCard2";


export default function Belief() {
  
  return (
    <div className="bg-[#F3F4F6] w-screen h-fit flex flex-col items-center ">
        <div className="sticky top-0 z-10 w-full">
            <Header />
        </div>
        <div className="mt-10 px-16 w-full h-[40vh] flex justify-center">
          <LargeCard2 imgUrl="/belief.jpg" title="Belief" description="Find out what JCHEKIM believes in"/>
        </div>

        <Footer />

    </div>
  );
}
