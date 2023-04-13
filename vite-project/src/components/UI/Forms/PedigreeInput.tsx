import { ALIVE } from '../../../constants/constants';
import React from 'react';

const AliveInput = (props: {
  reg: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  return (
    <div>
      <label htmlFor="form-checkbox">{ALIVE} </label>
      <input type="checkbox" id="form-checkbox" {...props.reg} />
    </div>
  );
};
export default AliveInput;
