import Image from "next/image";

import Star from "@/assets/svgs/Star";

const Agenda = () => {
  return (
    <div className="bg-darkBg text-white pt-[96px] pb-[170px]">
      <div className="flex items-center gap-3 justify-center">
        <Star />
        <p className="text-base font-semibold">Kilas Balik JDD</p>
        <Star />
      </div>

      <div className="grid grid-cols-[1fr_10px_1fr] grid-rows-[auto_1fr_auto_1fr] gap-5">
        <p className="mt-20 text-center col-span-full text-2xl font-bold">Jatim Developer Day 2019</p>

        {/* TODO: is this scrollbar? or just a line? */}
        <div className="col-start-2 w-[10px] bg-[#1a1a4a] relative cursor-pointer">
          <div className="w-full bg-[#8a4fff] absolute rounded-[5px]"></div>
        </div>

        <div className="">
          <div>Universitas Ciputra, Surabaya</div>
          <div className="mt-4 overflow-hidden">
            <div className="grid grid-cols-2 gap-3 max-w-[520px] transition ease-in-out duration-300 transform">
              <Image
                src="/image-1.png"
                alt="JDD 2019"
                width={250}
                height={200}
              />
              <Image
                src="/image-2.png"
                alt="JDD 2019"
                width={250}
                height={200}
              />
              <Image
                src="/image-3.png"
                alt="JDD 2019"
                width={250}
                height={200}
              />
              <Image
                src="/image-4.png"
                alt="JDD 2019"
                width={250}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;