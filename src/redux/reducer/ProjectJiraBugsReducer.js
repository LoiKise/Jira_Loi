
// mặc định ban đầu state ở reducer là mảng rỗng
const stateDefault = {
    projectList: [
        {
            id: '1', projectName: 'abc', description: '<p>acacastringc</p>'
        }
    ]
}

export const ProjectJiraBugsReducer = (state = stateDefault, action) => {


    switch (action.type) {

        case 'GET_LIST_PROJECT': {
            state.projectList = action.projectList;
            return { ...state }
        }



        default: return { ...state }
    }
}

