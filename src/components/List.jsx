import React, { Component } from 'react';
import { List, Flex } from 'antd-mobile';
import { connect } from 'react-redux';
import { delUserDispatch } from '../store/actions/userInfo';
class UserList extends Component {
    render() {
        let { userlist } = this.props;
        return <List>
            <List.Item>
                <Flex className="text-center">
                    <Flex.Item>操作</Flex.Item>
                    <Flex.Item>{'姓名'}</Flex.Item>
                    <Flex.Item>{'用户id'}</Flex.Item>
                    <Flex.Item>操作</Flex.Item>
                </Flex>
            </List.Item>
            {
                userlist && userlist.map((item, key) => {
                    return <List.Item key={key}>
                        <Flex className="text-center">
                            <Flex.Item>修改</Flex.Item>
                            <Flex.Item>{item.username}</Flex.Item>
                            <Flex.Item>{item.userid}</Flex.Item>
                            <Flex.Item>删除</Flex.Item>
                        </Flex>
                    </List.Item>
                })
            }
        </List>
    }
}
let mapState = (state) => {
    return {}
}
let mapDispatch = (dispatch) => {
    return {
        delUser(userid) {
            dispatch(delUserDispatch(userid));
        }
    }
}
UserList = connect(mapState, mapDispatch)(UserList);
export default UserList;