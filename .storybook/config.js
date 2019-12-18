import { configure } from '@storybook/html';

configure(require.context('../../../../src/components', true, /\.stories\.js$/), module);