import React from "react";
import Header from "@/components/header";
import LargeCard from "@/components/ui/largeCard"
import Footer from "@/components/footer";
import GetInvolvedViewer from "@/components/ui/getInvolvedViewer";


const AboutViewer = React.lazy(() => import('@/components/ui/aboutViewer'));
const EventViewer = React.lazy(() => import('@/components/ui/eventViewer'));
const MediaViewer = React.lazy(() => import('@/components/ui/mediaViewer'));

export default function Home() {
  const images = [
    { src: '/media/1.JPG', alt: 'Image 1' },
    { src: '/media/2.JPG', alt: 'Image 2' },
    { src: '/media/3.JPG', alt: 'Image 3' },
    // Add more images here
  ];
  return (
    <>
      <link
        rel="icon"
        href="/icon.png" // Updated href to a valid icon path
        type="image/png" // Updated type to a valid image type
        sizes="16x16" // Updated sizes to a valid size
      />
      <div className="bg-[#F3F4F6] w-screen h-fit flex flex-col items-center ">
        <div className="sticky top-0 z-10 w-full">
            <Header />
        </div>
        <div className="mt-10 px-16 w-full h-screen flex justify-center">
          <LargeCard />
        </div>
        <div className="-mt-20 px-16 w-full h-fit mb-4 ">
          <h1 className="text-black font-black text-8xl h-fit mb-4">
            Welcome to
          </h1>
        
          <div className="font-black w-full h-fit text-6xl text-[#4b52a3]">
            <span className="text-theme opacity-100">J</span>
            <span className="opacity-50 hover:opacity-100 transition-opacity duration-300">esus </span>
            <span className="text-theme opacity-100">C</span>
            <span className="opacity-50 hover:opacity-100 transition-opacity duration-300">hrist </span>
            <span className="opacity-50 hover:opacity-100 transition-opacity duration-300">The </span>
            <span className="text-theme opacity-100">H</span>
            <span className="opacity-50 hover:opacity-100 transition-opacity duration-300">ighly </span>
            <span className="text-theme opacity-100">E</span>
            <span className="opacity-50 hover:opacity-100 transition-opacity duration-300">xalted </span>
            <span className="text-theme opacity-100">K</span>
            <span className="opacity-50 hover:opacity-100 transition-opacity duration-300">ing </span>
            <span className="text-theme opacity-100">I</span>
            <span className="opacity-50 hover:opacity-100 transition-opacity duration-300">nternational </span>
            <span className="text-theme opacity-100">M</span>
            <span className="opacity-50 hover:opacity-100 transition-opacity duration-300">inistry</span>
          </div>
          <div className="text-black mt-16 w-1/2">
            <p>
              9 Wherefore God also hath highly exalted him, and given him a name which is above every name:
          
              10 That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth;
              
              11 And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.
            </p>
            <h1 className="font-bold">Philippians 2:9-11</h1>
          </div>
        </div>

        <div className="mt-32  w-full px-16 bg-theme py-16">
          <h1 className="text-6xl text-[#f3e632] font-black">ABOUT</h1>
          <h1 className="text-6xl text-[#f3e632] font-black  mb-4">JCHEKIM</h1>
          
          <AboutViewer />
        </div>
        <div className=" w-full px-16 bg-white py-16">
          <h1 className="text-6xl text-theme font-black">GET</h1>
          <h1 className="text-6xl text-theme font-black mb-4">INVOLVED</h1>
          <GetInvolvedViewer />
        </div>
        <div className=" w-full px-16 bg-[#4b52a3] py-16">
          <h1 className="text-6xl text-white font-black">UPCOMING</h1>
          <h1 className="text-6xl text-white font-black mb-4">EVENTS</h1>
          <EventViewer />
        </div>
        <div className="my-16 w-full px-16 ">
          <MediaViewer images={images} />
        </div>

        <Footer />

      </div>
    </>
  );
}
