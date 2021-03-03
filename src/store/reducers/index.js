// reducers 文件夹主要存放数据

import { combineReducers } from 'redux';
import { SET_ITEM_NAME, SET_ITEM_LIST } from '_store/constants/index';

const initalState = {
    name: 'webpack-for-react',
    list: [],
};

function getGlobalData(state = initalState, action) {
    switch (action.type) {
        case SET_ITEM_NAME:
            return {
                ...state,
                name: action.payload.name,
            };
        case SET_ITEM_LIST:
            return {
                ...state,
                list: action.payload.list,
            };
        default:
            return state;
    }
}

export default combineReducers({ getGlobalData });
