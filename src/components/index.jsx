import React, { Component } from 'react'
import { Link, Route } from "react-router-dom"
import { NavBar, Icon } from "antd-mobile";
class Index extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
    render() {
        let {children,match}=this.props;
        return <div>
            <header> 
              <NavBar
                className="Header"
                mode="dark"
                leftContent="back"
                rightContent={[
                  <Icon key="1" type="ellipsis" />,
                ]}
              >AA计算器</NavBar>
            </header>
            <section>
              {children && children.map((item, key) => {
                  // console.log(match);
                //  console.log(match.match.path + item.path);
                return <Route path={match.match.path + item.path} component={item.component} key={key} />;
              })}
            </section>
            <footer>
              <ul className="nav_ul">
                {children.map((item, key) => {
                  return <li key={key}>
                      <Link to={match.match.path + item.path}>
                        {item.title}
                      </Link>
                    </li>;
                })}
              </ul>
            </footer>
          </div>;
    }
}
export default Index;
