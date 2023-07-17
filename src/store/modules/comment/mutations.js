export const SET_POSTS = (state, response) => {
  state.posts = response.data;
};

export const SET_POST = (state, response) => {
  state.post = response.data;
};

export const ADD_COMMENT = (state, response) => {
  if (state.comments.push(response.data)) {
    state.success_message = response.data.message;
  } else {
    state.success_message = "";
  }
};

export const UPDATE_COMMENT = (state, response) => {
  // if (state.comments.push(response.data)) {
  //   state.success_message = response.data.message;
  // } else {
  //   state.success_message = "";
  // }
};

export const DELETE_COMMENT = (state, response) => {};
