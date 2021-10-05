import { combineReducers, createStore, applyMiddleware } from "redux";
import LoadingReducer from "./reducer/LoadingReducer";

// cấu hình middlewware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from "./sagas/rootSaga";
import { UserLoginJiraBugReducer } from "./reducer/UserLoginJiraBugReducer";
import { ProjectCategoryReducer } from "./reducer/ProjectCategoryReducer";
import { ProjectJiraBugsReducer } from "./reducer/ProjectJiraBugsReducer";
import { drawerReducer } from "./reducer/DrawerReducer";
import { ProjectReducer } from "./reducer/ProjectReducer";


const middWareSaga = createMiddleWareSaga();


const rootReducers = combineReducers({
    LoadingReducer,
    UserLoginJiraBugReducer,
    ProjectCategoryReducer,
    ProjectJiraBugsReducer,
    drawerReducer,
    ProjectReducer,
})

export const store = createStore(rootReducers, applyMiddleware(middWareSaga))
// goi saga
middWareSaga.run(rootSaga);


