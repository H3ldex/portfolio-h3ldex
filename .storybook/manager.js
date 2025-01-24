import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './iconhl.svg',
    brandTitle: 'H3ldex Lou Components',
    brandUrl: 'https://h3ldex.dev',
  },
});
