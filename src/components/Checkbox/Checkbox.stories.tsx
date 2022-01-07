import React from 'react';

import { CheckboxProps } from '@material-ui/core';
import { Meta, Story } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {},
  parameters: {
    options: { showPanel: true },
  },
} as Meta;

export const Overview = () => {
  return (
    <div
      className="grid gap-3 grid-flow-rows auto-cols-min items-center text-body-normal-14"
      style={{ gridTemplateColumns: 'repeat(2, max-content)' }}
    >
      <div>
        <Checkbox checked />
      </div>
      <div>Checked active</div>

      <div>
        <Checkbox checked={false} />
      </div>
      <div>Unchecked active</div>

      <div>
        <Checkbox checked disabled />
      </div>
      <div>Checked inactive</div>

      <div>
        <Checkbox checked={false} disabled />
      </div>
      <div>Unchecked inactive</div>
    </div>
  );
};

const Template: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
