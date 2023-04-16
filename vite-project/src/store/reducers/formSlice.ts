import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardAPI } from 'types/types';

interface FormState {
  formCards: ICardAPI[];
}

const initialState: FormState = {
  formCards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    formState(state, action: PayloadAction<ICardAPI[]>) {
      state.formCards = action.payload;
    },
  },
});
export default formSlice.reducer;
