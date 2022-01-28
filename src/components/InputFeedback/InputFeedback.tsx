import React from 'react';

import ErrorIcon from '@material-ui/icons/Error';
import clsx from 'clsx';

import './InputFeedback.scss';

export interface InputFeedbackProps {
  text: string;
  type?: 'help' | 'error';
  visible?: boolean;
  className?: string;
}

export const InputFeedback: React.FC<InputFeedbackProps> = ({
  text,
  type = 'help',
  visible = true,
  className,
}) => {
  const rootCN = clsx(
    'input-feedback',
    { 'input-feedback_invisible': !visible },
    { 'input-feedback_type_help': type === 'help' },
    { 'input-feedback_type_error': type === 'error' },
    className,
  );
  return (
    <div className={rootCN}>
      <ErrorIcon className="input-feedback__icon" /> {text}
    </div>
  );
};
