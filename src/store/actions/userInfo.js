import { getAllUsers, submitSingleUser, delUserApi } from '../../api/userInfo';
export const USERMANGER_INIT_USER = 'USERMANGER_INIT_USER';
export const USERMANGER_ADD_USER = 'USERMANGER_ADD_USER';
export const USERMANGER_ISADD = 'USERMANGER_ISADD';
export const USERMANGER_USER_DEL = 'USERMANGER_USER_DEL';
export const USERMANGER_ISDEL = 'USERMANGER_ISDEL';

export let getAllUserDispatch = (dispatch) => {
    getAllUsers().then((response) => {
        let users = response.data;
        dispatch({
            type: USERMANGER_INIT_USER,
            users
        });
        dispatch({
            type: USERMANGER_ISADD,
            isAdd: null
        });
    })
}
export let submitSingleUserDispatch = (data) => {
    return (dispatch) => {
        submitSingleUser(data).then((response) => {
            console.log(response);
            if (response.data.code === 1) {
                dispatch({
                    type: USERMANGER_ADD_USER,
                    userinfo: data
                });
                dispatch({
                    type: USERMANGER_ISADD,
                    isAdd: true
                });
            } else {
                dispatch({
                    type: USERMANGER_ISADD,
                    isAdd: false
                });
            }
        })
    }
}

export let delUserDispatch = (userid) => {
    return (dispatch) => {
        delUserApi(userid).then(response => {
            if (response.data.code === 1) {
                dispatch({
                    type: USERMANGER_USER_DEL,
                    userid
                });
                dispatch({
                    type: USERMANGER_ISDEL,
                    isDel: true
                });
            }
        })
    }
}