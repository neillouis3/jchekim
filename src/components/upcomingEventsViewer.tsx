import EventCard from "./ui/eventCard"
export default function UpcomingEventsViewer () {
    return (
        <div className="w-full h-full grid grid-cols-3 items-center gap-4">
            <div className="">
                <EventCard title="Fifth Friday" date="Dec 25, 2024" imgUrl="/images/bibleStudy.jpg"/>

            </div>
            <div className="">
                <EventCard title="Fifth Friday" date="Dec 25, 2024" imgUrl="/images/bibleStudy.jpg"/>

            </div>
            <div className="">
                <EventCard title="Christmas Celebration" date="Dec 25, 2024" imgUrl="/images/bibleStudy.jpg"/>

            </div>
            <div className="">
                <EventCard title="Newyear Celebration" date="Jan 1, 2025" imgUrl="/images/history.jpg"/>
            </div>




        </div>
    )
}