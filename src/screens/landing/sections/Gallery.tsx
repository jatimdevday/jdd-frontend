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
        <div className="grid grid-cols-2 grid-rows-5 grid-flow-col gap-8">
          <div className="row-span-3 bg-red-300 rounded-2xl">
            <Image
              src="/gallery.jpg"
              alt=""
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="row-span-2 bg-red-300 rounded-2xl">
            <Image
              src="/gallery.jpg"
              alt=""
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="row-span-2 bg-red-300 rounded-2xl">
            <Image
              src="/gallery.jpg"
              alt=""
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="row-span-3 bg-red-300 rounded-2xl">
            <Image
              src="/gallery.jpg"
              alt=""
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
