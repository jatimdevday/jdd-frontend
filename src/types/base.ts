export interface IBase<T> {
  message: string;
  data: T;
  pagination: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  };
}
