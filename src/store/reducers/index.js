//生成reducer，并且抛出，供store下index.js引入调用

import { combineReducers } from 'redux'; //  combineReducers 合并reducers

import { test } from './test'
import { usermanger } from './userInfo'
//生成一个reducer   combineReducers接收一个对象，对象里就是导过来的一个个reducer
let reducer = combineReducers({
    test,
    usermanger
});
export default reducer; //抛出reducer