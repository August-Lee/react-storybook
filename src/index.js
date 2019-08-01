/**
 * @file index
 * @author august-lee
 * @date Thu Jun 20 2019 14:36:15 GMT+0800 (GMT+08:00)
 */

import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './Main';
import reducer from './reducer';

const store = createStore(reducer);
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <Main store={store}/>
    </Provider>,
    document.getElementById('root')
);