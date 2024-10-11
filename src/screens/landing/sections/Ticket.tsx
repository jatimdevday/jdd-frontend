import React from "react";
import Link from "next/link";
import CheckIcon from "@/assets/svgs/CheckIcon";
import XIcon from "@/assets/svgs/XIcon";
import ArrowLongRight from "@/assets/svgs/ArrowLongRight";
import { classNames } from "@/lib/utils";
import { getTickets } from "@/lib/firebase";
import { Tickets } from "@/lib/schema";

const PricingButton = ({
  highlighted,
  link,
}: {
  link: string;
  highlighted: boolean;
}) => (
  <Link href={link} target="_blank">
    <button
      className={classNames(
        "w-full group flex justify-center items-center gap-1.5 text-xl font-jost text-[#0B0E2B] border font-medium rounded-2xl py-4",
        highlighted
          ? "bg-primary border-transparent"
          : "border-[#BABABA] hover:bg-white transform transition duration-150"
      )}
    >
      Beli Tiket{" "}
      {highlighted && (
        <ArrowLongRight className="size-6 group-hover:translate-x-1 transition transform duration-150" />
      )}
    </button>
  </Link>
);

const Ticket = async () => {
  const tickets = (await getTickets()) as Tickets;
  return (
    <div className="py-12 md:py-24" id="tiket">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around gap-4 md:gap-12 mb-12">
          <div className="font-semibold text-2xl md:text-3xl md:min-w-[380px] leading-normal">
            Dapatkan Akses Eksklusif dengan Harga Terbaik!
          </div>
          <p className="text-[#5A5A5A] leading-relaxed">
            Nikmati akses penuh ke acara IT paling seru di Jawa Timur dengan
            harga spesial! Dari sesi inspiratif hingga networking bareng
            komunitas, semuanya bisa kamu dapatkan. Buruan daftar dan jadilah
            bagian dari gerakan besar ini!
          </p>
        </div>

        {/* Mobile view */}
        <div className="lg:hidden space-y-6">
          {tickets.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl space-y-7 py-7 overflow-hidden border-[#BABABA] border ${
                item.highlighted ? "bg-secondary text-white" : "bg-[#F4F5FF]"
              }`}
            >
              <div className="px-7">
                <p>{item.title}</p>
                <p className="mt-2.5 text-3xl font-bold">{item.price}</p>
              </div>
              <hr className="border-[#BABABA] my-7 border-t-[0.5px]" />
              <div className="px-7">
                <ul className="space-y-4">
                  {item?.features?.map((feature, idx) => (
                    <li className="flex items-stretch gap-2" key={idx}>
                      <div>
                        {feature.included ? (
                          <CheckIcon
                            fill={item.highlighted ? "#caf93a" : "#833CFA"}
                          />
                        ) : (
                          <XIcon />
                        )}
                      </div>
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-7">
                <PricingButton
                  link={item.link}
                  highlighted={item.highlighted}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border-[#BABABA] border mx-auto w-[800px]">
          <table className="w-full table-fixed">
            <thead>
              <tr className="border-b-[0.5px] border-b-[#BABABA]">
                {tickets.map((item, index) => (
                  <th
                    key={index}
                    className={classNames(
                      "p-7 text-left w-1/2",
                      item.highlighted
                        ? "bg-secondary text-white"
                        : "bg-[#F4F5FF]",
                      index > 0 ? "border-l border-[#BABABA]" : ""
                    )}
                  >
                    <p className="text-base font-normal">{item.title}</p>
                    <div className="mt-2 text-3xl font-semibold">
                      {item.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {tickets.map((item, colIndex) => (
                  <td
                    key={colIndex}
                    className={classNames(
                      "p-7 space-y-5 align-top",
                      item.highlighted
                        ? "bg-secondary text-white"
                        : "bg-[#F4F5FF]",
                      colIndex > 0 ? "border-l border-[#BABABA]" : "",
                      item.highlighted ? "border-collapse" : ""
                    )}
                  >
                    {item?.features?.map((feature, idx) => (
                      <li className="flex gap-2" key={idx}>
                        <div>
                          {feature.included ? (
                            <CheckIcon
                              fill={item.highlighted ? "#caf93a" : "#833CFA"}
                            />
                          ) : (
                            <XIcon />
                          )}
                        </div>
                        <span className="-mt-0.5">{feature.name}</span>
                      </li>
                    ))}
                  </td>
                ))}
              </tr>
              <tr>
                {tickets.map((item, index) => (
                  <td
                    key={index}
                    className={classNames(
                      "px-7 pb-7",
                      item.highlighted ? "bg-secondary" : "bg-[#F4F5FF]",
                      index > 0 ? "border-l border-[#BABABA]" : ""
                    )}
                  >
                    <PricingButton
                      link={item.link}
                      highlighted={item.highlighted}
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
