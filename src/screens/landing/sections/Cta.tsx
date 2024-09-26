import Star from "@/assets/svgs/Star";
import Star3 from "@/assets/svgs/Star3";
import World2 from "@/assets/svgs/World2";
import Click from "@/assets/svgs/Click";
import { Button } from "@/components/Button";
import { Content } from "@/lib/schema";
import React from "react";
import Link from "next/link";

const Cta = ({ content }: { content?: Content }) => {
  return (
    <div className="flex justify-center bg-secondary">
      <div className="relative w-full text-center py-16 md:py-24">
        <Star3 className="absolute top-0 left-0" />
        <div className="mb-6">
          <div className="flex items-center gap-3 justify-center">
            <Star />
            <p className="font-semibold text-white">Main Event</p>
            <Star />
          </div>
          <p className="font-semibold text-3xl md:text-[32px] leading-snug mb-12 mt-4 text-white mx-12">
            Dapatkan Tiketmu Segera!
          </p>
          <Link href={content?.registration_link || "#"} target="_blank">
            <Button variant="default">
              Daftar Sekarang <Click />
            </Button>
          </Link>
        </div>
        <World2 className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32" />
      </div>
    </div>
  );
};

export default Cta;
