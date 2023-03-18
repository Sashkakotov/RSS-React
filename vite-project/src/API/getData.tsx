export const getCats = async () => {
  try {
    const response = await fetch('../../src/data/data.json');
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};
