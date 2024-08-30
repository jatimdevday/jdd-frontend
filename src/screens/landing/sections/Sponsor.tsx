import Image from "next/image";import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  "logo-ipsum.png",
  "logo-ipsum-2.png",
  "logo-ipsum-3.png",
  "logo-ipsum-4.png",
];

const Sponsor = () => {
  return (
    <div className=" bg-white text-black pt-[96px] pb-[100px]">
      <div className="mx-auto flex items-center">
        <div className="w-[100%]">
          <div className="flex mb-10 justify-center">
            <div className="flex">
              <Image
                quality={100}
                src="/black-star.png"
                alt=""
                width={24}
                height={0}
                style={{
                  objectFit: "contain",
                }}
              />
              <h3 className="ms-[10px] font-semibold text-[20px] me-[10px]">
                Our Sponsor
              </h3>
              <Image
                quality={100}
                src="/black-star.png"
                alt=""
                width={24}
                height={0}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
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
                className="mx-12"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
