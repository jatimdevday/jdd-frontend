import React, { useState } from "react";
import { PurchasedTicket } from "@/types/event";
import QRCode from "./qr-code";
import StatusBadge from "./status-badge";
import ActionButton from "./action-button";

interface TicketCardProps {
  ticket: PurchasedTicket;
  onPrintTicket: (ticket: PurchasedTicket) => void;
  onViewMap: (location: string) => void;
  onAddToCalendar: (
    eventName: string,
    eventDate: string,
    location: string
  ) => void;
}

const TicketCard: React.FC<TicketCardProps> = ({
  ticket,
  onPrintTicket,
  onViewMap,
  onAddToCalendar,
}) => {
  const [copied, setCopied] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatPurchaseDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleCopyTicketCode = async () => {
    try {
      await navigator.clipboard.writeText(ticket.ticketCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy ticket code:", err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">{ticket.eventName}</h3>
            <p className="text-blue-100 text-sm">
              {ticket.ticketTypeName} • {ticket.holderName}
            </p>
          </div>
          <div className="text-right">
            <StatusBadge status={ticket.status} />
          </div>
        </div>
      </div>

      {/* Content Card */}
      <div className="p-6 space-y-4">
        {/* Ticket Code & QR */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-1">Kode Tiket</p>
            <div className="flex items-center space-x-2">
              <p className="font-mono font-bold text-lg text-gray-900">
                {ticket.ticketCode}
              </p>
              <button
                onClick={handleCopyTicketCode}
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                title="Salin kode tiket"
              >
                {copied ? (
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {copied && (
              <p className="text-xs text-green-600 mt-1">
                ✓ Kode tiket berhasil disalin!
              </p>
            )}
          </div>
          <div className="text-center ml-4">
            <QRCode
              value={ticket.ticketCode}
              size={120}
              className="mb-2"
              clickable={true}
            />
            <p className="text-xs text-gray-500">Klik untuk zoom</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-1">
                Tanggal & Waktu Event
              </p>
              <p className="font-medium text-gray-900">
                {formatDate(ticket.eventDate)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Lokasi Event</p>
              <p className="font-medium text-gray-900">
                {ticket.eventLocation}
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-1">Tanggal Pembelian</p>
              <p className="font-medium text-gray-900">
                {formatPurchaseDate(ticket.purchaseDate)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Harga Tiket</p>
              <p className="font-medium text-gray-900">
                Rp {ticket.price.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
          <ActionButton
            onClick={() => onPrintTicket(ticket)}
            icon={
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            }
            text="Cetak Tiket"
            tooltip="Download tiket dalam format PDF"
            variant="primary"
            size="sm"
            className="flex-1"
          />

          <ActionButton
            onClick={() => onViewMap(ticket.eventLocation)}
            icon={
              <svg
                className="w-4 h-4 mr-2"
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
            }
            text="Lihat di Peta"
            tooltip="Buka lokasi event di Google Maps"
            variant="outline"
            size="sm"
          />

          <ActionButton
            onClick={() =>
              onAddToCalendar(
                ticket.eventName,
                ticket.eventDate,
                ticket.eventLocation
              )
            }
            icon={
              <svg
                className="w-4 h-4 mr-2"
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
            }
            text="Tambah ke Kalender"
            tooltip="Tambahkan event ke Google Calendar"
            variant="outline"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
