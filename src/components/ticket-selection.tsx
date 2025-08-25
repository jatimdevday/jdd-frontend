import React from "react";
import { TicketQuantitySelector } from "./ticket-quantity-selector";
import { Button } from "./ui/button";
import { ITicket } from "@/types/ticket";

interface TicketSelectionProps {
  ticketTypes: ITicket[];
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
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Pilih Tiket</h2>

      <div className="space-y-3">
        {ticketTypes.map((ticket) => {
          const isAvailable = ticket.quota - ticket.sold > 0;
          const isExpired = new Date(ticket.end_date) < new Date();
          const canSelect = isAvailable && !isExpired;

          return (
            <div
              key={ticket.id}
              className={`border rounded-lg p-4 transition-all duration-200 ${
                !canSelect
                  ? "border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed"
                  : selectedTicketType === ticket.id
                  ? "border-blue-400 bg-blue-50 cursor-pointer"
                  : "border-gray-200 hover:border-gray-300 bg-white cursor-pointer"
              }`}
              onClick={() => canSelect && onTicketTypeChange(ticket.id)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-7">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900">
                    {ticket.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <span>
                      Tersisa: {ticket.quota - ticket.sold}/{ticket.quota}
                    </span>
                    {!canSelect && (
                      <span className="text-red-600 font-medium">
                        {!isAvailable ? "Habis" : "Berakhir"}
                      </span>
                    )}
                  </div>
                </div>

                {selectedTicketType === ticket.id && canSelect && (
                  <TicketQuantitySelector
                    value={quantity}
                    onChange={onQuantityChange}
                    min={1}
                    max={Math.min(10, ticket.quota - ticket.sold)}
                  />
                )}

                <p className="text-lg font-bold text-blue-600">
                  Rp {parseFloat(ticket.price).toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {ticketTypes.length === 0 && (
        <div className="text-center py-6">
          <p className="text-sm text-gray-500">
            Tidak ada tiket yang tersedia saat ini.
          </p>
        </div>
      )}

      {!selectedTicketType && ticketTypes.length > 0 && (
        <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-xs text-amber-700">
            💡 Pilih salah satu tipe tiket di atas untuk melanjutkan
          </p>
        </div>
      )}
    </div>
  );
}
