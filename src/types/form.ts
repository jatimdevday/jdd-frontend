export interface IForm {
  id: string;
  event_id: string;
  label: string;
  datatype: string;
  options: string[] | null;
  created_at: string | null;
  updated_at: string | null;
}
