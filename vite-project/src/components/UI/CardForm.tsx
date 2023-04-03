import React from 'react';

import { BREED, DATE_OF_BIRTH, DESCRIPTION, GENDER, PEDIGREE } from '../../constants/constants';
import { ICard } from '../../types/types';

const CardFromForm = (card: ICard) => {
  return (
    <li className="card-item__container" data-testid="card-item__container">
      <div className="card-item__header">
        <h2 className="card-item__title">{card.name}</h2>
      </div>
      <div className="card-item__content">
        <div className="card-photo__container">
          <img className="card-photo" src={card.photo} alt="img" />
        </div>
        <div className="card-description">
          <p className="card-description__item">
            <span className="description-item__span">{BREED}</span> {card.breed}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{DESCRIPTION}</span> {card.description}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{DATE_OF_BIRTH} </span> {card.date}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{GENDER} </span> {card.sex}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{PEDIGREE} </span> {card.pedigree}
          </p>
        </div>
      </div>
    </li>
  );
};
export default CardFromForm;
