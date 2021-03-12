import axios from "axios";

// eslint-disable-next-line 
const API = {
  createUser: function (email) {
    return axios.post("/api/User", email);
  },
  getUser: function() {
    return axios.get("/api/User/all")
},
  createEntry: function(Entry) {
    return axios.post("/api/Entry", Entry);
  },
  getEntries: function() {
    return axios.get("/api/Entry");
  }
};

export default API;


// You actually don't fully know how to make this work hahaha
// but you will bb boy. 