import React, { Component } from 'react'
import { config } from './data.js'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

class RouterWrap extends Component {
    render() {
        return <Router>
            <Switch>
              {/* 一级路由配置，循环。将二级路由信息传递下去 */}
              {config.map((item, key) => {
                    return <Route path={item.path} render={(match) => {
                        let Con = item.component;
                        // console.log(item.children);
                        return <Con match={match} children={item.children} />
                    }} key={key} />
              })}
              <Redirect from='/' to='/index'/>
            </Switch>
          </Router>;
    }
}
export default  RouterWrap