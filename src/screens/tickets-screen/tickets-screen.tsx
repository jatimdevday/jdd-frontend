"use client";

import React, { useState, useMemo, useEffect } from "react";
import { TicketType, TicketHolder } from "@/types/event";
import { TicketSelection } from "@/components/ticket-selection";
import { TicketHolderForm } from "@/components/ticket-holder-form";
import { OrderSummary } from "@/components/order-summary";

// Data tiket yang tersedia sesuai dengan busya.id
const availableTicketTypes: TicketType[] = [
  {
    id: "regular",
    name: "Tiket Reguler",
    price: 35000,
    description: "Akses standar ke event dengan fasilitas lengkap",
  },
  {
    id: "bundling",
    name: "Tiket Bundling",
    price: 150000,
    description: "Paket khusus dengan benefit tambahan dan diskon",
  },
];

const TicketsScreen = () => {
  // State untuk tiket yang dipilih (hanya 1 tipe)
  const [selectedTicketType, setSelectedTicketType] = useState<string>("");

  // State untuk jumlah tiket yang dipilih
  const [quantity, setQuantity] = useState<number>(0);

  // State untuk data pemegang tiket
  const [ticketHolders, setTicketHolders] = useState<TicketHolder[]>([]);

  // State untuk pembayaran
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hitung total tiket yang dipilih
  const totalTickets = quantity;

  // Sync ticketHolders dengan quantity
  useEffect(() => {
    if (selectedTicketType && quantity > 0) {
      setTicketHolders((currentHolders) => {
        if (quantity !== currentHolders.length) {
          if (quantity > currentHolders.length) {
            // Tambah holders
            const newHolders = [...currentHolders];
            for (let i = currentHolders.length; i < quantity; i++) {
              newHolders.push({
                id: `holder-${Date.now()}-${i}-${Math.random()
                  .toString(36)
                  .substr(2, 9)}`,
                fullName: "",
                email: "",
                community: "",
                occupation: undefined,
                institution: "",
                interests: "",
                informationSource: undefined,
              });
            }
            return newHolders;
          } else {
            // Kurangi holders
            return currentHolders.slice(0, quantity);
          }
        }
        return currentHolders;
      });
    } else if (quantity === 0) {
      setTicketHolders([]);
    }
  }, [quantity, selectedTicketType]);

  // Update tipe tiket yang dipilih
  const handleTicketTypeChange = (ticketId: string) => {
    setSelectedTicketType(ticketId);

    if (ticketId === "") {
      // Reset semua jika ticketId kosong
      setQuantity(0);
      setTicketHolders([]);
    } else {
      // Mulai dengan 1 tiket dan 1 form ketika tiket dipilih
      setQuantity(1);

      // Langsung buat 1 form pemegang tiket
      const initialHolder: TicketHolder = {
        id: `holder-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        fullName: "",
        email: "",
        community: "",
        occupation: undefined,
        institution: "",
        interests: "",
        informationSource: undefined,
      };
      setTicketHolders([initialHolder]);
    }
  };

  // Update jumlah tiket
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    // Logic untuk sync ticketHolders sudah dipindah ke useEffect
  };

  // Update data pemegang tiket
  const handleTicketHolderChange = (index: number, data: TicketHolder) => {
    const newHolders = [...ticketHolders];
    newHolders[index] = data;
    setTicketHolders(newHolders);
  };

  // Hapus pemegang tiket
  const removeTicketHolder = (index: number) => {
    const newHolders = ticketHolders.filter((_, i) => i !== index);
    setTicketHolders(newHolders);

    // Update quantity agar sinkron dengan jumlah form
    setQuantity(newHolders.length);
  };

  // Handle pembayaran - reset form setelah membuka payment gateway
  const handleProceedToPayment = () => {
    // Reset semua state
    setSelectedTicketType("");
    setQuantity(0);
    setTicketHolders([]);
    setTermsAccepted(false);
    setLoading(false);
  };

  // Buat quantities object untuk OrderSummary
  const quantities = useMemo(() => {
    if (!selectedTicketType) return {};
    return { [selectedTicketType]: quantity };
  }, [selectedTicketType, quantity]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pembelian Tiket Jatim Developer Days
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih tipe tiket dan isi data pemegang tiket untuk melanjutkan ke
            pembayaran
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Panel Kiri - Pilihan Tiket & Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pilihan Tiket */}
            <TicketSelection
              ticketTypes={availableTicketTypes}
              selectedTicketType={selectedTicketType}
              quantity={quantity}
              onTicketTypeChange={handleTicketTypeChange}
              onQuantityChange={handleQuantityChange}
            />

            {/* Form Data Pemegang Tiket dengan Smooth Transition */}
            <div
              className={`transition-all duration-700 ease-in-out ${
                totalTickets > 0
                  ? "opacity-100 translate-y-0 max-h-[2000px]"
                  : "opacity-0 translate-y-8 max-h-0 overflow-hidden"
              }`}
            >
              {totalTickets > 0 && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">
                          Data Pemegang Tiket
                        </h2>
                        <p className="text-sm text-gray-600">
                          {
                            availableTicketTypes.find(
                              (t) => t.id === selectedTicketType
                            )?.name
                          }{" "}
                          • {totalTickets} tiket
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {ticketHolders.map((holder, index) => (
                      <div
                        key={holder.id}
                        className="animate-in slide-in-from-bottom-4 duration-500"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <TicketHolderForm
                          data={holder}
                          onChange={(data) =>
                            handleTicketHolderChange(index, data)
                          }
                          onRemove={() => removeTicketHolder(index)}
                          index={index}
                          canRemove={true}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Panel Kanan - Ringkasan Pesanan (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <OrderSummary
                ticketTypes={availableTicketTypes}
                quantities={quantities}
                onProceedToPayment={handleProceedToPayment}
                termsAccepted={termsAccepted}
                onTermsChange={setTermsAccepted}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsScreen;
