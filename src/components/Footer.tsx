import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkBg">
      <div className="container mx-auto text-white py-12 flex gap-16 items-center flex-col md:flex-row">
        <Image
          alt=""
          src="/jdd-text-img.webp"
          width={400}
          height={80}
          style={{
            objectFit: "contain",
          }}
        />
        <div className="space-y-6 ">
          <Image
            alt=""
            src="/jdd.png"
            width={70}
            height={70}
            style={{
              objectFit: "contain",
            }}
          />
          <p className="leading-relaxed">
            Jatim Developer Day (JDD) adalah acara tahunan komunitas teknologi
            yang bertujuan untuk memfasilitasi kolaborasi antara komunitas,
            akademisi,pemerintah, dan industri teknologi di Jawa Timur, guna
            mendorong inovasi dan pertumbuhan sektor digital.
          </p>
          <p>© 2024, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
