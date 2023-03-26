import React, { Component } from 'react';

import CardItem from './CardItem';
import { CardsPropsType } from '../../types/types';

class CardList extends Component<CardsPropsType> {
  render() {
    return (
      <ul className="cards__list">
        {this.props.cats.map((card) => (
          <CardItem key={card.id} {...card} />
        ))}
      </ul>
    );
  }
}
export default CardList;
