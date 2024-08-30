import Image from "next/image";
import React from "react";
import { getCommunities } from "@/lib/firebase";
import { Communities } from "@/lib/schema";
import DarkStar from "@/assets/svgs/DarkStar";
import Marquee from "react-fast-marquee";

const logos = [
  "community-logo.png",
  "community-logo.png",
  "community-logo.png",
  "community-logo.png",
  "community-logo.png",
  "community-logo.png",
];

const Community = async () => {
  const communities = (await getCommunities()) as Communities;
  console.log(communities);
  return (
    <div className=" bg-white text-black pt-[96px] pb-[100px]">
      <div className="mx-auto flex items-center">
        <div className="w-[100%]">
          <div className="flex mb-3 justify-center">
            <div className="flex items-center gap-3">
              <DarkStar />
              <h3 className="font-semibold text-[15px]">Thank&apos;s to</h3>
              <DarkStar />
            </div>
          </div>
          <h1 className="text-center ms-[10px] mb-10 font-semibold text-[47px] me-[10px]">
            Community
          </h1>
          <Marquee speed={150}>
            {logos.map((logo, index) => (
              <Image
                key={index}
                quality={100}
                src={`/${logo}`}
                alt={`Community ${index + 1}`}
                width={170}
                height={170}
                className="mx-8"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Community;
