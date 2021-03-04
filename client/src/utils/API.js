import axios from "axios";

// eslint-disable-next-line
const API = {
  createUser: function (email) {
    return axios.post("/api/User", email);
  },
};

export default API;
