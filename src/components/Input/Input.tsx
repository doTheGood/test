import React, { ReactElement } from 'react';

import { InputBase, InputBaseProps, Omit } from '@material-ui/core';

import './Input.scss';

import { Button } from '../Button';
import { IndeterminateCircle } from '../IndeterminateCircle';
import { SvgIcon } from '../SvgIcon';

type InputMuiProps = Omit<
  InputBaseProps,
  'color' | 'classes' | 'startAdornment' | 'endAdornment' | 'value'
>;

type InputCustomProps = {
  actionButton?: ReactElement;
  explanatoryIcon?: ReactElement;
  loading?: boolean;
  value?: string;
};

export type InputProps = InputMuiProps & InputCustomProps;

export const Input = React.forwardRef(
  ({ actionButton, explanatoryIcon, loading, ...props }: InputProps, ref) => {
    const renderActionButton = () => {
      if (loading) {
        return (
          <Button
            disabled
            variant="ghost"
            size="small"
            icon={<IndeterminateCircle />}
          />
        );
      }

      return actionButton;
    };

    return (
      <InputBase
        ref={ref}
        startAdornment={
          explanatoryIcon && (
            <span className="input__explanatory-icon">
              <SvgIcon>{explanatoryIcon}</SvgIcon>
            </span>
          )
        }
        endAdornment={
          <span className="input__action-button">{renderActionButton()}</span>
        }
        classes={{
          root: 'input',
          input: 'input__input',
          disabled: 'input_disabled',
          focused: 'input_focused',
          error: 'input_error',
          multiline: 'input_multiline',
          adornedStart: 'input_adorned_start',
          adornedEnd: 'input_adorned_end',
        }}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
