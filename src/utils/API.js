import axios from "axios";
export default axios.create({
    baseURL: "https://aido-back.herokuapp.com/",
    responseType: "json"
  });