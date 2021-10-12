import { call, delay, put, takeLatest } from "@redux-saga/core/effects";
import { baseServices } from "../../../services/baseServices";
import { jirabugsServices } from "../../../services/JiraBug";
import { projectService } from "../../../services/ProjectService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { history } from '../../../util/libs/history'
import { notifacation } from "../../../util/notifacation/notifacation";



// mỗi khi dissopach lên sẽ nhận vào tham số áction
function* createProjectSaga(action) {

    console.log("actionCreateProject", action)
    // hiện thị loading
    yield put({
        type: 'DISPLAY_LOADING'
    })

    yield delay(500);

    try {
        // gọi API LẤY DỮ LIỆU VỀ
        // sau khi gọi API thnàh công thì dispatch lên reducer thông qua hàm put của saga
        const { data, status } = yield call(() => jirabugsServices.createProject(action.newProject))


        // nếu status code có trong API thì mới show dữ liệu lên không thì báo lỗi 
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)
            history.push('/projectmanagement')
        }
        else {
            alert("LỖI 500")
        }

    }
    catch (err) {
        console.log(err)
    }
    yield put({
        type: 'HIDE_LOADING'
    })
}


// gắn cái nghiệp vụ theo dõi vào rootSaga  để kích hoạt
export function* theoDoicreateProjectSaga() {
    //nhận cái sự kiện cuối cùng tránh trường hợp ng dùng click nhiều lần
    yield takeLatest('CREATE_PROJECT_SAGA', createProjectSaga)
}

//---------------------SAGA dùng lấy get all từ API===============//


function* getListProjectSaga(action) {

    try {

        const { data, status } = yield call(() => jirabugsServices.getListProject())
        if (status === STATUS_CODE.SUCCESS) {
            console.log('====================================');
            console.log({ data });
            console.log('====================================');
            yield put({
                type: 'GET_LIST_PROJECT',
                projectList: data.content //content ở API lấy về cái gì thi data. cái đó ở đây là lấy content
            })
        }
    } catch (err) {
        console.log(err)
    }

}

// gắn cái nghiệp vụ theo dõi vào rootSaga  để kích hoạt
export function* theodoiGetListProjectSaga() {
    //nhận cái sự kiện cuối cùng tránh trường hợp ng dùng click nhiều lần
    yield takeLatest('GET_LIST_PROJECT_SAGA', getListProjectSaga)
}


// update project
function* updateProjectSaga(action) {

    console.log("actionCreateProject", action)
    // hiện thị loading
    yield put({
        type: 'DISPLAY_LOADING'
    })

    yield delay(500);

    try {
        // gọi API LẤY DỮ LIỆU VỀ
        // sau khi gọi API thnàh công thì dispatch lên reducer thông qua hàm put của saga
        const { data, status } = yield call(() => jirabugsServices.updateProject(action.projectUpdate))
        // nếu status code có trong API thì mới show dữ liệu lên không thì báo lỗi 
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)
        }
        // yield call(getListProjectSaga)
        yield put({
            type: 'GET_LIST_PROJECT_SAGA'
        })
        yield put({
            type: 'CLOSE_MODAL'
        })
    }
    catch (err) {
        console.log(err)
    }
    yield put({
        type: 'HIDE_LOADING'
    })
}

export function* theodoiUpdateProjectSaga() {
    //nhận cái sự kiện cuối cùng tránh trường hợp ng dùng click nhiều lần
    yield takeLatest('UPDATE_PROJECT_SAGA', updateProjectSaga)
}


// delete project
function* deleteProjectSaga(action) {

    console.log("actionCreateProject", action)
    // hiện thị loading
    yield put({
        type: 'DISPLAY_LOADING'
    })

    yield delay(500);

    try {
        // gọi API LẤY DỮ LIỆU VỀ
        // sau khi gọi API thnàh công thì dispatch lên reducer thông qua hàm put của saga
        const { data, status } = yield call(() => projectService.deleteProject(action.idProject))
        // nếu status code có trong API thì mới show dữ liệu lên không thì báo lỗi 
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            notifacation('success','Delete project is successfully !!!')
        }
        else{
            notifacation('error','Delete project is successfully !!!')
        }
        // yield call(getListProjectSaga)
        yield put({
            type: 'GET_LIST_PROJECT_SAGA'
        })
        yield put({
            type: 'CLOSE_MODAL'
        })
    }
    catch (err) {
        console.log(err)
        notifacation('error','Delete project is successfully !!!')
    }
    yield put({
        type: 'HIDE_LOADING'
    })
}

export function* theoDoiDeleteProject() {
    //nhận cái sự kiện cuối cùng tránh trường hợp ng dùng click nhiều lần
    yield takeLatest('DELETE_PROJECT_SAGA', deleteProjectSaga)
}

