export interface AttendeeTicket {
  id: string;
  ticketCode: string;
  eventId: string;
  eventName: string;
  holderName: string;
  holderEmail: string;
  ticketType: string;
  ticketTypeName: string;
  purchaseDate: string;
  status: "active" | "used" | "cancelled";
  isAttended: boolean;
  attendedAt?: string;
  qrCodeData: string;
}

export interface QRScanResult {
  success: boolean;
  data?: AttendeeTicket;
  error?: string;
  errorType?:
    | "invalid_qr"
    | "already_attended"
    | "ticket_not_found"
    | "ticket_cancelled"
    | "event_mismatch";
}

export interface AdminScannerState {
  isScanning: boolean;
  lastScanResult?: QRScanResult;
  scanHistory: QRScanResult[];
  currentEventId?: string;
}
