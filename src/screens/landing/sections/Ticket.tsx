import React from "react";
import Link from "next/link";
import CheckIcon from "@/assets/svgs/CheckIcon";
import XIcon from "@/assets/svgs/XIcon";
import ArrowLongRight from "@/assets/svgs/ArrowLongRight";
import { classNames } from "@/lib/utils";

interface IFeature {
  name: string;
  included: boolean;
}

interface IPricingItem {
  title: string;
  price: string;
  features: IFeature[];
  buttonText: string;
  highlighted: boolean;
  rightIcon?: React.ReactNode;
}

interface IFeatureItemProps {
  feature: IFeature;
  highlighted: boolean;
}

interface PricingButtonProps {
  buttonText: string;
  highlighted: boolean;
  rightIcon?: React.ReactNode;
}

interface IMobilePricingCardProps {
  item: IPricingItem;
}

interface IDesktopPricingTableProps {
  pricingData: IPricingItem[];
}

const pricingData = [
  {
    title: "Mahasiswa",
    price: "Rp30.000",
    features: [
      { name: "Akses semua sesi", included: true },
      { name: "Sertifikat kehadiran", included: true },
      { name: "Makan siang", included: true },
      { name: "Networking session", included: false },
      { name: "Workshop eksklusif", included: false },
    ],
    buttonText: "Beli Tiket",
    highlighted: false,
  },
  {
    title: "Umum",
    price: "Rp50.000",
    features: [
      { name: "Akses semua sesi", included: true },
      { name: "Sertifikat kehadiran", included: true },
      { name: "Makan siang", included: true },
      { name: "Networking session", included: true },
      { name: "Workshop eksklusif", included: false },
    ],
    buttonText: "Beli Tiket",
    highlighted: false,
  },
  {
    title: "VIP",
    price: "Rp100.000",
    features: [
      { name: "Akses semua sesi", included: true },
      { name: "Sertifikat kehadiran", included: true },
      { name: "Makan siang", included: true },
      { name: "Networking session", included: true },
      { name: "Workshop eksklusif", included: true },
      { name: "Merchandise eksklusif", included: true },
    ],
    buttonText: "Beli Tiket",
    rightIcon: (
      <ArrowLongRight className="size-6 group-hover:translate-x-1 transition transform duration-150" />
    ),
    highlighted: true,
  },
  {
    title: "Startup",
    price: "Rp40.000",
    features: [
      { name: "Akses semua sesi", included: true },
      { name: "Sertifikat kehadiran", included: true },
      { name: "Makan siang", included: true },
      { name: "Networking session", included: true },
      { name: "Booth pameran", included: true },
      { name: "Workshop eksklusif", included: false },
    ],
    buttonText: "Beli Tiket",
    highlighted: false,
  },
];

const FeatureItem = ({ feature, highlighted }: IFeatureItemProps) => (
  <li className="flex items-center gap-2">
    {feature.included ? (
      <CheckIcon fill={highlighted ? "#caf93a" : "#833CFA"} />
    ) : (
      <XIcon />
    )}
    <span>{feature.name}</span>
  </li>
);

const PricingButton = ({
  buttonText,
  highlighted,
  rightIcon,
}: PricingButtonProps) => (
  <Link href="#" target="_blank">
    <button
      className={classNames(
        "w-full group flex justify-center items-center gap-1.5 text-xl font-jost text-[#0B0E2B] border font-medium rounded-2xl py-4",
        highlighted
          ? "bg-primary border-transparent"
          : "border-[#BABABA] hover:bg-white transform transition duration-150"
      )}
    >
      {buttonText} {rightIcon}
    </button>
  </Link>
);

const MobilePricingCard = ({ item }: IMobilePricingCardProps) => (
  <div
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
        {item.features.map((feature, index) => (
          <FeatureItem
            key={index}
            feature={feature}
            highlighted={item.highlighted}
          />
        ))}
      </ul>
    </div>
    <div className="px-7">
      <PricingButton
        buttonText={item.buttonText}
        highlighted={item.highlighted}
        rightIcon={item.rightIcon}
      />
    </div>
  </div>
);

const DesktopPricingTable = ({ pricingData }: IDesktopPricingTableProps) => (
  <table className="w-full">
    <thead>
      <tr className="border-b-[0.5px] border-b-[#BABABA]">
        {pricingData.map((item, index) => (
          <th
            key={index}
            className={classNames(
              "p-7 text-left",
              item.highlighted ? "bg-secondary text-white" : "bg-[#F4F5FF]",
              index > 0 ? "border-l border-[#BABABA]" : ""
            )}
          >
            <p className="text-base font-normal">{item.title}</p>
            <div className="mt-2 text-3xl font-semibold">{item.price}</div>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        {pricingData.map((item, colIndex) => (
          <td
            key={colIndex}
            className={classNames(
              "p-7 space-y-4 align-top",
              item.highlighted ? "bg-secondary text-white" : "bg-[#F4F5FF]",
              colIndex > 0 ? "border-l border-[#BABABA]" : "",
              item.highlighted ? "border-collapse" : ""
            )}
          >
            {item.features.map((feature, idx) => (
              <FeatureItem
                key={idx}
                feature={feature}
                highlighted={item.highlighted}
              />
            ))}
          </td>
        ))}
      </tr>
      <tr>
        {pricingData.map((item, index) => (
          <td
            key={index}
            className={classNames(
              "px-7 pb-7",
              item.highlighted ? "bg-secondary" : "bg-[#F4F5FF]",
              index > 0 ? "border-l border-[#BABABA]" : ""
            )}
          >
            <PricingButton
              buttonText={item.buttonText}
              highlighted={item.highlighted}
              rightIcon={item.rightIcon}
            />
          </td>
        ))}
      </tr>
    </tbody>
  </table>
);

const Ticket = () => {
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
          {pricingData.map((item, index) => (
            <MobilePricingCard key={index} item={item} />
          ))}
        </div>

        {/* Desktop view */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border-[#BABABA] border">
          <DesktopPricingTable pricingData={pricingData} />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
