export interface ICard {
  id: string;
  name: string;
  breed: string;
  description: string;
  photo: string;
}
export interface CardsPropsType {
  cats: ICard[];
}
