"use client";

import { scrollToElement } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";
import Bars3 from "@/assets/svgs/Bars3";

const links = [
  {
    label: "Tentang JDD",
    key: "about",
  },
  {
    label: "Kilas Balik",
    key: "kilas",
  },
  {
    label: "Roadshow",
    key: "roadshow",
  },
  {
    label: "Gallery JDD",
    key: "gallery",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (item: string) => {
    scrollToElement(item);
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`bg-darkBg ${isMenuOpen ? "h-screen overflow-hidden" : ""}`}
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
            <button onClick={toggleMenu} className="text-white">
              <Bars3 color="white" />
            </button>
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
              <Button>Contact Person</Button>
            </ul>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 bg-darkBg/80 backdrop-blur-md z-10 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <ul className="space-y-8 text-center">
            {links.map((item, idx) => (
              <li
                key={idx}
                className="text-white font-medium text-xl hover:text-gray-300 transition-colors"
                onClick={() => handleLinkClick(item.key)}
              >
                {item.label}
              </li>
            ))}
            <li>
              <Button>Contact Person</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
