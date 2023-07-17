<template>
  <div><h1>Add New Post</h1></div>

  <div class="main">
    <form v-on:submit.prevent="handlePost">
      <input type="text" name="title" v-model="postData.title" placeholder="Post Title" size="108" style="margin: 5px" required />
      <br />
      <textarea name="body" v-model="postData.body" id="" cols="100" rows="10" style="margin: 5px" required></textarea>
      <br />
      <button type="submit" style="margin: 5px">Post</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "RegisterView",
  components: {},
  data() {
    return {
      postData: {
        title: "",
        body: "",
      },

      errors: {},
    };
  },

  methods: {
    ...mapActions("post", ["storePost"]),
    ...mapActions("post", ["getPosts"]),

    handlePost: async function () {
      let formData = new FormData();
      formData.append("title", this.postData.title);
      formData.append("body", this.postData.body);

      this.postData.title = "";
      this.postData.body = "";

      try {
        let info = await this.storePost(formData);
        let response = JSON.parse(info);

        if (response.status == 201) {
          this.getPosts();
          alert(response.data.message);
        }
      } catch (e) {
        alert(e.response.data.message);
      }
    },
  },
};
</script>

<style scoped></style>
