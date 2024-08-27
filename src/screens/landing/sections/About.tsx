import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#833CFA] text-white pt-[86px] pb-[90px]">
      <div className="container mx-auto flex items-center">
        <div className="w-[100%]">
          <div className="flex">
            <Image quality={100} src="/star.png" alt="" width={20} height={0} />
            <p className="ms-[10px] font-semibold me-[10px]">Tentang Acara </p>
            <Image quality={100} src="/star.png" alt="" width={20} height={0} />
          </div>
          <h6 className="font-semibold text-[20px] lg:text-[28px] leading-normal mt-6 mb-6">
            Jatim Developer Day (JDD) adalah acara tahunan komunitas teknologi
            yang bertujuan untuk memfasilitasi kolaborasi antara komunitas,
            akademisi, pemerintah, dan industri teknologi di Jawa Timur, guna
            mendorong inovasi dan pertumbuhan sektor digital.
          </h6>
          <div className="flex">
            <Image quality={100} src="/star.png" alt="" width={20} height={0} />
            <p className="ms-[10px] font-semibold me-[10px]">Goal</p>
            <Image quality={100} src="/star.png" alt="" width={20} height={0} />
          </div>
          <h6 className="font-semibold text-[20px] lg:text-[28px] leading-normal mt-6 mb-6">
            Jawa Timur Developer Day 2024 hadir dengan tema: Membangun Ekosistem
            IT di Jawa Timur Melalui Komunitas. Acara ini diharapkan dapat
            menciptakan ekosistem yang kondusif bagi pertumbuhan industri
            teknologi dan startup di wilayah ini. Dengan memfasilitasi interaksi
            antara para developer, perusahaan, dan pemangku kepentingan lainnya,
            diharapkan dapat muncul peluang-peluang baru untuk mengembangkan
            bisnis dan menciptakan lapangan kerja. Selain itu, acara ini juga
            menjadi momentum bagi pemerintah daerah untuk memberikan dukungan
            yang lebih konkret terhadap pengembangan sektor teknologi di Jawa
            Timur.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default About;
