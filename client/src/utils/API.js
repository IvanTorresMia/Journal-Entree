import axios from "axios";

// eslint-disable-next-line
const API = {
  /* --------------------- api calls for User -------------------*/
  createUser: function (email) {
    return axios.post("/api/User", email);
  },
  getUsers: function () {
    return axios.get("/api/User/all");
  },
  getUser: function (email) {
    return axios.get("/api/User/" + email);
  },
  /* --------------------- api calls for entries -------------------*/
  createEntry: function (title, text, id) {
    return axios.post("/api/Entry", title, text, id);
  },
  getAllEntries: function (id) {
    return axios.get("/api/getAllEntries/" + id);
  },
  /* --------------------- api calls for catagories aka journals -------------------*/

  createCatagory: (name, description, id) => {
    return axios.post("/api/Catagory", name, description, id)
  },
  getCatagory: function (name, id) {
    return axios.get("/api/getCatagory/" + name + "," + id);
  },
  deleteCatagory: (id) => {
    return axios.delete("/api/deleteCatagory/" + id);
  },
  /* --------------------- api calls for profile -------------------*/
  createProfile: (userName, id) => {
    return axios.post("/api/Profile", userName, id)
  }
};

export default API;

