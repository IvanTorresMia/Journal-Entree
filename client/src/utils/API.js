import axios from 'axios'




const API =  {
    createUser: function(email) {
        return axios.post("/api/User", email);
    }

}


export default API
