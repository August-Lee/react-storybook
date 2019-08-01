/**
 * @file button
 * @author august-lee
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Button extends Component {

    static propTypes = {
        /** 显示文案 */
        text: PropTypes.string.isRequired,
        /** 点击事件 */
        onClick: PropTypes.func.isRequired
    };

    render() {
        const {text, onClick} = this.props;
        return (
            <button onClick={onClick}>{text}</button>
        );
    }
}
