import axios from "axios";

// eslint-disable-next-line 
const API = {
  createUser: function (email) {
    return axios.post("/api/User", email);
  },
  getUsers: function() {
    return axios.get("/api/User/all")
},
getUser: function(id) {
  return axios.get("/api/User/One", id)
},
  createEntry: function(title, text) {
    return axios.post("/api/Entry", title, text);
  },
  getEntries: function() {
    return axios.get("/api/Entry");
  }
};

export default API;


// You actually don't fully know how to make this work hahaha
// but you will bb boy. 