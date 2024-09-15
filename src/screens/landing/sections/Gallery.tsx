import Star from "@/assets/svgs/Star";
import { getGalleries } from "@/lib/firebase";
import { Galleries } from "@/lib/schema";
import Image from "next/image";

const Gallery = async () => {
  const galleries = (await getGalleries()) as Galleries;
  return (
    <div className="bg-darkBg text-white py-16 md:py-24" id="gallery">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 justify-center">
          <Star />
          <p className="font-semibold">Gallery JDD</p>
          <Star />
        </div>
        <p className="text-center mt-2.5 mb-14 font-semibold text-4xl md:text-5xl">
          Kilas Balik Kenangan JDD
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-5 sm:grid-flow-col gap-4 sm:gap-8 h-[1500px] sm:h-[560px]">
          {galleries.map((gallery, index) => (
            <div
              className={`${
                [0, 3].includes(index) ? "sm:row-span-3" : "sm:row-span-2"
              } rounded-2xl relative h-full overflow-hidden`}
              key={index}
            >
              <Image
                placeholder="blur"
                blurDataURL="#"
                quality={100}
                src={gallery}
                alt=""
                fill
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
