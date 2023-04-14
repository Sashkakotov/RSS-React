import React, { SyntheticEvent, useState } from 'react';
import { createPortal } from 'react-dom';

import { CREATED, GENDER, LOCATION, SPECIES, STATUS } from '../../constants/constants';
import { ICardAPI } from '../../types/types';
import PopUpCard from './PopUpCard/PopUpCard';

const CardItem = (props: { card: ICardAPI; isModal: boolean }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <li
      className="card-item__container"
      data-testid="card-item__container"
      style={props.isModal ? { position: 'fixed', left: '37%', top: '30%', zIndex: 10 } : {}}
    >
      {showModal &&
        createPortal(
          <PopUpCard
            card={props.card}
            onClose={(e: SyntheticEvent) => {
              e.stopPropagation();
              e.preventDefault();
              setShowModal(false);
            }}
          />,
          document.body
        )}

      <div className="card-item__header">
        <h2 className="card-item__title">{props.card.name}</h2>
      </div>
      <div className="card-item__content">
        <div className="card-photo__container">
          <img
            className="card-photo"
            data-testid="card-photo"
            src={props.card.image}
            alt="img"
            onClick={() => !props.isModal && setShowModal(true)}
            style={props.isModal ? { cursor: 'default' } : {}}
          />
        </div>
        <div className="card-description" style={props.isModal ? { display: 'flex' } : {}}>
          <p className="card-description__item">
            <span className="description-item__span">{SPECIES}</span> {props.card.species}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{STATUS}</span> {props.card.status}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{CREATED}</span> {props.card.created}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{GENDER} </span> {props.card.gender}
          </p>
          <p className="card-description__item">
            <span className="description-item__span">{LOCATION}</span> {props.card.location.name}
          </p>
        </div>
      </div>
    </li>
  );
};
export default CardItem;
