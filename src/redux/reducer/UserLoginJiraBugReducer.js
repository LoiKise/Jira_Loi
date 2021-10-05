import { USER_LOGIN } from "../../util/constants/settingSystem";
import { USLOGIN } from "../constants/JiraDemo/JiraDemo";

let userLogin = null;




if (localStorage.getItem(USER_LOGIN)) {

    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))

}

const stateDefault = {
    userLogin: userLogin
}

export const UserLoginJiraBugReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case USLOGIN: {
            state.userLogin = action.userLogin
            return { ...state }
        }

        default: return { ...state }

    }
}