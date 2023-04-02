import React from 'react';
import { PHOTO, VALIDATION_PHOTO } from '../../../constants/constants';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

const Photoinput = (props: {
  reg: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
  err: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
}) => {
  return (
    <div>
      <label htmlFor="form-image">{PHOTO}</label>
      <input type="file" id="form-image" accept="image/*" {...props.reg} />
      {props.err && <div className="forms-error__message">{VALIDATION_PHOTO}</div>}
    </div>
  );
};
export default Photoinput;
