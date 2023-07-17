import PostsIndex from "../../views/user/post/PostsIndexView.vue";
import PostsCreate from "../../views/user/post/PostsCreateView.vue";
import PostsEdit from "../../views/user/post/PostsEditView.vue";
import PostsShow from "../../views/user/post/PostsShowView.vue";

export default [
  {
    path: "/posts",
    name: "PostsIndex",
    component: PostsIndex,
  },

  {
    path: "/posts/create",
    name: "PostsCreate",
    component: PostsCreate,
  },

  {
    path: "/posts/:id",
    name: "PostsShow",
    component: PostsShow,
  },

  {
    path: "/posts/:id/edit",
    name: "PostsEdit",
    component: PostsEdit,
  },
];
