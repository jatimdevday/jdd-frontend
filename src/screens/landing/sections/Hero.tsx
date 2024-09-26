import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";
import { Content } from "@/lib/schema";
import Link from "next/link";

const Wrapper = ({ total, label }: { total: string; label: string }) => (
  <p>
    <span className="text-primary text-3xl md:text-[32px] font-bold">
      {total}
    </span>{" "}
    {label}
  </p>
);

const Hero = ({ content }: { content?: Content }) => {
  return (
    <div className="bg-darkBg text-white py-12 md:py-24">
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
          <p className="text-emerald-50 text-lg mt-6 mb-8 font-medium">
            {content?.location} - {content?.date}
          </p>
          <div className="flex gap-6 items-center">
            <Link href={content?.registration_link || "#"}>
              <Button variant="secondary">Daftar Sekarang</Button>
            </Link>
            <Link href="#" className="font-jost font-medium md:text-lg">
              Jadi Sponsorship
            </Link>
          </div>
          <div className="flex gap-3 sm:gap-4 mt-12 flex-wrap">
            <Wrapper label="Participants" total="500+" />
            <Wrapper label="Speakers" total="12" />
            <Wrapper label="Communities" total="30+" />
          </div>
        </div>
        <div className="md:w-[37%] hidden md:block">
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
