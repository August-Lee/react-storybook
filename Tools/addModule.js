/**
 * @author  august-lee
 * @date   2019-6-20
 * @file  新增模块工具
*/
const fs = require('fs');
const path = require('path');

const getModuleParams = () => {
    const nameIndex = process.argv.indexOf('-n');
    const moduleIndex = process.argv.indexOf('-m');
    if (nameIndex < 0 || nameIndex === process.argv.length - 1) {
        throwError();
        return null;
    }
    if (moduleIndex < 0 || moduleIndex === process.argv.length - 1) {
        throwError();
        return null;
    }
    const name = process.argv[process.argv.indexOf('-n') + 1];
    const module = process.argv[process.argv.indexOf('-m') + 1];
    if (fs.readdirSync(path.resolve(__dirname, '../src/container')).indexOf(module) > -1) {
        throwError('container');
        return null;
    }
    if (fs.readdirSync(path.resolve(__dirname, '../src/reducer')).map(i => i.split('.')[0]).indexOf(module) > -1) {
        throwError('reducer');
        return null;
    }
    return {name, module};
};
const throwError = (name) => {
    if (name) {
        console.warn(`\n Module name has been used for ${name}.`);
        return;
    }
    console.warn('\nPlease input module name, for example: \"node addModule -n YourName -m YourModuleName\".');
};
function getTemplate(params) {
    const containerIndex = `/**
 * @file ${params.module} index.js
 * @author ${params.name}
 * @date ${new Date()}
 */
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Main from './Main';
import {ACTIONS} from '../../reducers/${params.module}';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};

const mapStateToProps = state => {
    return {
        ...state.${params.module}
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
`;
    const containerMain = `/**
 * @file ${params.module} Main.jsx
 * @author ${params.name}
 * @date ${new Date()}
 */
import React, {Component} from 'react';
import './style.css';

export default class ${params.module.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase())} extends Component {

    render() {
        return (
            <div className="${params.module.replace(/([A-Z])/g, '-$1').toLowerCase()}-container"/>
        );
    }
}
`;
    const containerLess = `.${params.module.replace(/([A-Z])/g, '-$1').toLowerCase()}-container {
}
`;
    const reducerIndex = `/**
 * @file ${params.module} reducer
 * @author ${params.name}
 * @date ${new Date()}
 */

const PREX = '${params.module.replace(/([A-Z])/g, '_$1').toUpperCase()}';

export const AJAX = [];

export const ACTIONS = {};

export const INITIAL = {};

export default (state = INITIAL, action) => {
    const {type, payload} = action;
    switch (type) {
        default:
            return state;
    }
};
`;
    return {
        [`container/${params.module}/index.js`]: containerIndex,
        [`container/${params.module}/Main.jsx`]: containerMain,
        [`container/${params.module}/style.css`]: containerLess,
        [`reducer/${params.module}.js`]: reducerIndex
    };
}


const params = getModuleParams();
if (!params) {
    return;
}
fs.mkdirSync(path.resolve(__dirname, `../src/container/${params.module}`));
const files = getTemplate(params);
Object.keys(files).forEach(file => {
    fs.writeFileSync(path.resolve(__dirname, `../src/${file}`), files[file]);
});
