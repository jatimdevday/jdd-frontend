"use client";
import { useState } from "react";
import { Content } from "@/lib/schema";
import Star from "@/assets/svgs/Star";
import { Button } from "@/components/Button";
import Link from "next/link";
import { createPayment } from "@/lib/payment";

interface TicketType {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  startDate: string;
  endDate: string;
  disabled: boolean;
  description?: string;
}

interface FormData {
  ticketType: string;
  holderName: string;
  holderEmail: string;
  community: string;
  occupation: string;
  institution: string;
  agreeTerms: boolean;
  interest: string;
}

const ticketTypes: TicketType[] = [
  {
    id: "presale",
    name: "[Pre Sale] Jatim Developer Day 2025",
    price: 35000,
    originalPrice: 50000,
    startDate: "18 Agustus 2025",
    endDate: "31 Agustus 2025",
    disabled: false,
    description: "Hemat Rp 15.000! Terbatas hingga 31 Agustus",
  },
  {
    id: "regular",
    name: "[Reguler] Jatim Developer Day 2025",
    price: 50000,
    startDate: "7 September 2025",
    endDate: "11 Oktober 2025",
    disabled: true,
  },
  {
    id: "bundling",
    name: "[Bundling] Jatim Developer Day 2025",
    price: 200000,
    startDate: "7 September 2025",
    endDate: "11 Oktober 2025",
    disabled: true,
    description: "Termasuk workshop premium + merchandise",
  },
];

