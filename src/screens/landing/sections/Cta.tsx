import DarkStar from "@/assets/svgs/DarkStar";
import { Button } from "@/components/Button";
import { Content } from "@/lib/schema";
import Image from "next/image";
import React from "react";

const Cta = ({ content }: { content?: Content }) => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-[100%] md:w-[63%] text-center md:text-left mb-6 md:mb-0">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <DarkStar />
            <p className="font-semibold">Main Event</p>
            <DarkStar />
          </div>
          <p className="font-semibold text-3xl md:text-[32px] leading-snug mb-6 mt-4">
            {content?.registration_tagline}
          </p>
          <a href={content?.registration_link}>
            <Button variant="secondary">Daftar Sekarang</Button>
          </a>
        </div>
        <div className="w-[100%] md:w-[30%] hidden md:block">
          <Image
            quality={100}
            src="/character-angry.png"
            alt=""
            layout="responsive"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
