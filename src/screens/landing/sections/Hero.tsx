import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-darkBg text-white pt-[96px] pb-[170px]">
      <div className="container mx-auto flex items-center">
        <div className="w-[65%]">
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
          <p className="font-bold text-[50px] leading-snug mt-6">
            Membangun <span className="text-primary">Ekosistem</span> IT di{" "}
            <span className="text-primary">Jawa Timur</span> Melalui{" "}
            <span className="text-primary">Komunitas.</span>
          </p>
          <p className="text-emerald-50 text-lg mt-5 mb-4">
            Malang 25 Oktober 2024
          </p>
          <Button variant="secondary">Daftar Sekarang</Button>
        </div>
        <div className="w-[35%]">
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
