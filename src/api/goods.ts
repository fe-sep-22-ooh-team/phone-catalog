import { Phone } from '../types/Phone';
import { client } from '../utils/fetchClient';

export const getPhones = (page: number, perPage: number) => {
  return client.get<Phone[]>(`/:${page}:${perPage}`);
};

// export const addPhone = (phone: Omit<phone, 'id'>) => {
//   return client.post('/phones', phone);
// };

// export const changePhone = (phoneId: number, phone: phone) => {
//   return client.patch(`/phones/${phoneId}`, phone);
// };

// export const deletePhone = (phoneId: number) => {
//   return client.delete(`/phones/${phoneId}`);
// };
