import Comment from "../../../services/api/CommentApi";
// import store from "../../index";
import store from "../../../store";

export const getComments = ({ commit }) => {
  Comment.all().then((response) => {
    commit("SET_COMMENTS", response.data);
  });
};

export const getComment = ({ commit }, id) => {
  Comment.show(id).then((response) => {
    commit("SET_COMMENT", response.data);
  });
};

export const storeComment = ({ commit, dispatch, rootState }, data) => {
  return Comment.store(data).then((response) => {
    var data = response.data;
    commit("ADD_COMMENT", { data });

    return JSON.stringify(response);
  });
};

export const updateComment = ({ commit }, data) => {
  return Comment.update(data["0"], data["1"]).then((response) => {
    var data = response.data;
    commit("UPDATE_COMMENT", { data });

    return JSON.stringify(response);
  });
};

export const deleteComment = ({ commit }, id) => {
  Comment.delete(id).then((response) => {
    commit("DELETE_COMMENT", response.data);
  });
};
