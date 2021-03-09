import axios from "axios";

// eslint-disable-next-line 
const API = {
  createUser: function (email) {
    return axios.post("/api/User", email);
  },
  getUser: function() {
    return axios.get("/api/User")
},
};

export default API;
