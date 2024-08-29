import Star from "@/assets/svgs/Star";import World from "@/assets/svgs/World";
import Image from "next/image";
import React from "react";

const benefits = [
  {
    icon: "/world-2.png",
    title: "Jaringan dan Kolaborasi",
    description:
      "Bertemu dengan sesama profesional IT, pemimpin komunitas, dan penggiat teknologi di Jawa Timur.",
  },
  {
    icon: "/world-2.png",
    title: "Pengalaman Berharga",
    description:
      "Mendapatkan wawasan dan pengetahuan baru dari para ahli industri.",
  },
  {
    icon: "/world-2.png",
    title: "Sertifikat",
    description:
      "Sertifikat keikutsertaan yang dapat digunakan untuk meningkatkan portofolio profesional Anda.",
  },
  {
    icon: "/world-2.png",
    title: "Hadiah Menarik",
    description:
      "Kesempatan untuk memenangkan hadiah menarik selama acara berlangsung.",
  },
];

const Benefit = () => {
  return (
    <div className="bg-[#833CFA] pt-[96px] pb-[100px]">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center gap-6">
        <div className="lg:w-[50%] w-full mb-10 lg:mb-0">
          <div className="flex mb-4 justify-center lg:justify-start gap-2 items-center">
            <Star />
            <h3 className="text-white font-semibold text-[15px]">Benefits</h3>
            <Star />
          </div>
          <h1 className="mb-8 font-semibold text-[40px] text-center lg:text-left text-white">
            What Will You Get
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-primary p-5 rounded-[30px]">
                <World />
                <h5 className="font-bold mb-1 mt-2">{benefit.title}</h5>
                <p className="text-[14px] mb-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[50%] w-full flex justify-center lg:justify-end">
          <Image
            quality={100}
            src="/rectangle.png"
            alt=""
            width={460}
            height={200}
            className="mb-1 mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
