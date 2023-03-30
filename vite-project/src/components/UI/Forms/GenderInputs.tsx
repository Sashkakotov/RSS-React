import React from 'react';
import { FEMALE, GENDER, MALE, VALIDATION_GENDER } from '../../../constants/constants';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

const GendersInput = (props: {
  reg: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
  err: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
}) => {
  return (
    <div>
      <label htmlFor="form-radio">{GENDER} </label>
      <input
        type="radio"
        id="form-radio__male"
        value="Male"
        // {...register('sex', { required: true })}
        {...props.reg}
      />
      <label htmlFor="form-radio__male">{MALE}</label>
      <input type="radio" id="form-radio__female" value="Female" {...props.reg} />
      <label htmlFor="form-radio__female">{FEMALE}</label>
      {props.err && <div className="forms-error__message">{VALIDATION_GENDER}</div>}
    </div>
  );
};
export default GendersInput;
