import axios from "axios";

const getAll = () => {
  return axios.get("/api/todos");
};

const get = id => {
  return axios.get(`/api/todos/${id}`);
};

const create = data => {
  return axios.post("/api/todos/", data);
};

const update = (id, data) => {
  return axios.put(`/api/todos/${id}`, data);
};

const remove = id => {
  return axios.delete(`/api/todos/${id}`);
};

const removeAll = () => {
  return axios.delete(`/api/todos`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};