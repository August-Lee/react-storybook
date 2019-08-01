/**
 * @file header Main.jsx
 * @author august-lee
 * @date Thu Jun 20 2019 14:36:15 GMT+0800 (GMT+08:00)
 */
import React, {Component} from 'react';
import Btn from '../../components/Button';
import {ACTIONS} from '../../reducer/header';
import './style.less';

export default class Header extends Component {

    render() {
        const {dispatch, text} = this.props;
        const props = {
            text: text,
            onClick: () => {
                alert('弹弹弹');
                dispatch({
                    type: ACTIONS.CHANGE,
                    payload: {text: '弹弹弹'}
                });
            }
        };
        return (
            <div className="header-container">
                <Btn {...props}/>
            </div>
        );
    }
}
