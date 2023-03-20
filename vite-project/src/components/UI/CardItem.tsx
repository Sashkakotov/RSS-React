import React, { Component } from 'react';

import { BREED, DESCRIPTION } from '../../constants/constants';
import { ICard } from '../../types/types';

class CardItem extends Component<ICard> {
  render() {
    return (
      <li className="card-item__container" data-testid="card-item__container">
        <div className="card-item__header">
          <h2 className="card-item__title">{this.props.name}</h2>
        </div>
        <div className="card-item__content">
          <div className="card-photo__container">
            <img className="card-photo" src={this.props.photo} alt="img" />
          </div>
          <div className="card-description">
            <p className="card-description__item">
              <span className="description-item__span">{BREED}</span>: {this.props.breed}
            </p>
            <p className="card-description__item">
              <span className="description-item__span">{DESCRIPTION}</span>:{' '}
              {this.props.description}
            </p>
          </div>
        </div>
      </li>
    );
  }
}
export default CardItem;
