import { Phone } from './Phone';

export interface Next {
  page: number,
  limit: number,
}

export interface ResponseFromAPI {
  next: Next;
  results: Phone[];
  totalPages: number;
  currentPage: number;
}
