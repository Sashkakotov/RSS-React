import React from 'react';
import { LOCATION, VALIDATION_TEXT } from '../../../constants/constants';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

const LocationInput = (props: {
  reg: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLTextAreaElement> &
    React.InputHTMLAttributes<HTMLTextAreaElement>;
  err: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
}) => {
  return (
    <div>
      <label htmlFor="form-description">{LOCATION}</label>
      <textarea id="form-description" {...props.reg} />
      {props.err && <div className="forms-error__message">{VALIDATION_TEXT}</div>}
    </div>
  );
};
export default LocationInput;
