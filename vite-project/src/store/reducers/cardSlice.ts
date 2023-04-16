import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardsState } from 'types/types';

const initialState: CardsState = {
  searchInputValue: '',
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setSearchInputValue(state, action: PayloadAction<string>) {
      state.searchInputValue = action.payload;
    },
  },
});

export default cardSlice.reducer;
