import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <div className="bg-darkBg text-white pb-[25px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-[100%] lg:w-[63%] text-center lg:text-left mb-6 lg:mb-0">
          <p className="font-semibold text-[27px] lg:text-[35px] leading-snug mt-6 mb-6">
            Gabung Sekarang dan Jadilah <br /> Bagian dari Revolusi IT Jawa
            Timur
          </p>
          <Button variant="secondary">Daftar Sekarang</Button>
        </div>
        <div className="w-[100%] lg:w-[30%]">
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
