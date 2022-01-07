import React from 'react';

import SwitchBase, {
  SwitchBaseProps,
} from '@material-ui/core/internal/SwitchBase';
import clsx from 'clsx';

import './Checkbox.scss';

export interface CheckboxProps {
  checked?: SwitchBaseProps['checked'];
  disabled?: SwitchBaseProps['disabled'];
  id?: SwitchBaseProps['id'];
  inputProps?: SwitchBaseProps['inputProps'];
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: SwitchBaseProps['onChange'];
  required?: SwitchBaseProps['required'];
  value?: SwitchBaseProps['value'];
  className?: string;
}

const CheckboxIcon = ({ checked = false }: { checked?: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="checkbox__icon-bg"
        x="2.5"
        y="2.5"
        width="15"
        height="15"
        rx="1.5"
      />
      {checked && (
        <path
          className="checkbox__icon-check"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5303 7.46967C13.8232 7.76256 13.8232 8.23744 13.5303 8.53033L9 13.0607L6.46967 10.5303C6.17678 10.2374 6.17678 9.76256 6.46967 9.46967C6.76256 9.17678 7.23744 9.17678 7.53033 9.46967L9 10.9393L12.4697 7.46967C12.7626 7.17678 13.2374 7.17678 13.5303 7.46967Z"
        />
      )}
    </svg>
  );
};

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, ref) => {
    const { ...other } = props;
    const rootCN = clsx('checkbox');

    return (
      <SwitchBase
        disableRipple
        disableFocusRipple
        disableTouchRipple
        ref={ref}
        type="checkbox"
        classes={{
          root: rootCN,
          disabled: 'checkbox_disabled',
          checked: 'checkbox_checked',
        }}
        icon={<CheckboxIcon />}
        checkedIcon={<CheckboxIcon checked />}
        focusVisibleClassName="checkbox_focused"
        {...other}
      />
    );
  },
);
Checkbox.displayName = 'Checkbox';
