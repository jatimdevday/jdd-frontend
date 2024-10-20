import { getSponsors } from "@/lib/firebase";
import { Sponsors } from "@/lib/schema";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Sponsor = async () => {
  const data = (await getSponsors()) as Sponsors;
  return (
    <div className="py-[70px]" id="sponsor">
      <div className="flex mb-10 justify-center items-center gap-3">
        <Image
          quality={100}
          src="/black-star.png"
          alt=""
          width={20}
          height={0}
          style={{
            objectFit: "contain",
          }}
        />
        <p className="font-semibold text-lg">Our Sponsor</p>
        <Image
          quality={100}
          src="/black-star.png"
          alt=""
          width={20}
          height={0}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <Marquee speed={150}>
        {data?.map((item, index) => (
          <Image
            key={index}
            quality={100}
            src={item.logo}
            alt={item.name}
            width={250}
            height={100}
            className="mx-8"
            style={{
              objectFit: "contain",
            }}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Sponsor;
