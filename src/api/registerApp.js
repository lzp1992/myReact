import axios from 'axios';
import { PORT } from './port'
export function registerApi() {
    return axios.post(PORT + '/register');
}

// 模拟数据，请求初始数据接口，返回接口数据
export function getInitalNumApi() {
    return axios.get(PORT + '/num');
}