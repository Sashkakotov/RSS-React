import React from 'react';

import CardItem from './CardItem';
import { ICardAPI } from '../../types/types';

const CardList = (props: { cards: ICardAPI[] }) => {
  return (
    <ul className="cards__list">
      {props.cards.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </ul>
  );
};
export default CardList;
