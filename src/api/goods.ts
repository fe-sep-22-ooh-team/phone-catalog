import { Phone } from '../types/Phone';
import {
  ResponseFromAPIAll,
  ResponseFromAPIOne,
} from '../types/ResponseFromAPI';
import { client } from '../utils/fetchClient';

export const getPhones = (page: number, perPage: number, sortBy: string) => {
  return client.get<ResponseFromAPIAll>(
    `?page=${page}&limit=${perPage}&sortBy=${sortBy}`,
  );
};

export const getAll = () => {
  return client.get<ResponseFromAPIAll>('');
};

export const getNew = () => {
  return client.get<Phone[]>('getNew');
};

export const getDiscounted = () => {
  return client.get<Phone[]>('getDiscounted');
};

export const getById = (slug: string) => {
  return client.get<ResponseFromAPIOne>(slug);
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
