/**
 * @file storybook config.js
 * @author august-lee
 */


import {addParameters, addDecorator, configure} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

const req = require.context('./stories', true, /\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}
addParameters({
    options: {
        showPanel: false
    }
});
addDecorator(withInfo);

configure(loadStories, module);
