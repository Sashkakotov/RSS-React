import React, { SyntheticEvent } from 'react';
import { ICardAPI } from 'types/types';
import CardItem from '../CardItem';

const PopUpCard = (props: { card: ICardAPI; onClose: (e: SyntheticEvent) => void }) => {
  return (
    <div style={{ position: 'absolute' }}>
      <div className="pop-up" onClick={props.onClose}></div>
      <CardItem card={props.card} isModal={true} />
      <div className="close__button" onClick={props.onClose}></div>
    </div>
  );
};
export default PopUpCard;
