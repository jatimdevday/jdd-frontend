import Image from "next/image";

import Star from "@/assets/svgs/Star";

const Agenda = () => {
  return (
    <div className="bg-darkBg text-white pt-[96px] pb-[170px]">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 justify-center">
          <Star />
          <p className="text-base font-semibold">Kilas Balik JDD</p>
          <Star />
        </div>

        <div className="grid grid-cols-[1fr_10px_1fr] grid-rows-[auto_1fr] gap-5">
          <p className="mt-20 text-center col-span-full text-2xl font-bold">
            Jatim Developer Day 2019
          </p>

          <div className="col-start-2 row-span-2 relative">
            <div className="w-[10px] h-full bg-[#8a4fff] absolute rounded-[5px]"></div>
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

        <div className="grid grid-cols-[1fr_10px_1fr] grid-rows-[auto_1fr] gap-5">
          <p className="mt-5 text-center col-span-full text-2xl font-bold">
            Jatim Developer Day 2020
          </p>

          <div className="grid justify-items-end">
            <div>Online</div>
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

          <div className="col-start-2 row-span-2 relative">
            <div className="w-[10px] h-full bg-[#8a4fff] absolute rounded-[5px]"></div>
          </div>
        </div>

        <div>
          <p className="mt-5 text-center col-span-full text-2xl font-bold">
            Jatim Developer Day 2024 ✨
          </p>

          <p className="mt-4 text-center col-span-full text-base font-bold">
            We&apos;re back
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
