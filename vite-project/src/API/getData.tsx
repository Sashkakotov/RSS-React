import catsData from './data.js';

const getCats = () => {
  try {
    const result = catsData.cats;
    return result;
  } catch (e) {
    console.log(e);
  }
};
export default getCats;
