// actions 文件夹主要放设置值的方法

import { SET_ITEM_NAME, SET_ITEM_LIST } from '_store/constants/index';

export function setGlobalName(payload) {
    return { type: SET_ITEM_NAME, payload };
}

export function setGlobalList(payload) {
    return { type: SET_ITEM_LIST, payload };
}
