import { USER_SIGNIN_API } from "../constants/JiraDemo/JiraDemo";




export const SinginJiraBugAction = (email, passWord) => {

    return {
        type: USER_SIGNIN_API,
        userLogin: {
            email: email,
            passWord: passWord
        }
    }

}