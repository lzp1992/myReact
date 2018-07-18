//请求接口
import axios from 'axios';
import { PORT } from './port'
//获取所有用户信息
export const getAllUsers = () => {
    return axios.get(PORT + '/getallusers');
}

//提交单个用户
export const submitSingleUser = (data) => {
    return axios.post(PORT + '/submitsingleuser', data);
}

// 删除用户信息
export const delUserApi = (userid) => {
    return axios.post(PORT + '/deluser', { userid });
}