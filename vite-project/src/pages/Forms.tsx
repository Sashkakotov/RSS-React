import CardItem from '../components/UI/CardItem';
import React, { Component, RefObject, SyntheticEvent } from 'react';
import { ICard } from '../types/types';
import BREEDS__LIST from '../API/breeds';
import catsData from '../API/data';

interface IFormConstructor {
  confirm: boolean;
  cardsArray: ICard[];
  nameValidation: boolean;
  photoValidation: boolean;
  dateValidation: boolean;
  breedValidation: boolean;
  descriptionValidation: boolean;
  sexValidation: boolean;
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
  form: RefObject<HTMLFormElement>;

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
    this.form = React.createRef();
    this.state = {
      confirm: false,
      cardsArray: [],
      nameValidation: true,
      photoValidation: true,
      dateValidation: true,
      breedValidation: true,
      descriptionValidation: true,
      sexValidation: true,
    };
  }

  textCheckValidation = () => {
    if (this.name.current?.value[0] && this.name.current?.value[0].match(/[A-Z]/)) {
      this.setState((prev) => ({ ...prev, nameValidation: true }));
    } else {
      this.setState((prev) => ({ ...prev, nameValidation: false }));
    }
  };

  photoCheckValidation = () => {
    if (this.photo.current?.files![0]) {
      this.setState((prev) => ({ ...prev, photoValidation: true }));
    } else {
      this.setState((prev) => ({ ...prev, photoValidation: false }));
    }
  };

  dateCheckValidation = () => {
    const dateNow = Date.now();
    if (dateNow && dateNow >= this.date.current!.valueAsNumber) {
      this.setState((prev) => ({ ...prev, dateValidation: true }));
    } else {
      this.setState((prev) => ({ ...prev, dateValidation: false }));
    }
  };

  breedCheckValidation = () => {
    if (this.breed.current?.value !== 'Select breed') {
      this.setState((prev) => ({ ...prev, breedValidation: true }));
    } else {
      this.setState((prev) => ({ ...prev, breedValidation: false }));
    }
  };

  descriptionCheckValidation = () => {
    if (this.description.current?.value[0] && this.description.current?.value[0].match(/[A-Z]/)) {
      this.setState((prev) => ({ ...prev, descriptionValidation: true }));
    } else {
      this.setState((prev) => ({ ...prev, descriptionValidation: false }));
    }
  };

  sexCheckValidation = () => {
    if (this.sexFemale.current?.checked || this.sexMale.current?.checked) {
      this.setState((prev) => ({ ...prev, sexValidation: true }));
    } else {
      this.setState((prev) => ({ ...prev, sexValidation: false }));
    }
  };

  resetForms = () => {
    this.form.current?.reset();
  };

  showMessage = () => {
    this.setState({ confirm: true });
    setTimeout(() => {
      this.setState({ confirm: false });
      this.handleSubmit();
      this.resetForms();
    }, 3000);
  };
  checkValidation = (event: SyntheticEvent) => {
    this.textCheckValidation();
    this.photoCheckValidation();
    this.dateCheckValidation();
    this.breedCheckValidation();
    this.descriptionCheckValidation();
    this.sexCheckValidation();
    setTimeout(() => {
      if (
        this.state.photoValidation &&
        this.state.nameValidation &&
        this.state.dateValidation &&
        this.state.breedValidation &&
        this.state.descriptionValidation &&
        this.state.sexValidation
      ) {
        this.showMessage();
      }
    }, 0);
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
  };

  render() {
    return (
      <main className="main">
        <div className={this.state.confirm ? 'showConfirmMessage' : 'hide'}>
          Card has been created
        </div>
        <form className="forms__form" onSubmit={this.checkValidation} ref={this.form}>
          <h2 className="forms__title">Card constructor</h2>
          <div>
            <label htmlFor="form-name">Name: </label>
            <input type="text" id="form-name" ref={this.name} />
            {this.state.nameValidation || (
              <div className="forms-error__message">Text must start with a capital letter</div>
            )}
          </div>
          <div>
            <label htmlFor="form-image">Photo: </label>
            <input type="file" id="form-image" accept="image/*" ref={this.photo} />
            {this.state.photoValidation || (
              <div className="forms-error__message">Please select photo</div>
            )}
          </div>
          <div>
            <label htmlFor="form-date">Date of Birth: </label>
            <input type="date" id="form-date" ref={this.date} />
            {this.state.dateValidation || (
              <div className="forms-error__message">
                The date selected should be less than the current date
              </div>
            )}
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
            {this.state.breedValidation || (
              <div className="forms-error__message">Please select gender</div>
            )}
          </div>

          <div>
            <label htmlFor="form-description">Description: </label>
            <textarea id="form-description" ref={this.description} />
            {this.state.descriptionValidation || (
              <div className="forms-error__message">Text must start with a capital letter</div>
            )}
          </div>

          <div>
            <label htmlFor="form-radio">Gender: </label>
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
            {this.state.sexValidation || (
              <div className="forms-error__message">Please select gender</div>
            )}
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
