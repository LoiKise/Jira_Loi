import React from "react"


const initialState = {
    visible: false,
    ComponentContentDrawer: <p>default content</p>,
    callBackSubmit: (propsValue) => (alert('click demo'))
}
// muốn chạy được nhớ vô file configStore để import

export const drawerReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'OPEN_MODAL':
            return { ...state, visible: true }
        case 'CLOSE_MODAL':
            return { ...state, visible: false }
        case 'OPEN_FORM_EDIT_PROJECT': {
            return { ...state, visible: true, ComponentContentDrawer: action.Component }
        }
        case 'SET_SUBMIT_EDIT_PROJECT':
            state.callBackSubmit = action.submitFunton
            return { ...state }
        default:
            return state
    }
}
