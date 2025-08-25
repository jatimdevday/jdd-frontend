"use client";

import { OrderSummary } from "@/components/order-summary";
import { TicketHolderForm } from "@/components/ticket-holder-form";
import { TicketSelection } from "@/components/ticket-selection";
import { TEvent, TicketHolder } from "@/types/event";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";

interface Props {
  data?: TEvent;
}

// Schema untuk form
const ticketFormSchema = z.object({
  selectedTicketType: z.string(),
  quantity: z.number().min(0),
  ticketHolders: z.array(
    z.object({
      id: z.string(),
      fullName: z.string(),
      email: z.string(),
      community: z.string().optional(),
      occupation: z.string().optional(),
      institution: z.string().optional(),
      interests: z.string().optional(),
      informationSource: z.string().optional(),
      phoneNumber: z.string().optional(),
      birthDate: z.string().optional(),
    })
  ),
  termsAccepted: z.boolean(),
});

type TicketFormData = z.infer<typeof ticketFormSchema>;

const EventDetailScreen = ({ data }: Props) => {
  const form = useForm<TicketFormData>({
    resolver: zodResolver(ticketFormSchema),
    defaultValues: {
      selectedTicketType: "",
      quantity: 0,
      ticketHolders: [],
      termsAccepted: false,
    },
  });

  const { control, watch, setValue, reset } = form;
  const { fields, remove, replace } = useFieldArray({
    control,
    name: "ticketHolders",
  });

  // Watch form values
  const selectedTicketType = watch("selectedTicketType");
  const quantity = watch("quantity");
  const ticketHolders = watch("ticketHolders");
  const termsAccepted = watch("termsAccepted");

  // Track form validation state for each ticket holder
  const [ticketHolderValidations, setTicketHolderValidations] = useState<
    Record<number, boolean>
  >({});

  // Track expand/collapse state for all forms
  const [allFormsExpanded, setAllFormsExpanded] = useState(true);

  // Hitung total tiket yang dipilih
  const totalTickets = quantity;

  // Sync ticketHolders dengan quantity
  useEffect(() => {
    if (selectedTicketType && quantity > 0) {
      if (quantity !== ticketHolders.length) {
        if (quantity > ticketHolders.length) {
          // Tambah holders
          const newHolders = [...ticketHolders];
          for (let i = ticketHolders.length; i < quantity; i++) {
            newHolders.push({
              id: `holder-${Date.now()}-${i}-${Math.random()
                .toString(36)
                .substr(2, 9)}`,
              fullName: "",
              email: "",
              phoneNumber: "",
              community: undefined,
              occupation: undefined,
              institution: undefined,
              interests: undefined,
              informationSource: undefined,
            });
          }
          replace(newHolders);
        } else {
          // Kurangi holders
          replace(ticketHolders.slice(0, quantity));
        }
      }
    } else if (quantity === 0) {
      replace([]);
    }
  }, [quantity, selectedTicketType, ticketHolders, replace]);

  // Update tipe tiket yang dipilih
  const handleTicketTypeChange = useCallback(
    (ticketId: string) => {
      setValue("selectedTicketType", ticketId);

      if (ticketId === "") {
        // Reset semua jika ticketId kosong
        setValue("quantity", 0);
        replace([]);
      } else {
        // Mulai dengan 1 tiket dan 1 form ketika tiket dipilih
        setValue("quantity", 1);

        // Langsung buat 1 form pemegang tiket
        const initialHolder = {
          id: `holder-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          fullName: "",
          email: "",
          community: undefined,
          occupation: undefined,
          institution: undefined,
          interests: undefined,
          informationSource: undefined,
        };
        replace([initialHolder]);
      }
    },
    [setValue, replace]
  );

  // Update jumlah tiket
  const handleQuantityChange = useCallback(
    (newQuantity: number) => {
      setValue("quantity", newQuantity);
      // Logic untuk sync ticketHolders sudah dipindah ke useEffect
    },
    [setValue]
  );

  // Update data pemegang tiket
  const handleTicketHolderChange = useCallback(
    (index: number, data: TicketHolder) => {
      setValue(`ticketHolders.${index}`, data);
    },
    [setValue]
  );

  // Handle validation change for ticket holder forms
  const handleTicketHolderValidationChange = useCallback(
    (index: number, isValid: boolean) => {
      setTicketHolderValidations((prev) => ({
        ...prev,
        [index]: isValid,
      }));
    },
    []
  );

  // Hapus pemegang tiket
  const removeTicketHolder = useCallback(
    (index: number) => {
      remove(index);
      // Update quantity agar sinkron dengan jumlah form
      setValue("quantity", fields.length - 1);
      // Remove validation state for this index and shift remaining indices
      setTicketHolderValidations((prev) => {
        const newValidations = { ...prev };
        delete newValidations[index];
        // Shift indices down for all validations after the removed index
        const updatedValidations: Record<number, boolean> = {};
        Object.entries(newValidations).forEach(([key, value]) => {
          const keyIndex = parseInt(key);
          if (keyIndex > index) {
            updatedValidations[keyIndex - 1] = value;
          } else {
            updatedValidations[keyIndex] = value;
          }
        });
        return updatedValidations;
      });
    },
    [remove, setValue, fields.length]
  );

  // Handle pembayaran - reset form setelah membuka payment gateway
  const handleProceedToPayment = useCallback(() => {
    // Reset semua state
    reset({
      selectedTicketType: "",
      quantity: 0,
      ticketHolders: [],
      termsAccepted: false,
    });
    // Reset validation state
    setTicketHolderValidations({});
  }, [reset]);

  // Buat quantities object untuk OrderSummary
  const quantities = useMemo(() => {
    if (!selectedTicketType) return {};
    return { [selectedTicketType]: quantity };
  }, [selectedTicketType, quantity]);

  // Check if all forms are valid
  const allFormsValid = useMemo(() => {
    if (totalTickets === 0) return false;

    // Check if all ticket holder forms are valid
    const allTicketHoldersValid = fields.every(
      (_, index) => ticketHolderValidations[index] === true
    );

    return allTicketHoldersValid;
  }, [totalTickets, fields, ticketHolderValidations]);

  // Format date untuk display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Format date range
  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start.toDateString() === end.toDateString()) {
      // Same day
      return `${start.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })} • ${start.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      })} - ${end.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    } else {
      // Different days
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Event Header - Horizontal Layout */}
        {data && (
          <div className="mb-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Event Image */}
                {data.images && data.images.length > 0 && (
                  <div className="lg:col-span-1">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                      <Image
                        src={data.images[0]}
                        alt={`${data.title} - Event Image`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}

                {/* Event Info */}
                <div
                  className={`${
                    data.images && data.images.length > 0
                      ? "lg:col-span-2"
                      : "lg:col-span-3"
                  } flex flex-col justify-between`}
                >
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {data.title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {data.description}
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Date & Time */}
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-blue-900">
                          Tanggal & Waktu
                        </p>
                        <p className="text-sm text-blue-700">
                          {formatDateRange(data.start_date, data.end_date)}
                        </p>
                      </div>
                    </div>

                    {/* Venue */}
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-green-900">
                          Lokasi
                        </p>
                        <p className="text-sm text-green-700 font-medium">
                          {data.venue_name}
                        </p>
                        <p className="text-xs text-green-600 truncate">
                          {data.venue_address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              Pilih tipe tiket dan isi data pemegang tiket untuk melanjutkan ke
              pembayaran
            </p>
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Panel Kiri - Pilihan Tiket & Form */}
          <div className="lg:col-span-3 space-y-6">
            {/* Pilihan Tiket */}
            {data && data.tickets && (
              <TicketSelection
                ticketTypes={data.tickets}
                selectedTicketType={selectedTicketType}
                quantity={quantity}
                onTicketTypeChange={handleTicketTypeChange}
                onQuantityChange={handleQuantityChange}
              />
            )}

            {/* Form Data Pemegang Tiket dengan Smooth Transition */}
            <div
              className={`transition-all duration-700 ease-in-out ${
                totalTickets > 0
                  ? "opacity-100 translate-y-0 max-h-[5000px]"
                  : "opacity-0 translate-y-8 max-h-0 overflow-hidden"
              }`}
            >
              {totalTickets > 0 && (
                <div className="space-y-4">
                  {/* Header untuk section form */}
                  <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-900">
                        Data Pemegang Tiket
                      </h2>
                      {totalTickets > 1 && (
                        <button
                          type="button"
                          onClick={() => setAllFormsExpanded(!allFormsExpanded)}
                          className="text-sm cursor-pointer text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                          {allFormsExpanded ? "Tutup Semua" : "Buka Semua"}
                        </button>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {totalTickets === 1
                        ? "Lengkapi data pemegang tiket di bawah ini"
                        : `Lengkapi data untuk ${totalTickets} pemegang tiket`}
                    </p>
                  </div>

                  {/* Form List dengan spacing yang lebih kompak */}
                  <div className="space-y-3">
                    {fields.map((field, index) => (
                      <div
                        key={field.id}
                        className="animate-in slide-in-from-bottom-4 duration-500"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <TicketHolderForm
                          data={field}
                          onChange={(data) =>
                            handleTicketHolderChange(index, data)
                          }
                          onRemove={() => removeTicketHolder(index)}
                          index={index}
                          canRemove={totalTickets > 1}
                          dynamicForms={data?.forms}
                          onValidationChange={(isValid) =>
                            handleTicketHolderValidationChange(index, isValid)
                          }
                          forceExpanded={allFormsExpanded}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Panel Kanan - Ringkasan Pesanan (Sticky) */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              {data && data.tickets && (
                <OrderSummary
                  ticketTypes={data.tickets}
                  quantities={quantities}
                  onProceedToPayment={handleProceedToPayment}
                  termsAccepted={termsAccepted}
                  onTermsChange={(accepted) =>
                    setValue("termsAccepted", accepted)
                  }
                  loading={false}
                  allFormsValid={allFormsValid}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailScreen;
