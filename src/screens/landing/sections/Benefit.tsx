"use client";

import Star from "@/assets/svgs/Star";
import World from "@/assets/svgs/World";
import { getBenefits } from "@/lib/firebase";
import { Benefits } from "@/lib/schema";
import Image from "next/image";
import { useEffect, useState } from "react";

const Benefit = ({ benefits }: { benefits: Benefits }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % benefits.photo.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [benefits]);

  return (
    <div className="bg-secondary py-20 text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
        <div>
          <div className="flex mb-3 justify-center lg:justify-start gap-2 items-center">
            <Star />
            <p className="font-semibold">Benefits</p>
            <Star />
          </div>
          <p className="mb-8 font-semibold text-4xl md:text-5xl text-center lg:text-left text-white">
            What Will You Get
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blackText">
            {benefits?.list?.map((benefit, index) => (
              <div key={index} className="bg-primary p-5 rounded-[30px]">
                <Image
                  alt=""
                  src={benefit.icon}
                  width={24}
                  height={24}
                  layout="responsive"
                  style={{
                    objectFit: "contain",
                    maxHeight: 24,
                    maxWidth: 24,
                  }}
                />
                <p className="font-semibold mt-2 mb-1 text-lg">
                  {benefit.title}
                </p>
                <p className="text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full flex flex-col justify-center items-center md:-mb-14">
          <div className="relative w-full lg:h-full h-[250px] sm:h-[400px] md:h-[600px]">
            {benefits?.photo?.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className={`rounded-[30px] object-cover transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="flex mt-4 gap-2">
            {benefits?.photo?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentImageIndex ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
