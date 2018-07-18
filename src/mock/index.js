import Mock from 'mockjs'

Mock.mock('/num', () => {
    return Math.ceil(Math.random() * 8 + 2);
});

let users = [
    { userid: 1, username: '张三', moneybase: 0 },
    { userid: 2, username: '李四', moneybase: 0 },
    { userid: 3, username: '王五', moneybase: 0 }
]
Mock.mock('/getallusers', () => {
    return users;
});
Mock.mock('/submitsingleuser', (req, res) => {
    let { userid, username, moneybase } = JSON.parse(req.body);
    if (userid === '' || username === '' || moneybase === '') {
        return { msg: '添加失败', code: 0 }
    }
    users.push({ userid, username, moneybase });
    return { msg: '添加成功', code: 1 }
});
Mock.mock('/deluser', (req, res) => {
    let { userid } = JSON.parse(req.body);
    return { msg: '删除成功', code: 1 }
})