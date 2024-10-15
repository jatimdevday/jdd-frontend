"use client";

import { scrollToElement } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";
import Bars2 from "@/assets/svgs/Bars2";
import ArrowLongRight from "@/assets/svgs/ArrowLongRight";
import Link from "next/link";
import XMark from "@/assets/svgs/XMark";
import { Content } from "@/lib/schema";

const Header = ({ content }: { content?: Content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      label: "Tentang JDD",
      key: "about",
    },
    // {
    //   label: "Roadshow",
    //   key: "roadshow",
    // },
    // {
    //   label: "Agenda",
    //   key: "agenda",
    // },
    {
      label: "Gallery JDD",
      key: "gallery",
    },
    {
      label: "Semua Tiket",
      key: "tiket",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (key: string) => {
    scrollToElement(key);
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`bg-darkBg -mb-0.5 ${
        isMenuOpen ? "h-screen overflow-hidden" : ""
      }`}
    >
      <div className="container mx-auto py-3 md:py-5">
        <div className="flex justify-between items-center">
          <div className="relative h-10 md:h-12 w-10 md:w-12 z-20">
            <Image
              quality={100}
              src="/jdd.png"
              alt=""
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="block md:hidden z-20">
            {isMenuOpen ? (
              <XMark className="size-6 text-white" onClick={toggleMenu} />
            ) : (
              <button onClick={toggleMenu} className="bg-primary rounded p-1.5">
                <Bars2 className="size-5" />
              </button>
            )}
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((item, idx) => (
                <li
                  key={idx}
                  className="text-white font-medium cursor-pointer hover:text-gray-300 transition-colors"
                  onClick={() => handleLinkClick(item.key)}
                >
                  {item.label}
                </li>
              ))}
              <li>
                <Link href={content?.registration_link || "#"} target="_blank">
                  <Button className="group">
                    Beli Tiket{" "}
                    <ArrowLongRight className="size-6 group-hover:translate-x-1 transition transform duration-150" />
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 bg-secondary z-10 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="container mx-auto h-full flex flex-col justify-center items-start">
          <ul className="space-y-8">
            {links.map((item, idx) => (
              <li
                key={idx}
                className="text-white font-medium text-2xl hover:text-gray-300 transition-colors"
                onClick={() => handleLinkClick(item.key)}
              >
                {item.label}
              </li>
            ))}
            <li>
              <Link href={content?.registration_link || "#"} target="_blank">
                <Button className="group">
                  Beli tiket{" "}
                  <ArrowLongRight className="size-6 group-hover:translate-x-1 transition transform duration-150" />
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
