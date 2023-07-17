import { createStore } from "vuex";
import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

// Import Modules
import auth from "./modules/auth";
import post from "./modules/post";
import comment from "./modules/comment";

const store = createStore({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,

  modules: {
    auth,
    post,
    comment,
  },
});

export default store;
