
import API from '../utils/API'

const getAll = () => {
  return API.get("/api/todos/");
};

const get = id => {
  return API.get(`/api/todos/${id}/`);
};

const create = data => {
  return API.post("/api/todos/", data);
};

const update = (id, data) => {
  return API.put(`/api/todos/${id}/`, data);
};

const down = id => {
  return API.delete(`/api/todos/${id}/`);
};

const downAll = () => {
  return API.delete(`/api/todos/`);
};

export default {
  getAll,
  get,
  create,
  update,
  down,
  downAll,
};