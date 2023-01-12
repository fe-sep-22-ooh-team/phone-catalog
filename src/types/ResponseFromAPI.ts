import { Phone } from './Phone';

export interface Next {
  page: number;
  limit: number;
}

export interface ResponseFromAPIAll {
  next: Next;
  results: Phone[];
  totalPages: number;
  currentPage: number;
}

export interface ResponseFromAPIOne {
  next: Next;
  results: Phone[];
  totalPages: number;
  currentPage: number;
}
