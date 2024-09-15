import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  "logo-ipsum.png",
  "logo-ipsum-2.png",
  "logo-ipsum-3.png",
  "logo-ipsum-4.png",
];

const Sponsor = () => {
  return (
    <div className="bg-white py-[70px]" id="sponsor">
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
      <Marquee speed={120}>
        {logos.map((logo, index) => (
          <Image
            key={index}
            quality={100}
            src={`/${logo}`}
            alt={`Logo ${index + 1}`}
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
