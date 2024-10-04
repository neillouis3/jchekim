import React from "react"

export default function LargeCard () {
    return (
        <div  className="w-full h-4/5 bg-white rounded-xl ">
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/K5tSMf9DnSc"  // Updated to embed URL
                title="YouTube video player" 
                className="rounded-xl"  // Added class for rounded corners
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    )
}