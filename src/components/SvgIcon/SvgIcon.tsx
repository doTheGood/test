import React, { CSSProperties } from 'react';

export interface SvgIconProps {
  children: React.ReactElement;
  fontSize?: string;
  className?: string;
  nativeSize?: boolean;
  style?: CSSProperties;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
  fontSize,
  children,
  className,
  style,
  nativeSize,
}: SvgIconProps) => {
  return React.cloneElement(children, {
    fontSize,
    className,
    style,
    fill: 'currentColor',
    display: 'inline-block',
    ...(nativeSize
      ? {}
      : {
          width: '1em',
          height: '1em',
        }),
  });
};
