import React from 'react';

import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { DATE_OF_BIRTH, VALIDATION_DATE } from '../../../constants/constants';

const DateInput = (props: {
  reg: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
  err: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
}) => {
  return (
    <div>
      <label htmlFor="form-date">{DATE_OF_BIRTH}</label>
      <input type="date" id="form-date" {...props.reg} data-testid="forms-date__input" />
      {{ ...props.err } && <div className="forms-error__message">{VALIDATION_DATE}</div>}
    </div>
  );
};
export default DateInput;
