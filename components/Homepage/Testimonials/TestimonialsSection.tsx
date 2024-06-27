import Heading from "@/components/shared/Heading/Heading";
import Corousel from "./Corousel";

export default function TestimonialsSection() {
    return (
        <div className="bg-dark flex flex-col gap-20 items-center py-20 z-[100]">
            <div className="flex flex-col gap-10 items-center text-white">
                <div className="px-5 py-1.5 border-2 border-white rounded-full">Testimonials</div>
                <Heading white={true} heading={"Hear from our clients"} message={"Our clients love working with us, just read what they have to say!"} />
            </div>
            <div className="w-full overflow-hidden">
                <Corousel />
            </div>
        </div>
    )
}