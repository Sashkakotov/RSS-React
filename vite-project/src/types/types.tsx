export interface ICard {
  id?: string;
  name?: string;
  photo?: string;
  date?: string;
  breed?: string;
  description?: string;
  sex?: string;
  pedigree?: string;
}
export interface CardsPropsType {
  cats: ICard[];
}

export interface IFormConstructor {
  confirm: boolean;
  cardsArray: ICard[];
  nameValidation: boolean;
  photoValidation: boolean;
  dateValidation: boolean;
  breedValidation: boolean;
  descriptionValidation: boolean;
  sexValidation: boolean;
}

export interface flickrResponse {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
}
