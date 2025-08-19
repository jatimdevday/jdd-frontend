import React from "react";
import Image from "next/image";
import Link from "next/link";

import Instagram from "@/assets/svgs/Instagram";
import WhatsApp from "@/assets/svgs/WhatsApp";

import { getSocialMedia } from "@/lib/firebase";
import { SocialMedia } from "@/lib/schema";

const Footer = async () => {
  const socialMedia = (await getSocialMedia()) as SocialMedia;

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

          <Link href="/faq" className="block hover:text-gray-300">
            FAQ (Frequently Asked Questions)
          </Link>
          <Link href="/terms" className="block hover:text-gray-300">
            Term of Service
          </Link>
          <Link href="/refund" className="block hover:text-gray-300">
            Refund Policy
          </Link>

          <div className="flex gap-4">
            <Link target="_blank" href={socialMedia.instagram}>
              <Instagram />
            </Link>
            <Link target="_blank" href={socialMedia.whatsapp}>
              <WhatsApp />
            </Link>
          </div>
          <p>JDD Team © 2024, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
