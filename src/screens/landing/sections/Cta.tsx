import { Button } from "@/components/Button";
import { Content } from "@/lib/schema";
import Image from "next/image";
import React from "react";

const Cta = ({ content }: { content?: Content }) => {
  return (
    <div className="bg-darkBg text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-[100%] md:w-[63%] text-center md:text-left mb-6 md:mb-0">
          <p className="font-semibold text-[32px] leading-snug mb-6">
            {content?.registration_tagline}
          </p>
          <a href={content?.registration_link}>
            <Button variant="secondary">Daftar Sekarang</Button>
          </a>
        </div>
        <div className="w-[100%] md:w-[30%]">
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
