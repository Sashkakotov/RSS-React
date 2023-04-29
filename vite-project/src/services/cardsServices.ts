import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICardAPI } from '../types/types';

export interface Build {
  info: unknown;
  results: ICardAPI[];
}

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character/',
  }),
  endpoints: (build) => ({
    fetchAllCards: build.query<Build, string>({
      // query: (search) => ({
      //   url: `?name=${search}`,
      // }),
      queryFn: async (search) => {
        try {
          const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`);
          console.log(response);
          if (response.status !== 200) {
            console.log({ ...(await response.json()) }.error);

            throw { ...(await response.json()) }.error;
          }
          return { data: await response.json() };
        } catch (e) {
          return { error: { status: 404, data: 'Server Error' } };
        }
      },
    }),
  }),
});
export const { useFetchAllCardsQuery } = cardsAPI;
