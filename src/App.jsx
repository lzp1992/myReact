import React, { Component } from 'react';
import './App.css';
import RootRouter from './router/index.jsx';

// 让store与视图做连接
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Provider store={store}><RootRouter></RootRouter></Provider>
    }
}
         
export default App;
         
 {
   /* 
在浏览器打印 store.getState() 
store.dispatch({type:'add'})
store.dispatch({type:'TEST_ADD'})
store.getState()
*/
 }
