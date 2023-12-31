import Api, { http } from "./Api";
const END_POINT = "posts";

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

  myPost() {
    return http().get(END_POINT + "/get/my_post");
  },

  update() {
    return http().put(`${END_POINT}/${id}`);
  },

  delete() {
    return http().delete(`${END_POINT}/${id}`);
  },
};
