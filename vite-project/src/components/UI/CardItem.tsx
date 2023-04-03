import React from 'react';

import { CREATED, GENDER, LOCATION, SPECIES, STATUS } from '../../constants/constants';
import { ICardAPI } from '../../types/types';

const CardItem = (card: ICardAPI) => {
  return (
    <li className="card-item__container" data-testid="card-item__container">
      <div className="card-item__header">
        <h2 className="card-item__title">{card.name}</h2>
      </div>
      <div className="card-item__content">
        <div className="card-photo__container">
          <img className="card-photo" src={card.image} alt="img" />
        </div>
        <div className="card-description">
          <p className="card-description__item">
            <span className="description-item__span">{SPECIES}</span> {card.species}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{STATUS}</span> {card.status}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{CREATED}</span> {card.created}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{GENDER} </span> {card.gender}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{LOCATION}</span> {card.location.name}
          </p>
        </div>
      </div>
    </li>
  );
};
export default CardItem;
