import DarkStar from "@/assets/svgs/DarkStar";
import { Button } from "@/components/Button";
import { Content } from "@/lib/schema";
import Image from "next/image";
import React from "react";

const Ticket = () => {
  const pricingData = [
    {
      title: "Paket Hemat",
      price: "Rp.30.000",
      features: ["Item 1", "Item 1", "Item 1", "Item 1"],
      buttonText: "Beli Tiket",
      highlighted: false,
    },
    {
      title: "Dana Pelajar",
      price: "Rp.50.000",
      features: ["Item 1", "Item 1", "Item 1", "Item 1", "Item 1"],
      buttonText: "Beli Tiket",
      highlighted: false,
    },
    {
      title: "Special Pake Telor",
      price: "Rp.100.000",
      features: ["Item 1", "Item 1", "Item 1", "Item 1", "Item 1", "Item 1"],
      buttonText: "Beli Tiket →",
      highlighted: true,
    },
    {
      title: "Seadanya",
      price: "Rp.40.000",
      features: ["Item 1", "Item 1", "Item 1", "Item 1", "Item 1", "Item 1"],
      buttonText: "Beli Tiket",
      highlighted: false,
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto md:flex-row items-center justify-between">
        {/* for title */}
        <div className="flex justify-around gap-13 text-center md:text-left mb-6 md:mb-0">
          <div className="font-semibold text-3xl">Dapatkan Akses Eksklusif dengan Harga Terbaik!</div>

          <div>Nikmati akses penuh ke acara IT paling seru di Jawa Timur dengan harga spesial! Dari sesi inspiratif hingga networking bareng komunitas, semuanya bisa kamu dapatkan. Buruan daftar dan jadilah bagian dari gerakan besar ini!</div>
        </div>

        {/* for table */}
        <div className="mt-16">
          {/* Mobile view */}
          <div className="lg:hidden space-y-8">
            {pricingData.map((tier, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg ${tier.highlighted ? 'bg-purple-600 text-white' : 'bg-white'
                  }`}
              >
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-semibold">{tier.title}</h3>
                  <p className="mt-4 text-4xl font-bold">{tier.price}</p>
                  <ul className="mt-6 space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className={`w-5 h-5 mr-2 ${tier.highlighted ? 'text-yellow-300' : 'text-purple-600'
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 w-full px-6 py-3 text-sm font-medium rounded-md ${tier.highlighted
                        ? 'bg-yellow-400 text-purple-600 hover:bg-yellow-500'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                  >
                    {tier.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border border-slate-500">
              <thead className="border border-slate-500">
                <tr>
                  {pricingData.map((tier, index) => (
                    <th
                      key={index}
                      className={`px-6 py-8 text-center ${tier.highlighted ? 'bg-purple-600 text-white' : 'bg-white text-gray-900'
                        }`}
                    >
                      <div className="text-lg font-semibold">{tier.title}</div>
                      <div className="mt-2 text-3xl font-bold">{tier.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="border border-slate-500">
                {[...Array(6)].map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {pricingData.map((tier, colIndex) => (
                      <td
                        key={colIndex}
                        className={`px-6 py-4 text-center ${tier.highlighted ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'
                          }`}
                      >
                        {tier.features[rowIndex] && (
                          <span className="flex items-center justify-center">
                            <svg
                              className={`w-5 h-5 mr-2 ${tier.highlighted ? 'text-yellow-300' : 'text-purple-600'
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            {tier.features[rowIndex]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-red-950">
                  {pricingData.map((tier, index) => (
                    <td
                      key={index}
                      className={`px-6 py-8 text-center ${tier.highlighted ? 'bg-purple-600' : 'bg-white'
                        }`}
                    >
                      <button
                        className={`px-6 py-2 text-sm font-medium rounded-md ${tier.highlighted
                            ? 'bg-yellow-400 text-purple-600 hover:bg-yellow-500'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                          }`}
                      >
                        {tier.buttonText}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="w-[100%] md:w-[30%] hidden md:block">
          <Image
            quality={100}
            src="/character-angry.png"
            alt=""
            layout="responsive"
            width={300}
            height={200}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Ticket;
