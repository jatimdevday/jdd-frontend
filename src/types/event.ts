export interface Event {
  id: string;
  name: string;
  description?: string;
  date: string;
  location?: string;
  price?: number;
  availableTickets?: number;
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface TicketHolder {
  id: string;
  fullName: string;
  email: string;
  community?: string;
  occupation?:
    | "Pelajar"
    | "Mahasiswa"
    | "Karyawan Swasta"
    | "Wiraswasta"
    | "Lainnya";
  institution?: string;
  interests?: string;
  informationSource?:
    | "Media Sosial"
    | "Website"
    | "Teman/Kolega"
    | "Iklan"
    | "Lainnya";
  phoneNumber?: string;
  birthDate?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface PurchasedTicket {
  id: string;
  eventId: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  ticketCode: string;
  ticketType: "regular" | "bundling";
  ticketTypeName: string;
  holderName: string;
  purchaseDate: string;
  status: "active" | "used" | "pending" | "expired";
  qrCode?: string;
  price: number;
}

export type TicketStatus = "active" | "used" | "pending" | "expired";
