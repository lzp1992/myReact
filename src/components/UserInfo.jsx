import React, { Component } from 'react'
import { List,Flex,InputItem,Modal,  NavBar, Icon } from "antd-mobile";
import UserList from './List'
import "../css/userinfo.css"
import { connect } from 'react-redux';
import { getAllUserDispatch, submitSingleUserDispatch, USERMANGER_ISADD } from '../store/actions/userInfo.js';


// 基础测试 start
// import { getInitalNum } from "../store/actions/test.js";
// 基础测试 end

class UserInfo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      visible: false,
      userid: "",
      username: "",
      moneybase: ""
    },
    this.onOk = this.onOk.bind(this),
    this.onCancel = this.onCancel.bind(this);
    this.footer = [
      {
        text: "确定",
        onPress: () => {
          this.onOk();
        }
      },
      {
        text: "取消",
        onPress: () => {
          this.onCancel();
        }
      }
    ];
  }
  onOk() {
    console.log("确定");
    this.showOrHide(false);

  }
  onCancel() {
    console.log("取消");
    this.showOrHide(false);
  }
  showOrHide(flag) {
    this.setState({ visible: flag });
  }
  changeUserid(value) {
      console.log(value);
    this.setState({ userid: value });
  }
  changeUsername(value) {
    this.setState({ username: value });
  }
  changeMoneybase(value) {
    this.setState({ moneybase: value });
  }
  render() {
    let { visible, userid, username, moneybase } = this.state;
    let { isAdd, userlist } = this.props;
    console.log(this.props);
    return (
      <div>
        <header>
          <NavBar
            className="Header"
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log("left")}
            rightContent={[
              <Icon
                key="0"
                type="ellipsis"
                onClick={this.showOrHide.bind(this, true)}
              />
            ]}
          >
            用户管理
          </NavBar>
          <UserList userlist={userlist} />
          <Modal
            visible={visible}
            transparent
            maskClosable={true}
            onClose={this.showOrHide.bind(this, false)}
            title="创建用户"
            footer={this.footer}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
          >
            <List>
              <List.Item>
                <Flex>
                  <label className="adduser">用户id：</label>
                  <Flex.Item>
                    <InputItem
                      placeholder="输入用户id"
                      value={userid}
                      onChange={this.changeUserid.bind(this)}
                    />
                  </Flex.Item>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex>
                  <label className="adduser">姓名：</label>
                  <Flex.Item>
                    <InputItem
                      placeholder="输入用户名"
                      value={username}
                      onChange={this.changeUsername.bind(this)}
                    />
                  </Flex.Item>
                </Flex>
              </List.Item>
              <List.Item>
                <Flex>
                  <label className="adduser">金钱基数：</label>
                  <Flex.Item>
                    <InputItem
                      placeholder="输入金钱基数"
                      value={moneybase}
                      onChange={this.changeMoneybase.bind(this)}
                    />
                  </Flex.Item>
                </Flex>
              </List.Item>
            </List>
          </Modal>
        </header>
      </div>
    );
  }
}

// export default UserInfo;

let mapState = (state) => {
  console.log(state)
  let { userlist, isAdd } = state.usermanger;
  return {
    userlist, isAdd
  }
}
let mapDispatch = dispatch => {
  return {
    getAllUsers() {
      dispatch(getAllUserDispatch);
    },
    addUser(data) {
      dispatch(submitSingleUserDispatch(data));
    },
    resetIsAdd(isAdd) {
      dispatch({ type: USERMANGER_ISADD, isAdd });
    }
  };
};
UserInfo = connect(mapState, mapDispatch)(UserInfo);
export default UserInfo;




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 基础测试 start
// let mapState = (state) => {
//   let {num} = state.test;
//   return { num };
// }
// let mapDispatch = (dispatch) => {
//   return {
//     getInitalNum() {
//       dispatch(getInitalNum);
//     }
//   }
// }
// UserInfo = connect(mapState, mapDispatch)(UserInfo);
// export default UserInfo;

// export default connect(state=>state)(UserInfo);
// 基础测试 end


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
