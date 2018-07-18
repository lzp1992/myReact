// 返回各种不同得action类型
//   针对test这个reducers 写一个action
// 一般来说type类型是个字符串 
// 直接写字符串得话不太好，修改得话要修改多个地方。
// 所以一般都在这里 把它导出来

import { getInitalNumApi } from '../../api/registerApp';

export const TEST_ADD = 'TEST_ADD';
export const TEST_DEL = 'TEST_DEL';
//初始数据 
export const TEST_INIT = 'TEST_INIT';


//store下得index.js中
// 引用了import ThunMiddleware from "redux-thunk"; //可以让dispatch接收函数
// 发起axios请求，如果用了redux-thunk之后，写这里

// 得到初始化数据，写成一个函数
export function getInitalNum(dispatch) {
    console.log(dispatch)
        // 函数里面发请求 ，发请求要把axios引入，
        // 现在不用引，因为现在要求把请求都写到api这个文件夹下
    getInitalNumApi().then((num) => {
        console.log(num);
        dispatch({ type: TEST_INIT, num })

    })
}