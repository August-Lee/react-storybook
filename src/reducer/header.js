/**
 * @file header reducer
 * @author august-lee
 * @date Thu Jun 20 2019 14:36:15 GMT+0800 (GMT+08:00)
 */

const PREX = 'HEADER';
export const AJAX = [];
export const ACTIONS = {CHANGE: 'CHANGE'};
export const INITIAL = {
    text: 'button'
};

export default (state = INITIAL, action) => {
    const {type, payload} = action;
    switch (type) {
        case ACTIONS.CHANGE:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};
