import Image from "next/image";
import React from "react";

const logos = [
  "community-logo.png",
  "community-logo.png",
  "community-logo.png",
  "community-logo.png",
  "community-logo.png",
  "community-logo.png",
];

const Community = () => {
  return (
    <div className=" bg-white text-black pt-[96px] pb-[100px]">
      <div className="container mx-auto flex items-center">
        <div className="w-[100%]">
          <div className="flex mb-3 justify-center">
            <div className="flex">
              <Image
                quality={100}
                src="/black-star-2.png"
                alt=""
                width={20}
                height={0}
              />
              <h3 className="ms-[10px] font-semibold text-[15px] me-[10px]">
                Thank&apos;s to
              </h3>
              <Image
                quality={100}
                src="/black-star-2.png"
                alt=""
                width={20}
                height={0}
              />
            </div>
          </div>
          <h1 className="text-center ms-[10px] mb-10 font-semibold text-[47px] me-[10px]">
            Community
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
            {logos.map((logo, index) => (
              <Image
                key={index}
                quality={100}
                src={`/${logo}`}
                alt={`Community ${index + 1}`}
                width={170}
                height={170}
                className="mb-4 sm:mb-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
