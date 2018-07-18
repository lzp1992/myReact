//生成store
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import ThunMiddleware from "redux-thunk"; //可以让dispatch接收函数
const store = createStore(reducer, applyMiddleware(ThunMiddleware));

if (process.env.NODE_ENV === 'development') {
    // 仅仅是为了测试时候用
    window.store = store;
}

export default store;