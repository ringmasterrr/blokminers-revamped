import Heading from "@/components/shared/Heading/Heading";
import { BlockContent } from "./BlockContent";


export default function WhySection() {
    return (
        <div className="my-24 z-[10000000]">
            <Heading heading={"Why BlokMiners"} message={"Opt for BlokMiners for pioneering blockchain solutions driving transparent and secure digital transformations."} />
            <BlockContent/>
        </div>
    )
}