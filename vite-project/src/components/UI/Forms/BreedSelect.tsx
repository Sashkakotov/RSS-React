import BREEDS__LIST from '../../../API/breeds';
import React from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { BREED, VALIDATION_BREED } from '../../../constants/constants';

const BreedSelect = (props: {
  reg: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLSelectElement> &
    React.SelectHTMLAttributes<HTMLSelectElement>;
  err: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
}) => {
  return (
    <div>
      <label htmlFor="form-date">{BREED} </label>
      <select {...props.reg}>
        {BREEDS__LIST.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      {{ ...props.err } && <div className="forms-error__message">{VALIDATION_BREED}</div>}
    </div>
  );
};
export default BreedSelect;
