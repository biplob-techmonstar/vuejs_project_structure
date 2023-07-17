import Post from "../../../services/api/PostApi";
// import store from "../../index";
import store from "../../../store";

export const getPosts = ({ commit }) => {
  Post.all().then((response) => {
    commit("SET_POSTS", response.data);
  });
};

export const getMyPost = ({ commit }) => {
  Post.myPost().then((response) => {
    commit("SET_MY_POST", response.data);
  });
};

export const getPost = ({ commit }, id) => {
  Post.show(id).then((response) => {
    commit("SET_POST", response.data);
  });
};

export const storePost = ({ commit, dispatch, rootState }, data) => {
  return Post.store(data).then((response) => {
    var data = response.data;
    commit("ADD_POST", { data });

    return JSON.stringify(response);
  });
};
