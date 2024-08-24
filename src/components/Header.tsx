"use client";

import { scrollToElement } from "@/lib/utils";
import React from "react";
import { Button } from "./Button";
import Image from "next/image";

const links = ["Agenda", "Speakers", "Sponsor"];

const Header = () => {
  return (
    <div className="bg-darkBg">
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <Image
            quality={100}
            src="/jdd.png"
            alt=""
            width={50}
            height={50}
            style={{
              objectFit: "contain",
            }}
          />
          <ul className="flex items-center gap-8">
            {links.map((item, idx) => (
              <li
                key={idx}
                className="text-white font-medium"
                onClick={() => scrollToElement(item.toLowerCase())}
              >
                {item}
              </li>
            ))}
            <Button>Contact Person</Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
