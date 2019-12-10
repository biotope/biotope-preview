import { configure } from '@storybook/html';

configure(require.context('/dist/resources/components', true, /\.stories\.js$/), module);