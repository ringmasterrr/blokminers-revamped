"use client";
import React from "react";

import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Header } from "../HeroSection/Header";
import Heading from "@/components/shared/Heading/Heading";

const content = [
  {
    title: "Plan",
    description:
      "We lay out a detailed conceptual workflow by collaborating closely with you to see how your idea becomes a product. We’ll determine the relevance of Blockchain to your project, the best Blockchain model to deploy, gain clarity on the specifics of your idea and work with it.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
         <Image
          src="/Processes/Plan.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Design",
    description:
      "We'll understand your potential users and then visually represent their experience via diagrams that give shape and form to the idea. At this stage, you can see the interactions between the elements on your software.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/Processes/Design.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Architect",
    description:
      "This is the skeletal framework of the project and at this point, we decide the Blockchain protocol based on type, energy efficiency, bridging strength and cost. We’ll also develop frameworks and determine smart contracts, business logic and storage.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
         <Image
          src="/Processes/Architect.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Build",
    description:
      "We write codes to support the functions and suit every consideration we have laid down in the earlier stages.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/Processes/Build.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Test",
    description:
      "We take pride in ourselves to minimize your go-to-market time. So, we using the best practices, gain useful feedback and fix even the smallest weaknesses, until we are ready to launch.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/Processes/Test.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Launch",
    description:
      "We’re present through every stage in the journey even after we’ve delivered your decentralised application. Safely deploy your products at this stage, you’ll typically gain traction all things being equal and also get more feedback to further solidify the app.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/Processes/Launch.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Upgrade",
    description:
      "There’s no perfect idea or software. You can only pay excellent attention to the most unnecessary details like we do. Regular updates and reviews keep your software alive as the world evolves. You can always count on our expert Blockchain tech team to readily deliver these solid upgrades.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/Processes/Upgrade.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

];

export function StickyScrollRevealDemo() {
  return (
    <div>
      <Heading heading="Our Processes" message="Our processes are tailored to hit it right with your idea from the start and also support optimum coordination, excellent and speedy execution of your Blockchain solution through its entirety."/>
      <StickyScroll content={content} />
    </div>
  );
}
