import React from "react";

import CheckIcon from "@/assets/svgs/CheckIcon";
import XIcon from "@/assets/svgs/XIcon";

const Ticket = () => {
  const pricingData = [
    {
      title: "Paket Hemat",
      price: "Rp.30.000",
      features: [
        { name: "Item 1", included: true },
        { name: "Item 1", included: true },
        { name: "Item 1", included: false },
        { name: "Item 1", included: false },
      ],
      buttonText: "Beli Tiket",
      highlighted: false,
    },
    {
      title: "Dana Pelajar",
      price: "Rp.50.000",
      features: [
        { name: "Item 1", included: true },
        { name: "Item 1", included: true },
        { name: "Item 1", included: true },
        { name: "Item 1", included: false },
        { name: "Item 1", included: false },
      ],
      buttonText: "Beli Tiket",
      highlighted: false,
    },
    {
      title: "Special Pake Telor",
      price: "Rp.100.000",
      features: [
        { name: "Item 1", included: true },
        { name: "Item 1", included: true },
        { name: "Item 1", included: true },
        { name: "Item 1", included: true },
        { name: "Item 1", included: true },
        { name: "Item 1", included: true },
      ],
      buttonText: "Beli Tiket →",
      highlighted: true,
    },
    {
      title: "Seadanya",
      price: "Rp.40.000",
      features: [
        { name: "Item 1", included: true },
        { name: "Item 1", included: true },
        { name: "Item 1", included: true },
        { name: "Item 1", included: false },
        { name: "Item 1", included: false },
        { name: "Item 1", included: false },
      ],
      buttonText: "Beli Tiket",
      highlighted: false,
    },
  ];

  // const CheckIcon = ({ className }: { className?: string }) => (
  //   <svg
  //     className={className}
  //     fill="none"
  //     stroke="currentColor"
  //     viewBox="0 0 24 24"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       strokeWidth="2"
  //       d="M5 13l4 4L19 7"
  //     ></path>
  //   </svg>
  // );

  // const XIcon = ({ className }: { className?: string }) => (
  //   <svg
  //     className={className}
  //     fill="none"
  //     stroke="currentColor"
  //     viewBox="0 0 24 24"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       strokeWidth="2"
  //       d="M6 18L18 6M6 6l12 12"
  //     ></path>
  //   </svg>
  // );

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
                className={`rounded-lg overflow-hidden shadow-lg ${tier.highlighted ? 'bg-[#833cfa] text-white' : 'bg-white'
                  }`}
              >
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-semibold">{tier.title}</h3>
                  <p className="mt-4 text-4xl font-bold">{tier.price}</p>
                  <ul className="mt-6 space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        {feature.included ? (
                          <CheckIcon fill={tier.highlighted ? '#caf93a' : '#833CFA'}  />
                        ) : (
                          <XIcon />
                        )}
                        <span>{feature.name}</span>
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
          <div className="hidden lg:block overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  {pricingData.map((tier, index) => (
                    <th
                      key={index}
                      className={`px-6 py-8 text-left ${tier.highlighted ? 'bg-purple-600 text-white' : 'bg-white text-gray-900'
                        } ${index > 0 ? 'border-l border-gray-200' : ''}`}
                    >
                      <div className="text-lg font-semibold">{tier.title}</div>
                      <div className="mt-2 text-3xl font-bold">{tier.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingData[0].features.map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {pricingData.map((tier, colIndex) => (
                      <td
                        key={colIndex}
                        className={`px-6 py-4 ${tier.highlighted ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'
                          } ${colIndex > 0 ? 'border-l border-gray-200' : ''} ${tier.highlighted === true ? 'border-collapse' : ''}`}
                      >
                        {tier.features[rowIndex] && (
                          <span className="flex items-center gap-2">
                            {tier.features[rowIndex].included ? (
                              <CheckIcon fill={tier.highlighted ? '#caf93a' : '#833CFA'}  />
                            ) : (
                              <XIcon />
                            )}
                            <span>{tier.features[rowIndex].name}</span>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  {pricingData.map((tier, index) => (
                    <td
                      key={index}
                      className={`px-6 py-8 ${tier.highlighted ? 'bg-purple-600' : 'bg-white'
                        } ${index > 0 ? 'border-l border-gray-200' : ''}`}
                    >
                      <button
                        className={`w-full px-6 py-2 text-sm font-medium rounded-md ${tier.highlighted
                          ? 'bg-[#caf93a] text-purple-600 hover:bg-yellow-500'
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
