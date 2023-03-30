import React from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { NAME, VALIDATION_TEXT } from '../../../constants/constants';

const NameInput = (props: {
  reg: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
  err: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
}) => {
  return (
    <div>
      <label htmlFor="form-name">{NAME} </label>
      <input type="text" id="form-name" {...props.reg} data-testid="forms-name__input" />

      {props.err && <div className="forms-error__message">{VALIDATION_TEXT}</div>}
    </div>
  );
};
export default NameInput;
