import React from "react";
import { TicketType } from "@/types/event";
import { TicketQuantitySelector } from "./ticket-quantity-selector";

interface TicketSelectionProps {
  ticketTypes: TicketType[];
  selectedTicketType: string;
  quantity: number;
  onTicketTypeChange: (ticketId: string) => void;
  onQuantityChange: (quantity: number) => void;
}

export function TicketSelection({
  ticketTypes,
  selectedTicketType,
  quantity,
  onTicketTypeChange,
  onQuantityChange,
}: TicketSelectionProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      <h2 className="text-2xl font-bold text-gray-900">Pilih Tiket</h2>

      <div className="space-y-4">
        {ticketTypes.map((ticket) => (
          <div
            key={ticket.id}
            className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 border-2 rounded-2xl transition-all duration-300 cursor-pointer ${
              selectedTicketType === ticket.id
                ? "border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 shadow-[0_20px_40px_rgba(59,130,246,0.15)] scale-[1.02]"
                : "border-gray-200 hover:border-blue-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:scale-[1.01] bg-gradient-to-r from-gray-50 to-white"
            }`}
            onClick={() => onTicketTypeChange(ticket.id)}
          >
            <div className="flex-1 mb-4 sm:mb-0">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {ticket.name}
              </h3>
              {ticket.description && (
                <p className="text-gray-600 text-base mb-3 leading-relaxed">
                  {ticket.description}
                </p>
              )}
              <p className="text-3xl font-bold text-blue-600">
                Rp {ticket.price.toLocaleString()}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {selectedTicketType === ticket.id && (
                <TicketQuantitySelector
                  value={quantity}
                  onChange={onQuantityChange}
                  max={10}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {ticketTypes.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">
            Tidak ada tiket yang tersedia saat ini.
          </p>
        </div>
      )}

      {!selectedTicketType && (
        <div className="mt-6 p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 shadow-[0_8px_25px_rgba(245,158,11,0.1)]">
          <p className="text-sm text-amber-800 font-medium">
            <strong>💡 Panduan:</strong> Pilih salah satu tipe tiket di atas untuk melanjutkan
          </p>
        </div>
      )}
    </div>
  );
}
