// import {
//     GETUSER,
//     LOGIN
// } from "./type"
import { USERMANGER_INIT_USER, USERMANGER_ADD_USER } from "./type";
let initState = {
    userId: null
}

export default (state = initState, actions) => {
    let { type, text } = actions
    switch (type) {
      case USERMANGER_INIT_USER: {
        let obj = { ...state, ...{ userId: text.data } };
        return obj;
      }
      case USERMANGER_ADD_USER: {
        let obj = { ...state, ...{ text: text } };
        console.log(obj);
        return obj;
      }
      default: {
        return state;
      }
    }
}