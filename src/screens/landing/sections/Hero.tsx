import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";
import { Content } from "@/lib/schema";

const Hero = ({ content }: { content?: Content }) => {
  return (
    <div className="bg-darkBg text-white py-16 md:py-24">
      <div className="container mx-auto flex gap-12 md:items-center md:flex-row flex-col">
        <div className="md:w-[63%]">
          <Image
            quality={100}
            src="/world.png"
            alt=""
            width={50}
            height={50}
            style={{
              objectFit: "contain",
            }}
          />
          <p className="font-bold text-[38px] md:text-[44px] lg:text-[50px] leading-snug mt-6">
            Membangun <span className="text-primary">Ekosistem</span> IT di{" "}
            <span className="text-primary">Jawa Timur</span> Melalui{" "}
            <span className="text-primary">Komunitas.</span>
          </p>
          <p className="text-emerald-50 text-lg mt-5 mb-4">{content?.date}</p>
          <a href={content?.registration_link}>
            <Button variant="secondary">Daftar Sekarang</Button>
          </a>
        </div>
        <div className="md:w-[37%]">
          <Image
            quality={100}
            src="/character.png"
            alt=""
            layout="responsive"
            width={400}
            height={200}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
