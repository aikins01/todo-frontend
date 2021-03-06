import axios from "axios";

const getAll = () => {
  return axios.get("/api/todos");
};

const get = id => {
  return axios.get(`/api/todos/${id}/`);
};

const create = data => {
  return axios.post("/api/todos/", data);
};

const update = (id, data) => {
  return axios.put(`/api/todos/${id}/`, data);
};

const down = id => {
  return axios.delete(`/api/todos/${id}/`);
};

const downAll = () => {
  return axios.delete(`/api/todos/`);
};

export default {
  getAll,
  get,
  create,
  update,
  down,
  downAll,
};