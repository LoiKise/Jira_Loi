const initialState = {
    projectEdit: {
        "id": 0,
        "projectName": "string",
        "creator": 0,
        "description": "string",
        "categoryId": "string"
    }
}

export const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'EDIT_PROJECT': {
            state.projectEdit = action.projectEditModal;
            console.log('actionproject',action.projectEditModal)
            return { ...state }
        }

        default:
            return state
    }
}
