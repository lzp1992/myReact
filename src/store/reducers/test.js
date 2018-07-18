//测试reducer的  写测试数据

// let typeFn = {
//     'add' (state, action) {
//         state += 1;
//     },
//     'del' (state, action) {
//         state -= 1;
//     }
// }
//state = 0 基础数据类型  放栈里  不是同一个state，一个全局，一个局部变量
// 局部变量改，影响不了全局变量变化。
// let test = (state = 0, action) => {   
//     //拆分出来小的reducer
//     typeFn[action.type] && typeFn[action.type](state, action)
//     return state;
// }
// export { test }

import { TEST_ADD, TEST_DEL, TEST_INIT } from '../actions/test'

let typeFn = {
    // 'add' (state, action) {
    //     state.num += 1;
    // },
    // 'del' (state, action) {
    //     state.num -= 1;
    // }

    // 用中括号[],因为是变量,要做属性名了
    [TEST_ADD](state, action) {
        state.num += 1;
    },
    [TEST_DEL](state, action) {
        state.num -= 1;
    },

    // 真正要促发这一步的时候要用一个异步去促发，
    // 发起axios请求之后
    [TEST_INIT](state, action) {
        // 给state赋一个初始值，这个初始值是action 到时候携带过来的？？
        state.num = action.num;
    }
}

//改为state = {num: 0} 引用数据类型  放堆里   是个对象，
//虽然state不是同一个，但是对象存在堆里，用的同一个。因此num可以变化
let test = (state = { num: 0 }, action) => {
    //拆分出来小的reducer
    typeFn[action.type] && typeFn[action.type](state, action)
    return {...state };
}
export { test }



//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//策略模式  是一种设计模式. 针对情况 有很多判断时候
//eg：
// (state = initState, actions) => {
//     switch (action.type){
//         case add:{}
//         case del:{}
//     }
// }

//策略模式是  把所有处理都放一个对象里  //判断对象里，如果，有这个方法则传递参数，执行这个方法
// let typeFn = {
//     'add' () {},
//     'del' () {}
// }
// (state = initState, actions) => {
//     typeFn[action.type] && typeFn[action.type](state,action)
//     return state;
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++



// +++++++
// https://www.cnblogs.com/cxying93/p/6106469.html
// 基础数据类型   引用数据类型   栈  堆   多线程  单线程
// 基本数据类型指的是简单的数据段，引用数据类型指的是有多个值构成的对象