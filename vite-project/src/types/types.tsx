export interface ICard {
  id: string;
  name: string;
  photo: string;
  date: string;
  breed: string;
  description: string;
  sex: string;
  pedigree: string;
}
export interface CardsPropsType {
  cats: ICard[];
}
