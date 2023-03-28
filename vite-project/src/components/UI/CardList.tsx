import React from 'react';

import CardItem from './CardItem';
import { CardsPropsType } from '../../types/types';

const CardList = (cards: CardsPropsType) => {
  return (
    <ul className="cards__list">
      {cards.cats.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </ul>
  );
};
export default CardList;
