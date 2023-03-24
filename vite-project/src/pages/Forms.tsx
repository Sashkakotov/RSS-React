import CardItem from '../components/UI/CardItem';
import React, { Component, RefObject, SyntheticEvent } from 'react';
import { ICard } from 'types/types';
import BREEDS__LIST from '../API/breeds';
import catsData from '../API/data';

interface IFormConstructor {
  confirm: boolean;
  cardsArray: ICard[];
  nameValidation: boolean;
  photoValidation: boolean;
  breedValidation: boolean;
  descriptionValidation: boolean;
}
class Forms extends Component<unknown, IFormConstructor> {
  name: RefObject<HTMLInputElement>;
  photo: RefObject<HTMLInputElement>;
  date: RefObject<HTMLInputElement>;
  breed: RefObject<HTMLSelectElement>;
  description: RefObject<HTMLTextAreaElement>;
  sexMale: RefObject<HTMLInputElement>;
  sexFemale: RefObject<HTMLInputElement>;
  pedigree: RefObject<HTMLInputElement>;
  submit: RefObject<HTMLInputElement>;

  constructor(props: IFormConstructor) {
    super(props);
    this.name = React.createRef();
    this.photo = React.createRef();
    this.date = React.createRef();
    this.breed = React.createRef();
    this.description = React.createRef();
    this.sexMale = React.createRef();
    this.sexFemale = React.createRef();
    this.pedigree = React.createRef();
    this.submit = React.createRef();
    this.state = {
      confirm: false,
      cardsArray: [],
      nameValidation: false,
      photoValidation: false,
      breedValidation: false,
      descriptionValidation: false,
    };
  }

  nameCheckValidation = () => {
    if (this.name.current?.value[0] && this.name.current?.value[0].match(/[A-Z]/)) {
      console.log(this.name.current?.value[0], 'sadsad');

      this.setState({ nameValidation: true });
    } else {
      console.log(this.name.current?.value[0], 'sadsadfalse');
      this.setState({ nameValidation: false });
    }
  };

  photoCheckValidation = () => {
    if (this.photo) {
      this.setState({ photoValidation: true });
    } else {
      this.setState({ photoValidation: false });
    }
  };

  checkValidation = (event: SyntheticEvent) => {
    this.nameCheckValidation();
    this.photoCheckValidation();
    if (this.state.photoValidation && this.state.nameValidation) {
      this.handleSubmit();
    } else {
      console.log('no validation');
    }
    event.preventDefault();
  };
  handleSubmit = () => {
    const inputsList: ICard = {
      id: String(catsData.cats.length + 1 + this.state.cardsArray.length),
      name: String(this.name.current?.value),
      photo: URL.createObjectURL(this.photo.current?.files![0] as Blob | MediaSource),
      date: String(this.date.current?.value),
      breed: String(this.breed.current?.value),
      description: String(this.description.current?.value),
      sex: this.sexMale.current?.checked
        ? String(this.sexMale.current?.value)
        : String(this.sexFemale.current?.value),
      pedigree: this.pedigree.current?.checked ? 'Yes' : 'No',
    };

    this.state.cardsArray.push(inputsList) as unknown as ICard[];
    this.setState({ cardsArray: this.state.cardsArray });

    console.log('inputsList', inputsList);
    console.log('this.state.cardsArray', this.state.cardsArray);
    console.log(this.state);
  };

  render() {
    return (
      <main className="main">
        <form className="forms__form" onSubmit={this.checkValidation}>
          <h2 className="forms__title">Card constructor</h2>
          <div>
            <label htmlFor="form-name">Name: </label>
            <input type="text" id="form-name" ref={this.name} />
          </div>
          <div>
            <label htmlFor="form-image">Photo: </label>
            <input type="file" id="form-image" accept="image/*" ref={this.photo} />
          </div>
          <div>
            <label htmlFor="form-date">Date of Birth: </label>
            <input type="date" id="form-date" ref={this.date} />
          </div>
          <div>
            <label htmlFor="form-date">Breed: </label>
            <select ref={this.breed}>
              {BREEDS__LIST.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="form-description">Description: </label>
            <textarea id="form-description" ref={this.description} />
          </div>

          <div>
            <label htmlFor="form-radio">Sex: </label>
            <input type="radio" id="form-radio__male" name="sex" value="Male" ref={this.sexMale} />
            <label htmlFor="form-radio__male">Male</label>
            <input
              type="radio"
              id="form-radio__female"
              name="sex"
              value="Female"
              ref={this.sexFemale}
              defaultChecked
            />
            <label htmlFor="form-radio__female">Female</label>
          </div>
          <div>
            <label htmlFor="form-checkbox">Pedigree: </label>
            <input type="checkbox" id="form-checkbox" />
          </div>
          <input type="submit" value="Create Card" ref={this.submit} />
        </form>
        <ul className="cards__list">
          {this.state.cardsArray.map((card) => (
            <CardItem key={card.id} {...card} />
          ))}
        </ul>
      </main>
    );
  }
}
export default Forms;
