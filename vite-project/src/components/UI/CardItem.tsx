import React, { Component } from 'react';
import { productItems } from '../../API/fakeJSON';
import { IProduct } from '../../data/types';

class CardItem extends Component<IProduct> {
  render() {
    return (
      <li className="card-item__container">
        <div className="card-item__header">
          <h2 className="card-item__title">{this.props.title}</h2>
        </div>
        <div className="card-item__content">
          <div className="card-photo__container">
            <img className="card-photo" src={this.props.thumbnail} alt="img" />
          </div>
          <div className="card-description">
            <p className="card-description__item">category: {this.props.category}</p>
            <p className="card-description__item">brand: {this.props.brand}</p>
            <p className="card-description__item">price: {this.props.price}</p>
            <p className="card-description__item">rating: {this.props.rating}</p>
            <p className="card-description__item">discount: {this.props.discountPercentage}</p>
            <p className="card-description__item">stock: {this.props.stock}</p>
          </div>
        </div>
      </li>
    );
  }
}
export default CardItem;
