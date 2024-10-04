import React from "react";

export default function LargeCard() {
    return (
        <div className="w-full h-4/5 bg-white rounded-xl overflow-hidden">
            <video 
                className="w-full h-full object-cover rounded-xl" 
                autoPlay 
                controls
                playsInline
                preload="auto"
            >
                <source src="/media/anv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
