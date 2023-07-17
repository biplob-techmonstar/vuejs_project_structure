export const SET_POSTS = (state, response) => {
  state.posts = response.data;
};

export const SET_MY_POST = (state, response) => {
  state.my_post = response.data;
};

export const SET_POST = (state, response) => {
  state.post = response.data;
};

export const ADD_POST = (state, response) => {
  if (state.posts.push(response.data)) {
    state.success_message = response.data.message;
  } else {
    state.success_message = "";
  }
};
