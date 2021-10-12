import { baseServices } from "./baseServices"


export class ProjectService extends baseServices {

    constructor() {
        super();
    }

    deleteProject = (id) => {
        return this.delete(`/Project/deleteProject?projectId=${id}`)
    }

}

export const projectService = new ProjectService();