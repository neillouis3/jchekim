import EventViewerCard from "./ui/eventViewerCard"
export default function UpcomingEventsViewer () {
    return (
        <div className="w-full h-full flex flex-row items-center gap-4">

            <div className="flex-1">
                <EventViewerCard title="Christmas Celebration" date="Dec 25, 2024" imgUrl="/images/bibleStudy.jpg"/>

            </div>
            <div className="flex-1">
                <EventViewerCard title="Newyear Celebration" date="Jan 1, 2025" imgUrl="/images/history.jpg"/>
            </div>
            <div className="flex-1">
            </div>



        </div>
    )
}