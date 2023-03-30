import React from 'react';
import { CARD_CREATED } from '../../../constants/constants';

const PopUp = () => {
  return (
    <div className="pop-up">
      <div className="pop-up__message">{CARD_CREATED}</div>
    </div>
  );
};
export default PopUp;
