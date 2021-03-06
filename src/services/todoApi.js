import axios from "axios";

const getAll = () => {
  return axios.get("http://aikins01.pythonaywhere.com/api/todos");
};

const get = id => {
  return axios.get(`http://aikins01.pythonaywhere.com/api/todos/${id}/`);
};

const create = data => {
  return axios.post("http://aikins01.pythonaywhere.com/api/todos/", data);
};

const update = (id, data) => {
  return axios.put(`http://aikins01.pythonaywhere.com/api/todos/${id}/`, data);
};

const down = id => {
  return axios.delete(`http://aikins01.pythonaywhere.com/api/todos/${id}/`);
};

const downAll = () => {
  return axios.delete(`http://aikins01.pythonaywhere.com/api/todos/`);
};

export default {
  getAll,
  get,
  create,
  update,
  down,
  downAll,
};