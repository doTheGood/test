import React from 'react';

import clsx from 'clsx';

import './InputLabel.scss';

export interface InputLabelProps {
  text: string;
  htmlFor?: string;
  required?: boolean;
  className?: string;
}

export const InputLabel: React.FC<InputLabelProps> = ({
  text,
  htmlFor,
  required,
  className,
}) => {
  const rootCN = clsx(
    'input-label',
    { 'input-label_required': required },
    className,
  );
  return (
    <label htmlFor={htmlFor} className={rootCN}>
      {text}
    </label>
  );
};
