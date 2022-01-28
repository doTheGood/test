import React from 'react';

import { Meta } from '@storybook/react';
import _ from 'lodash';

import { Button } from '../Button';
import { Chip, ChipVariant } from './Chip';

export default {
  title: 'Components/Chip',
  component: Button,
  parameters: {
    options: { showPanel: true },
  },
} as Meta;

const OverviewVariant = ({ variant }: { variant: ChipVariant }) => {
  return (
    <>
      <span>{_.startCase(variant)}</span>
      <Chip variant={variant} label="Label" badge={12} />
      <Chip
        variant={variant}
        label="Label"
        badge={12}
        classes={{ button: ':hover' }}
      />
      <Chip
        variant={variant}
        label="Label"
        badge={12}
        classes={{ button: ':focus-visible' }}
      />
      <Chip variant={variant} label="Label" badge={12} disabled={true} />
      <Chip
        variant={variant}
        label="Label"
        badge={12}
        classes={{ button: ':active' }}
      />
    </>
  );
};

export const Overview = () => {
  return (
    <div
      className="tag-grid tag-gap-5 tag-grid-flow-rows tag-auto-cols-min tag-items-center tag-justify-items-center"
      style={{ gridTemplateColumns: 'repeat(6, min-content)' }}
    >
      <span />
      <span className="text-subtitle-1">Default</span>
      <span className="text-subtitle-1">Hovered</span>
      <span className="text-subtitle-1">Focused</span>
      <span className="text-subtitle-1">Disabled</span>
      <span className="text-subtitle-1">Active</span>
      <OverviewVariant variant="picked" />
      <OverviewVariant variant="suggested" />
      <OverviewVariant variant="selected" />
    </div>
  );
};
Overview.parameters = {
  options: { showPanel: false },
};
