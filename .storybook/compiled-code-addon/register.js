import React from 'react';
import { AddonPanel } from '@storybook/components';
import { addons, types } from '@storybook/addons';

addons.register('@virtualidentityag/compiled-code-addon', () => {
    addons.add('compiled-code-addon/panel', {
        title: 'code',
        type: types.PANEL,
        render: ({ active, key }) => (
            <AddonPanel active={active} key={key}>
                implement
            </AddonPanel>
        ),
    });
});