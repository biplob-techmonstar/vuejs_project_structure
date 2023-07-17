import Api, { http } from "./Api";
const END_POINT = "comments";

export default {
  store(data) {
    // return Api.post(END_POINT, data);
    return http().post(END_POINT, data);
  },

  show(id) {
    return http().get(`${END_POINT}/${id}`);
  },

  all() {
    return http().get(END_POINT);
  },

  update(id, data) {
    return http().post(`${END_POINT}/${id}`, data);
  },

  delete(id) {
    return http().delete(`${END_POINT}/${id}`);
  },
};
