"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import DarkStar from "@/assets/svgs/DarkStar";

const Speaker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      src: "/speaker-example.png",
      alt: "Speaker Example",
    },
    // TODO: just for testing image transition, remove later and add more images
    // {
    //   src: "/character-angry.png",
    //   alt: "Character Angry",
    // },
  ];

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 200); // Half of the transition duration
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 200); // Half of the transition duration
  };

  return (
    <div className="bg-primary text-white pt-[96px] pb-[170px]">
      <div className="grid grid-cols-2 container mx-auto py-10 items-center justify-between gap-[100px]">
        {/* left side */}
        <div
          style={{
            position: 'relative',
            opacity: isTransitioning ? 0 : 1,
            transition: 'opacity 0.4s ease-in-out',
          }}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={583}
            height={657}
          />

          <div className="flex items-center justify-end gap-4 mt-4 mr-4">
            {/* TODO: should this using svg? */}
            <Image
              src="/left-arrow.png"
              alt="Arrow Left"
              width={40}
              height={40}
              className={`cursor-pointer ${isTransitioning ? 'opacity-50' : ''}`}
              onClick={() => !isTransitioning && goToPrevious()}
            />
            <Image
              src="/right-arrow.png"
              alt="Arrow Right"
              width={40}
              height={40}
              className={`cursor-pointer ${isTransitioning ? 'opacity-50' : ''}`}
              onClick={() => !isTransitioning && goToNext()}
            />
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-col gap-[50px] text-[#212121]">
          <div className="flex mb-10 items-center gap-3">
            <DarkStar />
            <p className="font-semibold text-lg">Meets Our Speakers</p>
            <DarkStar />
          </div>
          <p className="text-5xl font-semibold">
            Amirul Ihsan
          </p>
          <p className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur. Lectus orci in adipiscing metus tellus faucibus id odio interdum. Bibendum aliquam et imperdiet enim. Fermentum est nullam ac odio integer. Ullamcorper morbi lacus ornare imperdiet augue vel volutpat.
            Potenti hendrerit nulla at lectus sit integer. Erat sed tellus quis nec et consectetur gravida arcu. Duis nisi semper nunc fusce feugiat pharetra risus id. Risus.
          </p>

          <hr className="border-black font-bold" />

          <div className="flex items-center gap-3">
            <DarkStar />
            <Link href="/" className="text-base">Instagram</Link>
            <div>|</div>
            <DarkStar />
            <Link href="/" className="text-base">Youtube</Link>
            <div>|</div>
            <DarkStar />
            <Link href="/" className="text-base">Instagram</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;