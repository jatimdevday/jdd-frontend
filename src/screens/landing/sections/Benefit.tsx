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
    <div className="bg-[#833CFA] text-white pt-[96px] pb-[100px]">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
        <div className="lg:w-[50%] w-full mb-10 lg:mb-0">
          <div className="flex mb-4 justify-center lg:justify-start">
            <Image quality={100} src="/star.png" alt="" width={20} height={0} />
            <h3 className="ms-[10px] text-white font-semibold text-[15px] me-[10px]">
              Benefits
            </h3>
            <Image quality={100} src="/star.png" alt="" width={20} height={0} />
          </div>
          <h1 className="mb-8 font-semibold text-[40px] text-center lg:text-left">
            What Will You Get
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#CAF93A] p-3 rounded-[20px]">
                <Image
                  quality={100}
                  src={benefit.icon}
                  alt=""
                  width={17}
                  height={0}
                  className="mb-1 mt-1"
                />
                <h5 className="font-bold mb-1">{benefit.title}</h5>
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
