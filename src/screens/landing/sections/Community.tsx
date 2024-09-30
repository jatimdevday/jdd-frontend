import Image from "next/image";
import React from "react";
import { getCommunities } from "@/lib/firebase";
import { Communities } from "@/lib/schema";
import DarkStar from "@/assets/svgs/DarkStar";
import Marquee from "react-fast-marquee";

const Community = async () => {
  const communities = (await getCommunities()) as Communities;

  return (
    <div className="py-12 md:py-24">
      <div className="flex items-center gap-3 justify-center">
        <DarkStar />
        <p className="font-semibold">Thank&apos;s to</p>
        <DarkStar />
      </div>
      <p className="text-center mb-12 font-semibold text-4xl md:text-5xl mt-3">
        Community
      </p>
      <Marquee speed={150}>
        {communities.map((item, index) => (
          <Image
            key={index}
            quality={100}
            src={item.logo}
            alt={item.name}
            width={120}
            height={120}
            className="mx-8"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Community;
