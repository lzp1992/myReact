import { USERMANGER_ISDEL, USERMANGER_ADD_USER, USERMANGER_INIT_USER, USERMANGER_ISADD, USERMANGER_USER_DEL } from '../actions/userInfo'
let oTypes = {
    [USERMANGER_ADD_USER](state, action) {
        state.userlist.push(action.userinfo);
    },
    [USERMANGER_INIT_USER](state, action) {
        state.userlist = action.users;
    },
    [USERMANGER_ISADD](state, action) {
        state.isAdd = action.isAdd;
    },
    [USERMANGER_USER_DEL](state, action) {
        let userid = action.userid;
        let index = state.userlist.findIndex(item => userid === item.userid);
        state.userlist.splice(index, 1);
    },
    [USERMANGER_ISDEL](state, action) {
        state.isDel = action.isDel;
    }
}
let usermanger = (state = { userlist: [], isAdd: null, isDel: null }, action) => {
    oTypes[action.type] && oTypes[action.type](state, action);
    return {...state, userlist: [...state.userlist] };
}
export { usermanger }