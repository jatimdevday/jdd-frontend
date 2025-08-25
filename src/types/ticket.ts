export interface ITicket {
  id: string;
  event_id: string;
  name: string;
  price: string;
  quota: number;
  start_date: string;
  end_date: string;
  created_at: string | null;
  updated_at: string | null;
  sold: number;
}
