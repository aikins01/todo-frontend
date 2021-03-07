import axios from "axios";
export default axios.create({
    baseURL: "https://aido-back.herokuapp.com/",
    responseType: "json",
    headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Expose-Headers": "Content-Length, X-JSON",'Access-Control-Max-Age': '86400'}
  });