const occupationOptions = [
  { value: "", label: "Pilih Pekerjaan" },
  { value: "mahasiswa", label: "Mahasiswa" },
  { value: "bekerja", label: "Bekerja" },
  { value: "freshgraduate", label: "Fresh Graduate" },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const TicketCard = ({
  ticket,
  selected,
  onSelect,
}: {
  ticket: TicketType;
  selected: boolean;
  onSelect: () => void;
}) => (
  <div
    className={`relative p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
      ticket.disabled
        ? "border-gray-300 bg-gray-50 cursor-not-allowed opacity-60"
        : selected
        ? "border-primary bg-primary/5"
        : "border-gray-200 hover:border-primary/50"
    }`}
    onClick={!ticket.disabled ? onSelect : undefined}
  >
    {ticket.disabled && (
      <div className="absolute top-4 right-4 bg-gray-500 text-white text-xs px-2 py-1 rounded">
        Segera Hadir
      </div>
    )}

    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-blackText">{ticket.name}</h3>
        <div className="text-right">
          {ticket.originalPrice && !ticket.disabled && (
            <div className="text-sm text-gray-500 line-through">
              {formatCurrency(ticket.originalPrice)}
            </div>
          )}
          <div className="text-xl font-bold text-secondary">
            {formatCurrency(ticket.price)}
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        {ticket.startDate} - {ticket.endDate}
      </div>

      {ticket.description && (
        <div className="text-sm text-primary font-medium">
          {ticket.description}
        </div>
      )}
    </div>

    {selected && !ticket.disabled && (
      <div className="absolute top-4 right-4 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    )}
  </div>
);

const TicketScreen = ({ content }: { content?: Content }) => {
  const [formData, setFormData] = useState<FormData>({
    ticketType: "",
    holderName: "",
    holderEmail: "",
    community: "",
    occupation: "",
    institution: "",
    interest: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedTicket = ticketTypes.find((t) => t.id === formData.ticketType);

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.ticketType) newErrors.ticketType = "Pilih tipe tiket";
    if (!formData.holderName.trim()) newErrors.holderName = "Nama wajib diisi";
    if (!formData.holderEmail.trim())
      newErrors.holderEmail = "Email wajib diisi";
    if (!formData.occupation) newErrors.occupation = "Pilih pekerjaan";
    if (!formData.institution.trim())
      newErrors.institution = "Institusi/Perusahaan wajib diisi";
    if (!formData.agreeTerms)
      newErrors.agreeTerms = "Anda harus menyetujui syarat dan ketentuan";

    // Email validation
    if (
      formData.holderEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.holderEmail)
    ) {
      newErrors.holderEmail = "Format email tidak valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const payment = await createPayment({
        product: [selectedTicket?.name || ""],
        qty: ["1"],
        price: [(selectedTicket?.price || 0).toString()],
        amount: (selectedTicket?.price || 0).toString(),
        buyerName: formData.holderName,
        buyerEmail: formData.holderEmail,
        notifyUrl: "https://jdd-ticketing-ctw4mjlu7a-et.a.run.app/api/callback",
        paymentMethod: "qris",
      });
      window.open(payment.Url, "_blank");
      setFormData({
        ticketType: "",
        holderName: "",
        holderEmail: "",
        community: "",
        occupation: "",
        institution: "",
        interest: "",
        agreeTerms: false,
      });
    }
  };

  return (
    <div className="bg-white py-12 md:py-24" id="ticket">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="flex items-center justify-center gap-3">
            <Star />
            <h1 className="text-3xl md:text-4xl font-bold text-blackText">
              Jatim Developer Day 2025 Registration
            </h1>
            <Star />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Daftar sekarang dan bergabunglah dengan komunitas developer terbesar
            di Jawa Timur!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Column 1: Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Ticket Type Selection */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-blackText mb-6">
                  Pilih Tipe Tiket
                </h2>
                <div className="space-y-4">
                  {ticketTypes.map((ticket) => (
                    <TicketCard
                      key={ticket.id}
                      ticket={ticket}
                      selected={formData.ticketType === ticket.id}
                      onSelect={() =>
                        handleInputChange("ticketType", ticket.id)
                      }
                    />
                  ))}
                  {errors.ticketType && (
                    <p className="text-red-500 text-sm">{errors.ticketType}</p>
                  )}
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-blackText mb-6">
                  Informasi Pemegang Tiket
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Pemegang Tiket *
                    </label>
                    <input
                      type="text"
                      value={formData.holderName}
                      onChange={(e) =>
                        handleInputChange("holderName", e.target.value)
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.holderName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Masukkan nama lengkap"
                    />
                    {errors.holderName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.holderName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Pemegang Tiket *
                    </label>
                    <input
                      type="email"
                      value={formData.holderEmail}
                      onChange={(e) =>
                        handleInputChange("holderEmail", e.target.value)
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.holderEmail
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="contoh@email.com"
                    />
                    {errors.holderEmail && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.holderEmail}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-blackText mb-6">
                  Informasi Detail
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asal Komunitas
                    </label>
                    <input
                      type="text"
                      value={formData.community}
                      onChange={(e) =>
                        handleInputChange("community", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Nama komunitas (opsional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pekerjaan *
                    </label>
                    <select
                      value={formData.occupation}
                      onChange={(e) =>
                        handleInputChange("occupation", e.target.value)
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.occupation ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      {occupationOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.occupation && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.occupation}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institusi/Perusahaan *
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) =>
                        handleInputChange("institution", e.target.value)
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.institution
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Nama institusi atau perusahaan"
                    />
                    {errors.institution && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.institution}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Minat/Spesialisasi *
                    </label>
                    <input
                      type="text"
                      value={formData.interest}
                      onChange={(e) =>
                        handleInputChange("interest", e.target.value)
                      }
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.interest ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="(ex: Web Development, Cloud, Cyber Security)"
                    />
                    {errors.interest && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.interest}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Column 2: Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-blackText mb-6">
                Ringkasan Pesanan
              </h2>

              {selectedTicket ? (
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-blackText">
                          {selectedTicket.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {selectedTicket.startDate} - {selectedTicket.endDate}
                        </p>
                      </div>
                      <div className="text-right">
                        {selectedTicket.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            {formatCurrency(selectedTicket.originalPrice)}
                          </div>
                        )}
                        <div className="text-lg font-bold text-secondary">
                          {formatCurrency(selectedTicket.price)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total</span>
                      <span className="text-xl font-bold text-secondary">
                        {formatCurrency(selectedTicket.price)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={(e) =>
                          handleInputChange("agreeTerms", e.target.checked)
                        }
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label
                        htmlFor="agreeTerms"
                        className="text-sm text-gray-700"
                      >
                        Saya menyetujui{" "}
                        <Link
                          href="/terms"
                          className="text-primary hover:underline"
                        >
                          syarat & ketentuan
                        </Link>{" "}
                        dan{" "}
                        <Link
                          href="/refund"
                          className="text-primary hover:underline"
                        >
                          kebijakan pengembalian dana
                        </Link>
                      </label>
                    </div>
                    {errors.agreeTerms && (
                      <p className="text-red-500 text-sm">
                        {errors.agreeTerms}
                      </p>
                    )}

                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full text-lg py-4"
                      disabled={!selectedTicket || !formData.agreeTerms}
                    >
                      Beli Tiket - {formatCurrency(selectedTicket.price)}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>Pilih tipe tiket untuk melihat ringkasan pesanan</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketScreen;
