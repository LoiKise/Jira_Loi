import { call, put, takeLatest } from "@redux-saga/core/effects";
import { jirabugsServices } from "../../../services/JiraBug";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_PROJECT_CATEGORY, GET_ALL_PROJECT_CATEGORY_SAGA } from "../../constants/JiraDemo/JiraDemo";



// mỗi khi dissopach lên sẽ nhận vào tham số áction
function* getAllProjectCategorySaga(action) {
    console.log('actionSaga', action)
    // gọi APi lấy dữ liệu về

    try {
        const { data, status } = yield call(() => jirabugsServices.getAllProjectCategory())

        // sau khi gọi API thnàh công thì dispatch lên reducer thông qua hàm put của saga
        // nếu status code có trong API thì mới show dữ liệu lên không thì báo lỗi 
        if (status === STATUS_CODE.SUCCESS)
            yield put({
                type: GET_ALL_PROJECT_CATEGORY,
                data: data.content
            })

    }
    catch (error) {
        console.log({error})
    }
}


// gắn cái nghiệp vụ theo dõi vào rootSaga  để kích hoạt
export function* theoDoigetAllProjectCategory() {

    //nhận cái sự kiện cuối cùng tránh trường hợp ng dùng click nhiều lần

    yield takeLatest(GET_ALL_PROJECT_CATEGORY_SAGA, getAllProjectCategorySaga)
}