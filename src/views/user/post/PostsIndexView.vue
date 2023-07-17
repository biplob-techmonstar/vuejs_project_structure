<template>
  <div><h1>All Posts</h1></div>
  <div>
    <li v-for="post in posts" :key="post.id">
      <RouterLink :to="{ name: 'Post', params: { id: post.id } }"
        ><span style="font-size: 1.5rem">{{ post.title }}</span></RouterLink
      >
    </li>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    // Import states
    ...mapState("post", ["posts"]),

    // Import getters
    ...mapGetters({
      logged_in: "loginStatus",
    }),
  },

  mounted() {
    if (this.logged_in) {
      this.getPosts();
    }
  },

  methods: {
    ...mapActions("post", ["getPosts"]),

    readPost(post) {
      this.$router.push({
        name: "Post",
        params: { id: post.id },
      });
    },
  },
};
</script>

<style scoped>
.answer {
  font-weight: bold;
  color: orangered;
}

a:hover {
  color: orangered;
  text-decoration: underline;
}

a {
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  /* padding: 5px;
  margin: 5px; */
  border-left: 1px solid var(--color-border);
}

.post_title {
  font-size: 21px;
  text-decoration: none;
  margin: 5px;
  cursor: pointer;
}

.post_title:hover {
  color: orangered;
  text-decoration: underline;
}
</style>
