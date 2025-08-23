import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { TicketType } from "@/types/event";

interface OrderSummaryProps {
  ticketTypes: TicketType[];
  quantities: Record<string, number>;
  onProceedToPayment: () => void;
  termsAccepted: boolean;
  onTermsChange: (accepted: boolean) => void;
  loading?: boolean;
}

export function OrderSummary({
  ticketTypes,
  quantities,
  onProceedToPayment,
  termsAccepted,
  onTermsChange,
  loading = false,
}: OrderSummaryProps) {
  const calculateTotal = () => {
    return ticketTypes.reduce((total, ticket) => {
      return total + ticket.price * (quantities[ticket.id] || 0);
    }, 0);
  };

  const total = calculateTotal();
  const totalTickets = Object.values(quantities).reduce(
    (sum, qty) => sum + qty,
    0
  );

  const isFormValid = totalTickets > 0 && termsAccepted;

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
                  {quantity}x @ Rp {ticket.price.toLocaleString()}
                </p>
              </div>
              <p className="font-bold text-gray-900">
                Rp {(ticket.price * quantity).toLocaleString()}
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
