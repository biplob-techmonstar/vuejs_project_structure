<template>
  <div>
    <h2>{{ post.title }}</h2>
  </div>

  <div>
    <p>{{ post.body }}</p>
  </div>

  <!-- Showing post comments -->
  <div>
    <p><h4>Comments:</h4></p>
  </div>

  <div v-for="comment in post.comments" :key="comment.id">
    <p>
      <b><u>User-{{ comment.user_id }}:</u></b> {{ comment.text }} 
      <div v-show="showEditBox">
      <input v-if="comment.user_id == userInfo.id" type="text" id="edit_comment" v-model="comment.text" @blur="handleEditComment(comment)" ref="editCommentBox">
      </div>
      <button v-if="comment.user_id == userInfo.id" id="edit_button" style="padding: 5px;" @click="handleEditClick()" v-show="showEditBtn">Edit</button> 
      <button v-if="comment.user_id == userInfo.id" id="delete_button" style="padding: 5px;" @click="handleDeleteClick(comment)">Delete</button>
    </p>
  </div>

  <!-- Create new comment -->
  <div class="main">
    <form v-on:submit.prevent="handleComment">
      <textarea name="text" v-model="commentData.text" id="" cols="100" rows="10" style="margin: 5px" placeholder="Place your comment here" required></textarea>
      <br />
      <button type="submit" style="margin: 5px">Post</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      commentData: {
        text: "",
      },
      showEditBox: false,
      showEditBtn: true,
    };
  },

  computed: {
    // Import states
    ...mapState("post", ["post"]),

    // Import getters
    ...mapGetters({
      logged_in: "loginStatus",
      userInfo: "userInfo",
    }),
  },

  mounted() {
    if (this.logged_in) {
      this.getPost(this.$route.params.id);
    }
  },

  methods: {
    ...mapActions("post", ["getPost"]),
    ...mapActions("comment", ["storeComment", "updateComment", "deleteComment"]),

    handleEditClick() {
      this.showEditBox = true;
      this.showEditBtn = false;
      this.$nextTick(() => {
        this.$refs.editCommentBox['0'].focus();
      });
    },

    handleDeleteClick(comment) {
      this.deleteComment(comment.id);
      this.getPost(this.$route.params.id);
    },
    
    handleComment: async function () {
      let formData = new FormData();
      formData.append("text", this.commentData.text);
      formData.append("post_id", this.$route.params.id);

      this.commentData.text = "";

      try {
        let info = await this.storeComment(formData);
        let response = JSON.parse(info);

        if (response.status == 201) {
          this.getPost(this.$route.params.id);
        }
      } catch (e) {
        alert(e.response.data.message);
      }
    },

    handleEditComment: async function (comment) {
      this.showEditBtn = true;
      this.showEditBox = false;
      
      let formData = new FormData();
      formData.append("text", comment.text);
      formData.append("post_id", comment.post_id);
      formData.append("_method", 'PUT');

      try {
        let info = await this.updateComment([comment.id, formData]);
        let response = JSON.parse(info);

        if (response.status == 200) {
          // this.getPost(this.$route.params.id);
        }
      } catch (e) {
        alert(e.response.data.message);
      }
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
  font-size: 21px;
  text-decoration: none;
  padding: 5px;
  margin: 5px;
  border-left: 1px solid var(--color-border);
}
</style>
