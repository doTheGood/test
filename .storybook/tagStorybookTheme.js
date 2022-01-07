import { create } from '@storybook/theming';
import logo from '../src/assets/logos/adecco_logo.svg';

export default create({
  base: 'light',
  brandTitle: 'TAG DS StoryBook',
  brandImage: logo,
  colorPrimary: 'hotpink',
  colorSecondary: '#257973',
});
