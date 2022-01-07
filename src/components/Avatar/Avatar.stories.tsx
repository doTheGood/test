import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {},
  parameters: {
    options: { showPanel: true },
  },
} as Meta;

export const Overview = () => {
  return (
    <div
      className="grid gap-3 grid-flow-rows auto-cols-min items-center text-body-normal-18"
      style={{ gridTemplateColumns: 'repeat(2, max-content)' }}
    >
      <div>
        <Avatar nameInitials="AD" />
      </div>
    </div>
  );
};

//TODO: Type
const Template: Story<any> = (args) => {
  return <Avatar {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  nameInitials: 'AD',
};
