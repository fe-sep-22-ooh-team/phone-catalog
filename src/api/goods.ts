import { ResponseFromAPI } from '../types/ResponseFromAPI';
import { client } from '../utils/fetchClient';

export const getPhones = (page: number, perPage: number, sortBy: string) => {
  return client.get<ResponseFromAPI>(
    `?page=${page}&limit=${perPage}&sortBy=${sortBy}`,
  );
};

export const getAll = () => {
  return client.get<ResponseFromAPI>('');
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
