import '../src/styles/index.scss';
import { addons } from '@storybook/addons';
import { StylesProvider } from '@material-ui/core';

addons.setConfig({
  enableShortcuts: false,
});

export const parameters = {
  layout: 'centered',
  options: {
    storySort: {
      order: ['Getting Started', 'Components', [
        'Button', 
        'Input', 
        'Checkbox',
        'Avatar',
      ]],
      // order: ['Getting Started', 'Components', ['Home', 'Login', 'Admin']],
    },
  },

  backgrounds: {
    grid: {
      cellSize: 8,
      opacity: 0.5,
      cellAmount: 8,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <StylesProvider injectFirst>
        <div className="tag-m-1">
          <Story />
        </div>
      </StylesProvider>
    );
  },
];
