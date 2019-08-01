/**
 * @file Main.jsx
 * @author august-lee
 * @date Thu Jun 20 2019 14:36:15 GMT+0800 (GMT+08:00)
 */
import React, {Component} from 'react';
import {ConnectedRouter as Router} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {Route, Redirect} from 'react-router-dom';
import Header from './container/header';

const history = createBrowserHistory();
export default class Main extends Component {

    render() {
        return (
            <Router history={history}>
                <Route path="/" component={Header}/>
            </Router>
        );
    }
}
