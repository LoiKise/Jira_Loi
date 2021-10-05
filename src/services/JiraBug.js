import Axios from "axios"
import { DOMAIN_JIRABUG, TOKEN, TOKEN_CYBERSOFT } from "../util/constants/settingSystem"


export const jirabugsServices = {
    singninJiraBugs: (userLogin) => {
        return Axios({
            url: `${DOMAIN_JIRABUG}/users/signin`,
            method: 'POST',
            data: userLogin
        })
    },

    getAllProjectCategory: () => {
        return Axios({
            url: `${DOMAIN_JIRABUG}/ProjectCategory`,
            method: 'GET',
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
            },
        })
    },
    createProject: (newProject) => {
        console.log(localStorage.getItem(TOKEN))
        return Axios({
            url: `${DOMAIN_JIRABUG}/Project/createProjectAuthorize`,
            method: 'POST',
            data: newProject,
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
            },
        })
    },
    getListProject: () => {
        return Axios({
            url: `${DOMAIN_JIRABUG}/Project/getAllProject`,
            method: 'GET',
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
            },
        })
    },
    updateProject: (projectUpdate) => {
        return Axios({
            // https://jiranew.cybersoft.edu.vn/api/Project/updateProject?projectId=1311

            url: `${DOMAIN_JIRABUG}/Project/updateProject?projectId=${projectUpdate.id}`,
            method: 'PUT',
            data: projectUpdate,
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
            },
        })
    },
}