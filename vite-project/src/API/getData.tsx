import { ICard } from 'types/types.js';
import catsData from './data.js';

const getCats = () => {
  try {
    const result: ICard[] = catsData.cats;
    return result;
  } catch (e) {
    console.log(e);
  }
};
export default getCats;
