import axios from "axios";
import API from '../utils/API'
const getAll = () => {
  return axios.API.get("/api/todos");
};

const get = id => {
  return axios.API.get(`/api/todos/${id}/`);
};

const create = data => {
  return axios.API.post("/api/todos/", data);
};

const update = (id, data) => {
  return axios.API.put(`/api/todos/${id}/`, data);
};

const down = id => {
  return axios.API.delete(`/api/todos/${id}/`);
};

const downAll = () => {
  return axios.API.delete(`/api/todos/`);
};

export default {
  getAll,
  get,
  create,
  update,
  down,
  downAll,
};