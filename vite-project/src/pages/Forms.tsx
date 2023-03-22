import React, { Component, RefObject, SyntheticEvent } from 'react';
import BREEDS__LIST from '../API/breeds';

type CardsArrayTypes = {
  name: string;
  image: string;
  date: string;
  breed: string;
  description: string;
  sex: string;
  pedigree: string;
};
interface IFormConstructor {
  confirm: boolean;
  cardsArray: CardsArrayTypes[];
}
class Forms extends Component<unknown, IFormConstructor> {
  name: RefObject<HTMLInputElement>;
  image: RefObject<HTMLInputElement>;
  date: RefObject<HTMLInputElement>;
  breed: RefObject<HTMLSelectElement>;
  description: RefObject<HTMLTextAreaElement>;
  sexMale: RefObject<HTMLInputElement>;
  sexFemale: RefObject<HTMLInputElement>;
  pedigree: RefObject<HTMLInputElement>;

  constructor(props: IFormConstructor) {
    super(props);
    this.name = React.createRef();
    this.image = React.createRef();
    this.date = React.createRef();
    this.breed = React.createRef();
    this.description = React.createRef();
    this.sexMale = React.createRef();
    this.sexFemale = React.createRef();
    this.pedigree = React.createRef();
    this.state = {
      confirm: false,
      cardsArray: [],
    };
  }

  handleSubmit = (event: SyntheticEvent) => {
    const inputsList = {
      name: this.name.current?.value,
      image: this.image.current?.value,
      date: this.date.current?.value,
      breed: this.breed.current?.value,
      description: this.description.current?.value,
      sex: this.sexMale.current?.checked
        ? this.sexMale.current?.value
        : this.sexFemale.current?.value,
      pedigree: this.pedigree.current?.checked ? 'Yes' : 'No',
    };

    console.log(inputsList);

    event.preventDefault();
  };
  render() {
    return (
      <main className="main">
        <form className="forms__form" onSubmit={this.handleSubmit}>
          <h2 className="forms__title">Card constructor</h2>
          <div>
            <label htmlFor="form-name">Name: </label>
            <input type="text" id="form-name" ref={this.name} />
          </div>
          <div>
            <label htmlFor="form-image">Photo: </label>
            <input type="file" id="form-image" accept="image/*" ref={this.image} />
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
            />
            <label htmlFor="form-radio__female">Female</label>
          </div>
          <div>
            <label htmlFor="form-checkbox">Pedigree: </label>
            <input type="checkbox" id="form-checkbox" />
          </div>
          <button type="submit">Create Card</button>
        </form>
      </main>
    );
  }
}
export default Forms;
