"use client";

import React from "react";
import { QRScanResult } from "@/types/admin";
import { Button } from "./ui/button";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  User,
  Calendar,
  Ticket,
  Clock,
  X,
} from "lucide-react";

interface ScanResultModalProps {
  result: QRScanResult | null;
  isOpen: boolean;
  onClose: () => void;
  onContinueScanning: () => void;
}

const ScanResultModal: React.FC<ScanResultModalProps> = ({
  result,
  isOpen,
  onClose,
  onContinueScanning,
}) => {
  if (!isOpen || !result) return null;

  const getErrorIcon = (errorType?: string) => {
    switch (errorType) {
      case "already_attended":
        return <AlertTriangle className="w-16 h-16 text-yellow-500" />;
      case "ticket_cancelled":
        return <XCircle className="w-16 h-16 text-red-500" />;
      default:
        return <XCircle className="w-16 h-16 text-red-500" />;
    }
  };

  const getErrorTitle = (errorType?: string) => {
    switch (errorType) {
      case "invalid_qr":
        return "QR Code Tidak Valid";
      case "already_attended":
        return "Sudah Check-in";
      case "ticket_not_found":
        return "Tiket Tidak Ditemukan";
      case "ticket_cancelled":
        return "Tiket Dibatalkan";
      case "event_mismatch":
        return "Event Tidak Sesuai";
      default:
        return "Scan Gagal";
    }
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Hasil Scan QR Code</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {result.success && result.data ? (
            /* Success State */
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                Check-in Berhasil!
              </h3>
              <p className="text-gray-600 mb-6">
                Peserta berhasil melakukan check-in
              </p>

              {/* Attendee Details */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Nama Peserta</p>
                    <p className="font-semibold">{result.data.holderName}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Ticket className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Kode Tiket</p>
                    <p className="font-semibold font-mono">
                      {result.data.ticketCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Jenis Tiket</p>
                    <p className="font-semibold">
                      {result.data.ticketTypeName}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Waktu Check-in</p>
                    <p className="font-semibold">
                      {result.data.attendedAt
                        ? formatDateTime(result.data.attendedAt)
                        : "Baru saja"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Error State */
            <div className="text-center">
              {getErrorIcon(result.errorType)}
              <h3 className="text-2xl font-bold text-red-600 mb-2 mt-4">
                {getErrorTitle(result.errorType)}
              </h3>
              <p className="text-gray-600 mb-6">{result.error}</p>

              {/* Additional info for specific errors */}
              {result.errorType === "already_attended" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
                  <p className="text-sm text-yellow-800">
                    <strong>Catatan:</strong> Peserta ini sudah melakukan
                    check-in sebelumnya. Pastikan QR code yang dipindai adalah
                    milik peserta yang belum check-in.
                  </p>
                </div>
              )}

              {result.errorType === "ticket_cancelled" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left">
                  <p className="text-sm text-red-800">
                    <strong>Catatan:</strong> Tiket ini telah dibatalkan dan
                    tidak dapat digunakan untuk check-in. Silakan hubungi
                    panitia untuk informasi lebih lanjut.
                  </p>
                </div>
              )}

              {result.errorType === "invalid_qr" && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-left">
                  <p className="text-sm text-gray-800">
                    <strong>Tips:</strong> Pastikan QR code dalam kondisi baik
                    dan tidak rusak. Coba scan ulang dengan pencahayaan yang
                    lebih baik.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t bg-gray-50">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Tutup
          </Button>
          <Button onClick={onContinueScanning} className="flex-1">
            Lanjut Scan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScanResultModal;
