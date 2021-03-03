import axios from 'axios'

const API = {
    createUser: (user) => {
        return axios.post("/api/User")
    }
}