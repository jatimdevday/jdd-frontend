import { IBase } from "./base";
import { IForm } from "./form";
import { ITicket } from "./ticket";

export type TEvent = {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  images: string[];
  venue_name: string;
  venue_address: string;
  created_at: string;
  updated_at: string;
  forms: IForm[];
  tickets: ITicket[];
};

// For backward compatibility and to fix type issues
export interface TicketHolder {
  id: string;
  fullName: string;
  email: string;
  community?: string;
  occupation?: string;
  institution?: string;
  interests?: string;
  informationSource?: string;
  phoneNumber?: string;
  birthDate?: string;
  [key: string]: any; // For dynamic form fields
}

export type TEvents = Omit<TEvent, "forms" | "tickets">;
