import React from 'react';

import clsx from 'clsx';

import styles from './Button.module.scss';

type AnchorElementProps = JSX.IntrinsicElements['a'];
type ButtonElementProps = JSX.IntrinsicElements['button'];

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'ghost-white';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonIconPosition = 'start' | 'end';

export interface ButtonBasicProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
  icon?: React.ReactElement;
  iconPosition?: ButtonIconPosition;
  disabled?: boolean;
  className?: string;
  classes?: {
    icon?: string;
    label?: string;
  };
}

export interface ButtonDefaultProps
  extends ButtonBasicProps,
    Omit<ButtonElementProps, 'color'> {
  component?: 'button';
}

export interface ButtonLinkProps
  extends ButtonBasicProps,
    Omit<AnchorElementProps, 'color'> {
  component?: 'a';
}

export type ButtonProps = ButtonDefaultProps | ButtonLinkProps;
export type ButtonComponent = React.FC<ButtonProps>;

export const Button: ButtonComponent = ({
  component = 'button',
  variant = 'primary',
  size = 'medium',
  label,
  icon,
  iconPosition = 'start',
  disabled = false,
  className,
  classes,
  children,
  ...props
}) => {
  const hasLabel = !!label;
  const hasIcon = !!icon;

  const rootCN = clsx(
    styles['button'],
    styles[`button_variant_${variant}`],
    styles[`button_size_${size}`],
    {
      [styles['button_disabled']]: disabled,
      [styles['button_content_label']]: hasLabel && !hasIcon,
      [styles['button_content_icon']]: !hasLabel && hasIcon,
      [styles['button_content_label-icon']]: hasLabel && hasIcon,
      [styles['button_icon-position_start']]: iconPosition === 'start',
      [styles['button_icon-position_end']]: iconPosition === 'end',
    },
    className,
  );

  const iconCN = clsx(styles['button__icon'], classes?.icon);
  const labelCN = clsx(styles['button__label'], classes?.label);

  const getContent = () => (
    <>
      {icon && iconPosition === 'start' && (
        <span className={iconCN}>{icon}</span>
      )}
      {label && <span className={labelCN}>{label}</span>}
      {icon && iconPosition === 'end' && <span className={iconCN}>{icon}</span>}
      {children}
    </>
  );

  const getButton = () => {
    const { type = 'button', ...buttonProps } = props as ButtonElementProps;
    return (
      <button
        className={rootCN}
        disabled={disabled}
        type={type}
        {...buttonProps}
      >
        {getContent()}
      </button>
    );
  };

  const getAnchor = () => {
    const { href, target, ...anchorProps } = props as AnchorElementProps;
    return (
      <a
        href={disabled ? undefined : href}
        className={rootCN}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        target={target}
        {...anchorProps}
      >
        {getContent()}
      </a>
    );
  };

  switch (component) {
    case 'button':
      return getButton();
    case 'a':
      return getAnchor();
  }
};
