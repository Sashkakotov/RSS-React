import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICardAPI } from 'types/types';

interface CardsState {
  cards: ICardAPI[];
  isLoading: boolean;
  error: string;
}

const initialState: CardsState = {
  cards: [],
  isLoading: false,
  error: '',
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    cardsFetching(state) {
      state.isLoading = true;
    },
    cardsFetchingSuccess(state, action: PayloadAction<ICardAPI[]>) {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload;
    },
    cardsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default cardSlice.reducer;
