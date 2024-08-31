import Star from "@/assets/svgs/Star";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="bg-darkBg text-white py-24">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 justify-center">
          <Star />
          <p className="font-semibold">Gallery JDD</p>
          <Star />
        </div>
        <p className="text-center mt-2.5 mb-14 font-semibold text-5xl">
          Kilas Balik Kenangan JDD
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-5 sm:grid-flow-col gap-4 sm:gap-8 h-[1500px] sm:h-[560px]">
          <div className="sm:row-span-3 rounded-2xl relative h-full overflow-hidden">
            <Image
              placeholder="blur"
              blurDataURL="#"
              quality={100}
              src="https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_3010.jpg"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
          <div className="sm:row-span-2 rounded-2xl relative h-full overflow-hidden">
            <Image
              quality={100}
              src="https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_3003.jpg"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
          <div className="sm:row-span-2 rounded-2xl relative h-full overflow-hidden">
            <Image
              quality={100}
              src="https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_3002.jpg"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
          <div className="sm:row-span-3 rounded-2xl relative h-full overflow-hidden">
            <Image
              quality={100}
              src="https://res.cloudinary.com/zeit-inc/image/upload/nextconf-photos/Sexton_Vercel_2991.jpg"
              alt=""
              fill
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
