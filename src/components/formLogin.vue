<template>
  <div id="jumbotorn">
    <div id="boxLogin">
      <div id="pictureLogin">
        <img src="../assets/logo.png" alt="" id="logoLogin" />
      </div>
      <form v-show="!isShowForm" @submit.prevent="login">
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-dark">Login</button>
        <span> Or </span>

        <GoogleLogin
          :params="params"
          :onSuccess="onSuccess"
          :onFailure="onFailure"
          class="btn btn-outline-secondary"
          ><i class="bi bi-google"> Google account</i></GoogleLogin
        ><br />
        <span
          >Don't any have account, You can
          <a href="#" @click.prevent="changeForm()">Register</a> here!</span
        >
      </form>
      <Register v-show="isShowForm" />
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import Register from "./register";
import { mapState } from "vuex";
import swal from "sweetalert";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    Register,
    GoogleLogin
  },
  computed: mapState({
    isShowForm: "showing"
  }),
  methods: {
    changeForm() {
      this.$store.commit("SET_SHOW_FORM", true);
    },
    login() {
      const payload = {
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("login", payload)
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.email);
          swal("Good job!", "Login success", "success", {
            button: "OK!"
          });
          this.$router.push("/dashboard");
        })
        .catch(err => {
          swal("Incorrect!", "Invalid email or password", "error", {
            button: "OK!"
          });
        });
    },
    onSuccess(googleUser) {
      const id_token = googleUser.getAuthResponse().id_token;
      this.$store
        .dispatch("googleLogin", id_token)
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.email);
          swal("Good job!", "Login success", "success", {
            button: "OK!"
          });
          this.$router.push("/dashboard");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
#boxLogin {
  width: 800px;
  height: auto;
  background-color: rgba(255, 248, 220, 0.445);
  display: flex;
  flex-direction: row;
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 50px;
}

#jumbotorn {
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#logoLogin {
  width: 280px;
  height: 280px;
}
#pictureLogin {
  width: 500px;
  height: auto;
}
</style>
