<template>
  <h1>Your Post</h1>
  <div>
    <li v-for="post in my_post" :key="post.id">
      <RouterLink :to="{ name: 'Post', params: { id: post.id } }"
        ><span style="font-size: 1.5rem">{{ post.title }}</span></RouterLink
      >
    </li>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import Question from "../services/api/QuestionApi";

export default {
  name: "HomeView",

  data() {
    return {
      singleQuestion: "",
      base_url: this.$store.state.baseUrl,
      access_token_local: localStorage.getItem("access_token"),
    };
  },

  computed: {
    ...mapState("post", ["my_post"]),

    ...mapGetters({
      logged_in: "loginStatus",
    }),
  },

  mounted() {
    this.getMyPost();
  },

  methods: {
    ...mapActions("post", ["getMyPost"]),

    getSingleQuestion(id) {
      Question.show(id)
        .then((response) => {
          this.singleQuestion = response.data.data;

          console.log(this.singleQuestion);
          // let myTarget = JSON.parse(JSON.stringify(this.singleQuestion));
          // console.log(myTarget);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },

    module() {
      console.log("Inside module.");

      try {
        this.$store.dispatch("sample/sampleAction").then(() => {
          console.log("ok");
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
