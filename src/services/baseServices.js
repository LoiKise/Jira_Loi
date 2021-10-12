import Axios from "axios"
import { DOMAIN_JIRABUG, TOKEN, TOKEN_CYBERSOFT } from "../util/constants/settingSystem"



export class baseServices {
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN_JIRABUG}/${url}`,
            method: 'PUT',
            data: model,
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
            },
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN_JIRABUG}/${url}`,
            method: 'POST',
            data: model,
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
            },
        })
    }

    get = (url) => {
        return Axios({
            url: `${DOMAIN_JIRABUG}/${url}`,
            method: 'GET',
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
            },
        })
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN_JIRABUG}/${url}`,
            method: 'DELETE',
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT,
                'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
            },
        })
    }
}