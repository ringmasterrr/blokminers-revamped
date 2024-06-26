import Heading from "@/components/shared/Heading/Heading";
import CardContent from "./CardContent";

export default function ExploreSection() {
    return (
        <div className="relative mt-12 px-24 py-32">
            <div className="absolute inset-0 bg-[#D8F6FF] bg-opacity-60 bg-blur"></div>
            <Heading heading={"Explore our Offerings"} message={"At BlokMiners, we fuse innovation and expertise to deliver a customized range of services for the evolving digital landscape."} />
            <CardContent />
        </div>
    );
}