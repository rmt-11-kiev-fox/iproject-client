<template>
  <div class="container d-flex">
    <div class="container w-50">
      <div class="row d-flex mt-4 p-2 rounded shadow-lg">
        <div class="col bg-light rounded text-dark">
          <form @submit.prevent="login">
            <fieldset>
              <h1 class="text-center mt-2 mb-4">Login</h1>
              <hr />
              <div class="input-group mt-4 mb-4">
                <input
                  v-model="input.username"
                  type="text"
                  class="form-control"
                  placeholder="username"
                  aria-label="username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-4">
                <input
                  v-model="input.password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="text-center mb-3">
                <button type="submit" class="btn btn-dark">Submit</button>
              </div>
            </fieldset>
          </form>

          <div class="text-center">
            <p>
              Don't have an account?
              <router-link to="/register">
                <a class="btn text-danger">Register here </a>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import instanceAxios from "../helpers/api";
import Swal from "sweetalert2";
import { Toast } from "../helpers/alert";
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        const header = await instanceAxios({
          url: "/login",
          method: "POST",
          data: this.input,
        });
        localStorage.setItem("access_token", header.data.access_token);
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        this.$router.push("/");
      } catch ({ response }) {
        const message = response.data.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message,
        });
      }
    },
  },
};
</script>

<style>
</style>