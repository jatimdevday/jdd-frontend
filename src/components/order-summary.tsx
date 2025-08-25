import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { ITicket } from "@/types/ticket";

interface OrderSummaryProps {
  ticketTypes: ITicket[];
  quantities: Record<string, number>;
  onProceedToPayment: () => void;
  termsAccepted: boolean;
  onTermsChange: (accepted: boolean) => void;
  loading?: boolean;
  allFormsValid?: boolean;
}

export function OrderSummary({
  ticketTypes,
  quantities,
  onProceedToPayment,
  termsAccepted,
  onTermsChange,
  loading = false,
  allFormsValid = false,
}: OrderSummaryProps) {
  const calculateTotal = () => {
    return ticketTypes.reduce((total, ticket) => {
      return total + parseFloat(ticket.price) * (quantities[ticket.id] || 0);
    }, 0);
  };

  const total = calculateTotal();
  const totalTickets = Object.values(quantities).reduce(
    (sum, qty) => sum + qty,
    0
  );

  const isFormValid = totalTickets > 0 && termsAccepted && allFormsValid;

  const handleProceedToPayment = () => {
    if (!isFormValid) return;

    // Buka payment gateway di tab baru
    const paymentUrl = `/payment?total=${total}&tickets=${totalTickets}`;
    window.open(paymentUrl, "_blank");

    // Reset form setelah membuka payment gateway
    onProceedToPayment();
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      <h2 className="text-2xl font-bold text-gray-900">Ringkasan Pesanan</h2>

      {/* Detail Tiket */}
      <div className="space-y-4">
        {ticketTypes.map((ticket) => {
          const quantity = quantities[ticket.id] || 0;
          if (quantity === 0) return null;

          return (
            <div
              key={ticket.id}
              className="flex justify-between items-center py-3 border-b border-gray-100"
            >
              <div>
                <p className="font-semibold text-gray-900">{ticket.name}</p>
                <p className="text-sm text-gray-500">
                  {quantity}x @ Rp {parseFloat(ticket.price).toLocaleString()}
                </p>
              </div>
              <p className="font-bold text-gray-900">
                Rp {(parseFloat(ticket.price) * quantity).toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center text-xl font-bold text-gray-900">
          <span>Total Pembayaran</span>
          <span>Rp {total.toLocaleString()}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">{totalTickets} tiket</p>
      </div>

      {/* Syarat & Ketentuan */}
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={(checked) => onTermsChange(checked as boolean)}
            className="mt-1"
          />
          <label
            htmlFor="terms"
            className="text-sm text-gray-700 cursor-pointer"
          >
            <span>Saya telah membaca dan menyetujui </span>
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline font-medium"
            >
              Syarat & Ketentuan Event
            </a>
          </label>
        </div>
      </div>

      {/* Tombol Pembayaran */}
      <Button
        onClick={handleProceedToPayment}
        disabled={!isFormValid}
        loading={loading}
        className="w-full"
        size="lg"
      >
        Lanjutkan ke Pembayaran
      </Button>

      {/* Deskripsi Persyaratan */}
      {!isFormValid && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-amber-600 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-amber-800 mb-2">
                Lengkapi persyaratan berikut untuk melanjutkan:
              </h4>
              <ul className="text-sm text-amber-700 space-y-1">
                {totalTickets === 0 && (
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    <span>Pilih tipe tiket dan tentukan jumlahnya</span>
                  </li>
                )}
                {totalTickets > 0 && !allFormsValid && (
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    <span>Isi lengkap semua data pemegang tiket</span>
                  </li>
                )}
                {!termsAccepted && (
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    <span>Setujui syarat & ketentuan event</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Pesan Sukses */}
      {isFormValid && totalTickets > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800">
                Semua persyaratan telah terpenuhi! Anda dapat melanjutkan ke
                pembayaran.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Informasi Tambahan */}
      <div className="text-center space-y-2">
        <p className="text-xs text-gray-500">
          Butuh bantuan?{" "}
          <a
            href="/contact"
            className="text-blue-600 hover:text-blue-700 underline font-medium"
          >
            Hubungi kami
          </a>
        </p>
      </div>
    </div>
  );
}
