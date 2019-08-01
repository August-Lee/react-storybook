/**
 * @file reducer index
 * @author august-lee
 */

import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import header from './header';

const history = createBrowserHistory();
export default combineReducers({
    router: connectRouter(history),
    header
});
