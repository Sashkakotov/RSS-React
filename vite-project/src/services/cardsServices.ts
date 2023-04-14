import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICardAPI } from '../types/types';

export interface Build {
  info: unknown;
  results: ICardAPI[];
}

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character',
  }),
  endpoints: (build) => ({
    fetchAllCards: build.query<Build, string>({
      query: (search) => ({
        url: `?name=${search}`,
      }),
    }),
  }),
});
