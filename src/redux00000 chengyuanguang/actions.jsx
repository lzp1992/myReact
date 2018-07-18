// import {
//     GETUSER,
//     LOGIN,
//     REGISTER
// } from "./type"
import { USERMANGER_INIT_USER, USERMANGER_ADD_USER } from "./type";
import axios from 'axios'

export default {
    [USERMANGER_INIT_USER](item) {
        return {
            type: GETUSER,
            text: item
        }
    },
    [USERMANGER_ADD_USER](item, that) {
        return (dispatch) => {
            // console.log(item)
            axios.post('/api/login', item).then(data => {
                console.log(data.data);
                dispatch(this[GETUSER](data.data))
                if (data.data.code == 0) {
                    alert(data.data.msg);
                    that.props.history.push("/index");
                } else {
                    alert(data.data.msg);
                }
            })
        }
    }
}
