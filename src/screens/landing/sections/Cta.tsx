import Star from "@/assets/svgs/Star";
import Star3 from "@/assets/svgs/Star3";
import World2 from "@/assets/svgs/World2";
import Click from "@/assets/svgs/Click";
import { Button } from "@/components/Button";
import { Content } from "@/lib/schema";
import React from "react";

const Cta = ({ content }: { content?: Content }) => {
  return (
    <div className="flex justify-center bg-secondary">
      <Star3 />
      <div className="relative container mx-auto text-center py-16 md:py-24">
        <div className="mb-6">
          <div className="flex items-center gap-3 justify-center">
            <Star />
            <p className="font-semibold text-white">Main Event</p>
            <Star />
          </div>
          <p className="font-semibold text-3xl md:text-[32px] leading-snug mb-12 mt-4 text-white">
            {content?.registration_tagline}
          </p>
          <a href={content?.registration_link}>
            <Button variant="default">
              <span className="mr-2">Daftar Sekarang</span> <Click />
            </Button>
          </a>
        </div>
        <World2 className="absolute bottom-0 right-0" />
      </div>
    </div>
  );
};

export default Cta;
