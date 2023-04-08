import { AppDispatch } from 'store/store';
import { cardSlice } from './cardSlice';

const fetchCards = (search: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(cardSlice.actions.cardsFetching());
    const url = `https://rickandmortyapi.com/api/character/?name=${search}`;
    const response = await fetch(url);
    if (response.status !== 200) {
      throw { ...(await response.json()) }.error;
    }
    const result = await response.json();
    dispatch(cardSlice.actions.cardsFetchingSuccess(result.results));
    return;
  } catch (e) {
    dispatch(cardSlice.actions.cardsFetchingError(String(e)));
  }
};
export default fetchCards;
