/**
 * @file stories index.js
 * @author august-lee
 */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import Button from '../../src/components/Button';

const props = {
    text: 'Button',
    onClick: () => {
    }
};

storiesOf('Button', module)
    .add('基本用法',
        withInfo({
            inline: true
        })(
            () => <Button {...props}/>
        )
    );
