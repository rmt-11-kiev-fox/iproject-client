<template>
  <div id="formRegister">
    <form @submit.prevent="register">
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" v-model="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-dark btn-sm">
        Register</button
      ><br />
      <a href="#" @click="changeForm">Back To Login</a>
    </form>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    changeForm() {
      this.$store.commit("SET_SHOW_FORM", false);
    },
    register() {
      let payload = {
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("register", payload)
        .then(({ data }) => {
          swal("Good job!", "Register succes, you can login now", "success", {
            button: "OK!"
          });
        })
        .catch(err => {
          swal("Incorrect!", "Your email was registered", "error", {
            button: "OK!"
          });
        });
    }
  }
};
</script>

<style>
#formRegister {
  width: 300px;
}
</style>
