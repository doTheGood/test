import React, { ReactText } from 'react';

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';
import clsx from 'clsx';

import './Chip.scss';

export type ChipVariant = 'picked' | 'suggested' | 'selected';

export interface ChipProps {
  variant: ChipVariant;
  label: string;
  badge?: ReactText;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  classes?: {
    label?: string;
    badge?: string;
    button?: string;
  };
}

export const Chip: React.FC<ChipProps> = ({
  variant,
  label,
  badge,
  disabled,
  onClick,
  className,
  classes,
}) => {
  const rootCN = clsx(
    'chip',
    `chip_variant_${variant}`,
    { chip_disabled: disabled },
    className,
  );
  const labelCN = clsx('chip__label', classes?.label);
  const badgeCN = clsx('chip__badge', classes?.badge);
  const buttonCN = clsx('chip__button', classes?.button);

  const getIcon = () => {
    switch (variant) {
      case 'picked':
        return <CloseIcon />;
      case 'suggested':
        return <AddIcon />;
      case 'selected':
        return <RemoveIcon />;
    }
  };

  return (
    <div className={rootCN}>
      <span className={labelCN}>{label}</span>
      {badge !== undefined && <span className={badgeCN}>{badge}</span>}
      <button type="button" className={buttonCN} onClick={onClick}>
        {getIcon()}
      </button>
    </div>
  );
};
