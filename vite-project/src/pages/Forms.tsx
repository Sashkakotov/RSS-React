import React, { Component } from 'react';
import BREEDS__LIST from '../API/breeds';

class Forms extends Component {
  render() {
    return (
      <main className="main">
        <form className="forms__form">
          <h2 className="forms__title">Card constructor</h2>
          <div>
            <label htmlFor="form-name">Name: </label>
            <input type="text" id="form-name" />
          </div>
          <div>
            <label htmlFor="form-image">Photo: </label>
            <input type="file" id="form-image" accept="image/*" />
          </div>
          <div>
            <label htmlFor="form-date">Date of Birth: </label>
            <input type="date" id="form-date" />
          </div>
          <div>
            <label htmlFor="form-date">Breed: </label>
            <select>
              {BREEDS__LIST.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="form-description">Description: </label>
            <input type="text" id="form-description" />
          </div>
          <div>
            <label htmlFor="form-radio__container">Sex: </label>
            <input type="radio" id="form-radio__male" name="sex" value="Male" />
            <label htmlFor="form-radio__male">Male</label>
            <input type="radio" id="form-radio__female" name="sex" value="Female" />
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
