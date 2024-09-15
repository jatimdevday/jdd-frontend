"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import Arrow from "@/assets/svgs/Arrow";
import DarkStar from "@/assets/svgs/DarkStar";
import { Speakers } from "@/lib/schema";

const WrapperLink = ({
  label,
  link = "#",
}: {
  label: string;
  link: string;
}) => (
  <div className="flex items-center gap-3">
    <DarkStar />
    <Link href={link} className="text-base" target="_blank">
      {label}
    </Link>
  </div>
);

const Speaker = ({ speakers = [] }: { speakers?: Speakers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (speakers.length === 0) {
      console.warn("No speakers data provided to the Speaker component.");
    }
  }, [speakers]);

  if (speakers.length === 0) {
    return <div>No speakers available.</div>;
  }

  const currentSpeaker = speakers[currentIndex];

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? speakers.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 200);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === speakers.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div className="bg-primary py-16 md:py-24" id="speakers">
      <div className="grid md:grid-cols-2 container mx-auto py-10 items-center justify-between gap-[20px] md:gap-[60px]">
        {/* left side */}
        <div>
          <div className="flex justify-center">
            <div
              className="relative max-w-[400px] md:max-w-[100%] w-full md:w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transition: "opacity 0.4s ease-in-out",
              }}
            >
              <Image
                quality={100}
                src={currentSpeaker.photo}
                alt={`${currentSpeaker.name} photo`}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 mt-8">
            <Arrow
              className="cursor-pointer rotate-180"
              onClick={() => !isTransitioning && goToPrevious()}
            />
            <Arrow
              className="cursor-pointer"
              onClick={() => !isTransitioning && goToNext()}
            />
          </div>
        </div>

        {/* right side */}
        <div>
          <div className="flex mb-6 md:mb-10 items-center gap-3">
            <DarkStar />
            <p className="font-semibold md:text-lg">Meet Our Speakers</p>
            <DarkStar />
          </div>
          <p className="text-3xl lg:text-5xl font-semibold">
            {currentSpeaker.name}
          </p>
          <p className="md:text-lg leading-relaxed mb-4 mt-2 font-medium opacity-60">
            {currentSpeaker.title}
          </p>
          <p className="md:text-xl font-medium leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Lectus orci in adipiscing
            metus tellus faucibus id odio interdum. Bibendum aliquam et
            imperdiet enim. Fermentum est nullam ac odio integer. Ullamcorper
            morbi lacus ornare imperdiet augue vel volutpat. Potenti hendrerit
            nulla at lectus sit integer. Erat sed tellus quis nec et consectetur
            gravida arcu. Duis nisi semper nunc fusce feugiat pharetra risus id.
            Risus.
          </p>

          <hr className="border-blackText/40 my-10 lg:my-14" />

          <div className="flex items-center gap-4">
            {currentSpeaker.linkedin && (
              <WrapperLink label="LinkedIn" link={currentSpeaker.linkedin} />
            )}
            {currentSpeaker.youtube && (
              <>
                <div>|</div>
                <WrapperLink label="Youtube" link={currentSpeaker.youtube} />
              </>
            )}
            {currentSpeaker.twitter && (
              <>
                <div>|</div>
                <WrapperLink label="Twitter" link={currentSpeaker.twitter} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
