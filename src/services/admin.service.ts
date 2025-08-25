import { AttendeeTicket, QRScanResult } from "@/types/admin";

// Mock data simulasi untuk tiket peserta
const mockAttendeeTickets: AttendeeTicket[] = [
  {
    id: "ATT-001",
    ticketCode: "JDD-2024-001",
    eventId: "EVT-001",
    eventName: "Jatim Developer Days 2024",
    holderName: "Ahmad Fauzi",
    holderEmail: "ahmad.fauzi@email.com",
    ticketType: "regular",
    ticketTypeName: "Tiket Reguler",
    purchaseDate: "2024-11-20T14:30:00",
    status: "active",
    isAttended: false,
    qrCodeData: "JDD-2024-001|EVT-001|ATT-001|Ahmad Fauzi",
  },
  {
    id: "ATT-002",
    ticketCode: "JDD-2024-002",
    eventId: "EVT-001",
    eventName: "Jatim Developer Days 2024",
    holderName: "Sarah Putri",
    holderEmail: "sarah.putri@email.com",
    ticketType: "bundling",
    ticketTypeName: "Tiket Bundling",
    purchaseDate: "2024-11-18T10:15:00",
    status: "active",
    isAttended: true,
    attendedAt: "2024-12-15T08:30:00",
    qrCodeData: "JDD-2024-002|EVT-001|ATT-002|Sarah Putri",
  },
  {
    id: "ATT-003",
    ticketCode: "JDD-2024-003",
    eventId: "EVT-001",
    eventName: "Jatim Developer Days 2024",
    holderName: "Budi Santoso",
    holderEmail: "budi.santoso@email.com",
    ticketType: "regular",
    ticketTypeName: "Tiket Reguler",
    purchaseDate: "2024-11-22T09:45:00",
    status: "active",
    isAttended: false,
    qrCodeData: "JDD-2024-003|EVT-001|ATT-003|Budi Santoso",
  },
  {
    id: "ATT-004",
    ticketCode: "JDD-2024-004",
    eventId: "EVT-001",
    eventName: "Jatim Developer Days 2024",
    holderName: "Rina Wati",
    holderEmail: "rina.wati@email.com",
    ticketType: "vip",
    ticketTypeName: "Tiket VIP",
    purchaseDate: "2024-11-15T16:20:00",
    status: "cancelled",
    isAttended: false,
    qrCodeData: "JDD-2024-004|EVT-001|ATT-004|Rina Wati",
  },
  {
    id: "ATT-005",
    ticketCode: "JDD-2024-005",
    eventId: "EVT-001",
    eventName: "Jatim Developer Days 2024",
    holderName: "Doni Pratama",
    holderEmail: "doni.pratama@email.com",
    ticketType: "student",
    ticketTypeName: "Tiket Student",
    purchaseDate: "2024-11-25T11:10:00",
    status: "active",
    isAttended: false,
    qrCodeData: "JDD-2024-005|EVT-001|ATT-005|Doni Pratama",
  },
];

// Simulasi delay network
const simulateNetworkDelay = (ms: number = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const adminService = {
  // Validasi QR code dan mark attendance
  validateQRCode: async (
    qrData: string,
    eventId?: string
  ): Promise<QRScanResult> => {
    await simulateNetworkDelay();

    try {
      // Parse QR code data (format: ticketCode|eventId|attendeeId|holderName)
      const qrParts = qrData.split("|");

      if (qrParts.length !== 4) {
        return {
          success: false,
          error: "Format QR code tidak valid",
          errorType: "invalid_qr",
        };
      }

      const [ticketCode, qrEventId, attendeeId, holderName] = qrParts;

      // Cari tiket berdasarkan QR data
      const ticket = mockAttendeeTickets.find(
        (t) =>
          t.ticketCode === ticketCode &&
          t.eventId === qrEventId &&
          t.id === attendeeId
      );

      if (!ticket) {
        return {
          success: false,
          error: "Tiket tidak ditemukan dalam database",
          errorType: "ticket_not_found",
        };
      }

      // Validasi event ID jika disediakan
      if (eventId && ticket.eventId !== eventId) {
        return {
          success: false,
          error: "Tiket tidak valid untuk event ini",
          errorType: "event_mismatch",
        };
      }

      // Cek status tiket
      if (ticket.status === "cancelled") {
        return {
          success: false,
          error: "Tiket telah dibatalkan",
          errorType: "ticket_cancelled",
        };
      }

      // Cek apakah sudah hadir
      if (ticket.isAttended) {
        return {
          success: false,
          error: `Peserta ${
            ticket.holderName
          } sudah melakukan check-in pada ${new Date(
            ticket.attendedAt!
          ).toLocaleString("id-ID")}`,
          errorType: "already_attended",
        };
      }

      // Mark sebagai hadir
      ticket.isAttended = true;
      ticket.attendedAt = new Date().toISOString();

      return {
        success: true,
        data: { ...ticket },
      };
    } catch (error) {
      return {
        success: false,
        error: "Gagal memproses QR code",
        errorType: "invalid_qr",
      };
    }
  },

  // Get attendee statistics
  getAttendeeStats: async (eventId: string) => {
    await simulateNetworkDelay(300);

    const eventTickets = mockAttendeeTickets.filter(
      (t) => t.eventId === eventId
    );
    const attended = eventTickets.filter(
      (t) => t.isAttended && t.status === "active"
    ).length;
    const total = eventTickets.filter((t) => t.status === "active").length;
    const cancelled = eventTickets.filter(
      (t) => t.status === "cancelled"
    ).length;

    return {
      total,
      attended,
      remaining: total - attended,
      cancelled,
      attendanceRate: total > 0 ? Math.round((attended / total) * 100) : 0,
    };
  },

  // Get recent scan history
  getRecentScans: async (eventId: string, limit: number = 10) => {
    await simulateNetworkDelay(200);

    // Simulasi history scan terbaru
    const recentScans = mockAttendeeTickets
      .filter((t) => t.eventId === eventId && t.isAttended)
      .sort(
        (a, b) =>
          new Date(b.attendedAt!).getTime() - new Date(a.attendedAt!).getTime()
      )
      .slice(0, limit);

    return recentScans;
  },
};

export default adminService;
