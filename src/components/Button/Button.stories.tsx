import React from 'react';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import _ from 'lodash';

import { Button, ButtonProps, ButtonSize } from '.';
import { iconControl } from '../../../util/storybook-icon-control';
import { TArg, TTextColor, tw } from '../../typings/tailwindcss-classnames';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'tertiary', 'ghost'],
        defaultValue: 'primary',
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
        defaultValue: 'medium',
      },
    },
    icon: iconControl,
    iconPosition: {
      control: {
        type: 'radio',
        options: ['start', 'end'],
        defaultValue: 'start',
      },
    },
    element: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    // docs: { page: null },
    options: { showPanel: true },
  },
} as Meta;

const OverviewVariant: React.FC<
  Pick<ButtonProps, 'variant'> & {
    textColor?: TTextColor;
    className?: TArg[];
  }
> = ({ variant, textColor, className = [] }) => {
  const variantName = _.startCase(variant);
  const rootCN = tw(
    'tag-grid',
    'tag-grid-flow-col',
    'tag-gap-x-14',
    'tag-auto-cols-min',
    ...className,
  );
  return (
    <div className={rootCN}>
      <OverviewVariantSizes
        title={`${variantName} Button with Text`}
        textColor={textColor}
        variant={variant}
        label="My button text"
      />
      <OverviewVariantSizes
        title={`${variantName} Button with Icon`}
        textColor={textColor}
        variant={variant}
        icon={<InsertEmoticonIcon />}
      />
      <OverviewVariantSizes
        title={`${variantName} Button with Text & Icon on Left`}
        textColor={textColor}
        variant={variant}
        label="My button text"
        icon={<InsertEmoticonIcon />}
        iconPosition="start"
      />
      <OverviewVariantSizes
        title={`${variantName} Button with Text & Icon on Right`}
        textColor={textColor}
        variant={variant}
        label="My button text"
        icon={<InsertEmoticonIcon />}
        iconPosition="end"
      />
    </div>
  );
};

const OverviewVariantSizes: React.FC<
  Pick<ButtonProps, 'title' | 'variant' | 'icon' | 'iconPosition' | 'label'> & {
    textColor?: TTextColor;
  }
> = ({ title, variant, icon, iconPosition, label, textColor }) => {
  const sizes: ButtonSize[] = ['large', 'medium', 'small'];
  const titleCN = tw(
    'tag-text-body-bold-16',
    'tag-whitespace-nowrap',
    'tag-mb-5',
    textColor,
  );

  return (
    <div className="tag-flex tag-flex-col">
      <span className={titleCN}>{title}</span>
      <div
        className="tag-grid tag-gap-5 tag-grid-flow-col tag-auto-cols-max tag-items-center"
        style={{
          gridTemplateRows: 'repeat(4, min-content)',
        }}
      >
        <div />
        <div className={textColor}>Large</div>
        <div className={textColor}>Medium</div>
        <div className={textColor}>Small</div>

        <div className={textColor}>Enabled</div>
        {sizes.map((size) => (
          <div key={size}>
            <Button
              size={size}
              variant={variant}
              icon={icon}
              iconPosition={iconPosition}
              label={label}
            />
          </div>
        ))}

        <div className={textColor}>Hover</div>
        {sizes.map((size) => (
          <div key={size}>
            <Button
              className=":hover"
              size={size}
              variant={variant}
              icon={icon}
              iconPosition={iconPosition}
              label={label}
            />
          </div>
        ))}

        <div className={textColor}>Pressed</div>
        {sizes.map((size) => (
          <div key={size}>
            <Button
              className=":active"
              size={size}
              variant={variant}
              icon={icon}
              iconPosition={iconPosition}
              label={label}
            />
          </div>
        ))}

        <div className={textColor}>Focus</div>
        {sizes.map((size) => (
          <div key={size}>
            <Button
              className=":focus-visible"
              size={size}
              variant={variant}
              icon={icon}
              iconPosition={iconPosition}
              label={label}
            />
          </div>
        ))}

        <div className={textColor}>Disabled</div>
        {sizes.map((size) => (
          <div key={size}>
            <Button
              disabled={true}
              size={size}
              variant={variant}
              icon={icon}
              iconPosition={iconPosition}
              label={label}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const OverviewVariants = () => {
  return (
    <div className="tag-grid tag-grid-flow-row tag-auto-rows-min tag-gap-y-14">
      <OverviewVariant variant="primary" />
      <OverviewVariant variant="secondary" />
      <OverviewVariant variant="tertiary" />
      <OverviewVariant variant="ghost" />
      {/* <OverviewVariant
        variant="ghost-white"
        textColor="tag-text-white-rich"
        className={['tag-bg-black-rich', 'tag-p-2', 'tag--m-2']}
      /> */}
    </div>
  );
};
OverviewVariants.parameters = {
  options: { showPanel: false },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  variant: 'primary',
  label: 'My button text',
  onClick: action('button-click'),
};

ButtonPrimary.parameters = {
  layout: 'centered',
};

export const LinkPrimary = Template.bind({});
LinkPrimary.args = {
  component: 'a',
  variant: 'primary',
  label: 'Link',
  href: 'https://www.google.com',
  target: '_blank',
};
