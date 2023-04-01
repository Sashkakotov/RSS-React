import React from 'react';
import CardItem from '../CardItem';

const PopUpCard = (props) => {
  return (
    <div className="pop-up">
      <CardItem {...props.card} />
    </div>
  );
};
export default PopUpCard;
