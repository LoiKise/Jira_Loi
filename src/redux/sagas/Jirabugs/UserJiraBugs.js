import { call, delay, fork, take, takeEvery, takeLatest, put } from 'redux-saga/effects'
import Axios from 'axios'
import { USER_SIGNIN_API, USLOGIN } from '../../constants/JiraDemo/JiraDemo'
import { jirabugsServices } from '../../../services/JiraBug'
import { TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem'
// cài thư viện history
import { history } from '../../../util/libs/history'



// Quản lý các action saga (action saga sẽ retun về các funtion giống như THUNK)

function* singninSaga(action) {
    console.log(action)

    // put giống dispatch action
    yield put({
        type: 'DISPLAY_LOADING'
    })

    yield delay(500);
    //call API
    try {
        const { data, status } = yield jirabugsServices.singninJiraBugs(action.userLogin) // userLogin trùng với bên action trong file redux

        // luuw vào localStorage
        // lưu token vào local
        localStorage.setItem(TOKEN, data.content.accessToken)

        // không thể lưu kiểu chuỗi ở localStorage nên ép thành kiểu chuỗi stringify
        // lưu hết cả content vào local
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content))

        // sau khi lưu thành công chuyển hướng trang nhờ thư viện hisotrỷ
        alert('đăng nhập thành công')
        history.push('/jirabugs')

        yield put({
            type: USLOGIN,
            userLogin: data.content
        })

        console.log(data)
    }
    
    catch (error) {
        console.log(error.response.data)
    }


    yield put({
        type: 'HIDE_LOADING'
    })
}

export function* theoDoiSingin() {

    //nhận cái sự kiện cuối cùng tránh trường hợp ng dùng click nhiều lần
    yield takeLatest(USER_SIGNIN_API, singninSaga)
}