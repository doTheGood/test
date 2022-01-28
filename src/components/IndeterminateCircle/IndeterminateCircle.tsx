import React from 'react';

import clsx from 'clsx';

import './IndeterminateCircle.scss';

import { SvgIcon } from '../SvgIcon';

export interface IndeterminateCircleParams {
  className?: string;
}

export const IndeterminateCircle: React.FC<IndeterminateCircleParams> = ({
  className,
}) => {
  const rootCN = clsx('indeterminate-circle', className);

  return (
    <SvgIcon className={rootCN}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" />
      </svg>
    </SvgIcon>
  );
};
