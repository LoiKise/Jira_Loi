import { GET_ALL_PROJECT_CATEGORY } from "../constants/JiraDemo/JiraDemo"

const stateDefault = {
    arrProjectCategory: []
}

export const ProjectCategoryReducer = (state = stateDefault, action) => {
    switch (action.type) {

        //tên này phải khác tên trong action của saga
        case GET_ALL_PROJECT_CATEGORY: {
            state.arrProjectCategory = action.data
            return { ...state }
        }


        default: return { ...state }
    }
}