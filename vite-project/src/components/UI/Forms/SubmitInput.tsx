import React from 'react';

const SubmitInput = (props: {
  reg: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  return (
    <input type="submit" value="Create Card" {...props.reg} data-testid="forms-submit__input" />
  );
};
export default SubmitInput;
