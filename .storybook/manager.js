import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './iconhl.svg',
    brandTitle: 'Hamish Williams Components',
    brandUrl: 'https://hamishw.com',
  },
});
