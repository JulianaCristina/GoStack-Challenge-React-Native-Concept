import api from "./api";

const repositoryApi = {
    like(id){
        return api.post(`repositories/${id}/like`)
    }
}

export default repositoryApi;
