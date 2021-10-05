import { all } from 'redux-saga/effects';
import * as Jirabugs from './Jirabugs/UserJiraBugs'
import * as ProjectCategorySaga from './Jirabugs/ProjectCategorySaga'
import * as ProjectSaga from './Jirabugs/ProjectSaga'



export function* rootSaga() {
    console.log(rootSaga)
    yield all([
        // nghiệp vụ của JiraBugs
        Jirabugs.theoDoiSingin(),
        ProjectCategorySaga.theoDoigetAllProjectCategory(),
        ProjectSaga.theoDoicreateProjectSaga(),
        ProjectSaga.theodoiGetListProjectSaga(),
        ProjectSaga.theodoiUpdateProjectSaga(),
    ])
}