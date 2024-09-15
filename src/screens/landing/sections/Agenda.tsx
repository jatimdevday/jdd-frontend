import Image from "next/image";

import Star from "@/assets/svgs/Star";
import { getThrowbackEvent } from "@/lib/firebase";
import { ThrowbackEvent } from "@/lib/schema";

const Agenda = async () => {
  const event2019 = (await getThrowbackEvent(2019)) as ThrowbackEvent;
  const event2020 = (await getThrowbackEvent(2020)) as ThrowbackEvent;

  const agenda = [
    {
      year: 2019,
      ...event2019,
    },
    {
      year: 2020,
      ...event2020,
    },
  ];

  return (
    <div className="bg-darkBg text-white py-16 md:py-24" id="kilas">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 justify-center">
          <Star />
          <p className="text-base font-semibold">Kilas Balik JDD</p>
          <Star />
        </div>

        <div className="space-y-8 mt-16">
          {agenda.map((item, aIdx) => (
            <div
              className="grid grid-cols-[1fr_10px_1fr] grid-rows-[auto_1fr] gap-5"
              key={aIdx}
            >
              <p className="text-center col-span-full text-2xl font-bold">
                Jatim Developer Day {item.year}
              </p>

              {aIdx % 2 === 0 && (
                <div className="col-start-2 row-span-2 relative">
                  <div className="w-[10px] h-full bg-[#8a4fff] absolute rounded-[5px]"></div>
                </div>
              )}

              <div
                className={
                  aIdx % 2 !== 0 ? "grid justify-items-end mr-8" : "ml-8"
                }
              >
                <div>{item.location}</div>
                <div className="mt-4 overflow-hidden">
                  <div className="grid grid-cols-2 gap-3 max-w-[520px] transition ease-in-out duration-300 transform">
                    {item.photo.map((p, idx) => (
                      <Image
                        key={idx}
                        src={p}
                        alt="JDD 2019"
                        width={250}
                        height={200}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {aIdx % 2 !== 0 && (
                <div className="col-start-2 row-span-2 relative">
                  <div className="w-[10px] h-full bg-[#8a4fff] absolute rounded-[5px]"></div>
                </div>
              )}
            </div>
          ))}

          <div>
            <p className="text-center col-span-full text-2xl font-bold">
              Jatim Developer Day 2024 ✨
            </p>

            <p className="mt-4 text-center col-span-full text-base font-bold">
              We&apos;re back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
