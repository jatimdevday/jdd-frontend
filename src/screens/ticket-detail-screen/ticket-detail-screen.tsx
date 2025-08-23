"use client";

import React, { useState, useEffect } from "react";
import { PurchasedTicket } from "@/types/event";
import TicketCard from "@/components/ticket-card";

import EmptyState from "@/components/empty-state";
import PageHeader from "@/components/page-header";
import HelpFooter from "@/components/help-footer";
import UserIdBadge from "@/components/user-id-badge";
import SkeletonLoader from "@/components/skeleton-loader";
import Breadcrumb from "@/components/breadcrumb";

interface TicketDetailScreenProps {
  ticketId?: string;
}

const TicketDetailScreen: React.FC<TicketDetailScreenProps> = ({
  ticketId,
}) => {
  const [ticket, setTicket] = useState<PurchasedTicket | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId] = useState("USR-2024-001"); // Mock user ID, bisa diganti dengan data dari auth

  // Mock data tiket yang sudah dibeli
  useEffect(() => {
    const mockTickets: { [key: string]: PurchasedTicket } = {
      "TKT-001": {
        id: "TKT-001",
        eventId: "EVT-001",
        eventName: "Jatim Developer Days 2024",
        eventDate: "2024-12-15T09:00:00",
        eventLocation:
          "Hotel Santika Premiere Malang, Jl. Soekarno-Hatta No. 39, Malang",
        ticketCode: "JDD-2024-001",
        ticketType: "regular",
        ticketTypeName: "Tiket Reguler",
        holderName: "Ahmad Fauzi",
        purchaseDate: "2024-11-20T14:30:00",
        status: "active",
        price: 35000,
      },
      "TKT-002": {
        id: "TKT-002",
        eventId: "EVT-001",
        eventName: "Jatim Developer Days 2024",
        eventDate: "2024-12-15T09:00:00",
        eventLocation:
          "Hotel Santika Premiere Malang, Jl. Soekarno-Hatta No. 39, Malang",
        ticketCode: "JDD-2024-002",
        ticketType: "bundling",
        ticketTypeName: "Tiket Bundling",
        holderName: "Sarah Putri",
        purchaseDate: "2024-11-18T10:15:00",
        status: "active",
        price: 150000,
      },
      "TKT-003": {
        id: "TKT-003",
        eventId: "EVT-001",
        eventName: "Jatim Developer Days 2024",
        eventDate: "2024-12-15T09:00:00",
        eventLocation:
          "Hotel Santika Premiere Malang, Jl. Soekarno-Hatta No. 39, Malang",
        ticketCode: "JDD-2024-003",
        ticketType: "regular",
        ticketTypeName: "Tiket Reguler",
        holderName: "Budi Santoso",
        purchaseDate: "2024-11-22T16:45:00",
        status: "pending",
        price: 35000,
      },
    };

    // Simulate API call
    setTimeout(() => {
      if (ticketId && mockTickets[ticketId]) {
        setTicket(mockTickets[ticketId]);
        setError(null);
      } else {
        setError("Tiket tidak ditemukan");
        setTicket(null);
      }
      setLoading(false);
    }, 1000);
  }, [ticketId]);

  const handlePrintTicket = (ticket: PurchasedTicket) => {
    // Implementasi cetak tiket ke PDF
    console.log("Mencetak tiket:", ticket);

    // Mock: Buka dialog cetak browser
    window.print();
  };

  const handleViewMap = (location: string) => {
    // Implementasi buka peta (Google Maps)
    const encodedLocation = encodeURIComponent(location);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    window.open(googleMapsUrl, "_blank");
  };

  const handleAddToCalendar = (
    eventName: string,
    eventDate: string,
    location: string
  ) => {
    // Implementasi tambah ke kalender
    const startDate = new Date(eventDate);
    const endDate = new Date(startDate.getTime() + 8 * 60 * 60 * 1000); // 8 jam durasi

    // Google Calendar
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventName
    )}&dates=${startDate
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "")}/${endDate
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "")}&details=${encodeURIComponent(
      `Lokasi: ${location}`
    )}&location=${encodeURIComponent(location)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <SkeletonLoader type="header" />
          <div className="max-w-2xl mx-auto">
            <SkeletonLoader type="card" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !ticket) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/", icon: "🏠" },
              { label: "Tiket", href: "/ticket", icon: "🎫" },
              { label: "Tiket Detail", icon: "📋" },
            ]}
            className="mb-6"
          />

          <EmptyState
            title="Tiket Tidak Ditemukan"
            description={
              error ||
              "Tiket yang Anda cari tidak ditemukan atau mungkin sudah tidak valid"
            }
            actionText="Kembali ke Halaman Tiket"
            actionHref="/ticket"
            icon={
              <svg
                className="w-12 h-12 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            }
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Beranda", href: "/", icon: "🏠" },
            { label: "Tiket", href: "/ticket", icon: "🎫" },
            { label: "Detail Tiket", icon: "📋" },
          ]}
          className="mb-6"
        />

        {/* Header */}
        <PageHeader
          title="Detail Tiket"
          description={`Detail lengkap tiket ${ticket.ticketCode} untuk event ${ticket.eventName}`}
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
          }
        >
          <UserIdBadge userId={userId} />
        </PageHeader>

        {/* Single Ticket Display */}
        <div className="max-w-2xl mx-auto mb-8">
          <TicketCard
            ticket={ticket}
            onPrintTicket={handlePrintTicket}
            onViewMap={handleViewMap}
            onAddToCalendar={handleAddToCalendar}
          />
        </div>

        {/* Footer Info */}
        <HelpFooter
          title="Butuh Bantuan?"
          description="Jika Anda mengalami masalah dengan tiket atau membutuhkan bantuan, silakan hubungi tim support kami"
          actions={[
            {
              text: "Hubungi Support",
              icon: (
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
              variant: "outline",
            },
            {
              text: "FAQ",
              icon: (
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              variant: "outline",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default TicketDetailScreen;
