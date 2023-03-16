import React, { Component } from 'react';
import { productItems } from '../../API/fakeJSON';
import CardItem from './CardItem';

class CardList extends Component {
  render() {
    return (
      <ul className="cards__list">
        {productItems.products.map((product) => (
          <CardItem key={product.id} {...product} />
        ))}
      </ul>
    );
  }
}
export default CardList;
