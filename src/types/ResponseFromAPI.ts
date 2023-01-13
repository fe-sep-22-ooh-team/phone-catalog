import { Phone } from './Phone';
import { RarePhone } from './RareDataPhone';

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
  phoneInfo: RarePhone;
  phones: Phone[];
}
