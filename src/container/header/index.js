/**
 * @file header index.js
 * @author august-lee
 * @date Thu Jun 20 2019 14:36:15 GMT+0800 (GMT+08:00)
 */
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Main from './Main';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {dispatch}
};

const mapStateToProps = state => {
    return {
        ...state.header
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
