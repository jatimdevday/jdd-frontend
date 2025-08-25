"use client";

import React, { useState } from "react";
import QRCode from "@/components/qr-code";
import { Button } from "@/components/ui/button";
// import { Card } from '@/components/ui/card';

const TestQRPage = () => {
  const [selectedTicket, setSelectedTicket] = useState<string>("");

  // Mock tickets untuk testing
  const testTickets = [
    {
      id: "ATT-001",
      name: "Ahmad Fauzi",
      type: "Tiket Reguler",
      code: "JDD-2024-001",
      qrData: "JDD-2024-001|EVT-001|ATT-001|Ahmad Fauzi",
      status: "Belum Check-in",
    },
    {
      id: "ATT-002",
      name: "Sarah Putri",
      type: "Tiket Bundling",
      code: "JDD-2024-002",
      qrData: "JDD-2024-002|EVT-001|ATT-002|Sarah Putri",
      status: "Sudah Check-in",
    },
    {
      id: "ATT-003",
      name: "Budi Santoso",
      type: "Tiket Reguler",
      code: "JDD-2024-003",
      qrData: "JDD-2024-003|EVT-001|ATT-003|Budi Santoso",
      status: "Belum Check-in",
    },
    {
      id: "ATT-004",
      name: "Rina Wati",
      type: "Tiket VIP",
      code: "JDD-2024-004",
      qrData: "JDD-2024-004|EVT-001|ATT-004|Rina Wati",
      status: "Tiket Dibatalkan",
    },
    {
      id: "ATT-005",
      name: "Doni Pratama",
      type: "Tiket Student",
      code: "JDD-2024-005",
      qrData: "JDD-2024-005|EVT-001|ATT-005|Doni Pratama",
      status: "Belum Check-in",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Test QR Codes
          </h1>
          <p className="text-gray-600">
            QR codes untuk testing scanner admin. Gunakan kamera atau screenshot
            untuk scan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testTickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {ticket.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{ticket.type}</p>
                <p className="text-xs font-mono text-blue-600">{ticket.code}</p>
                <p
                  className={`text-xs font-medium mt-2 ${
                    ticket.status === "Belum Check-in"
                      ? "text-orange-600"
                      : ticket.status === "Sudah Check-in"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {ticket.status}
                </p>
              </div>

              <div className="flex justify-center mb-4">
                <QRCode value={ticket.qrData} size={150} clickable={true} />
              </div>

              <Button
                variant={selectedTicket === ticket.id ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setSelectedTicket(
                    selectedTicket === ticket.id ? "" : ticket.id
                  )
                }
                className="w-full"
              >
                {selectedTicket === ticket.id ? "Tutup Detail" : "Lihat Detail"}
              </Button>

              {selectedTicket === ticket.id && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2">QR Data:</h4>
                  <p className="text-xs font-mono text-gray-700 break-all">
                    {ticket.qrData}
                  </p>
                  <div className="mt-3 text-xs text-gray-600">
                    <p>
                      <strong>Format:</strong>{" "}
                      ticketCode|eventId|attendeeId|holderName
                    </p>
                    <p>
                      <strong>Expected Result:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-2 mt-1">
                      {ticket.status === "Belum Check-in" && (
                        <li className="text-green-600">✅ Check-in berhasil</li>
                      )}
                      {ticket.status === "Sudah Check-in" && (
                        <li className="text-yellow-600">⚠️ Sudah check-in</li>
                      )}
                      {ticket.status === "Tiket Dibatalkan" && (
                        <li className="text-red-600">❌ Tiket dibatalkan</li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Cara Testing</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start space-x-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                1
              </span>
              <p>
                Buka halaman{" "}
                <code className="bg-gray-100 px-1 rounded">/admin/scan</code> di
                tab/window baru
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                2
              </span>
              <p>Klik "Mulai Scan" untuk mengaktifkan kamera</p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                3
              </span>
              <p>
                Arahkan kamera ke QR code di halaman ini, atau screenshot QR
                code dan scan dari galeri
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                4
              </span>
              <p>Lihat hasil scan dan modal yang muncul</p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Tips:</strong> Jika menggunakan device yang sama, buka
              halaman ini dan scanner di browser yang berbeda, atau gunakan
              screenshot QR code untuk testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestQRPage;
