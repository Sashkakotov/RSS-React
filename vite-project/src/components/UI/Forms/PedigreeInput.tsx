import { PEDIGREE } from '../../../constants/constants';
import React from 'react';

const PedigreeInput = (props: {
  reg: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  return (
    <div>
      <label htmlFor="form-checkbox">{PEDIGREE} </label>
      <input type="checkbox" id="form-checkbox" {...props.reg} />
    </div>
  );
};
export default PedigreeInput;
