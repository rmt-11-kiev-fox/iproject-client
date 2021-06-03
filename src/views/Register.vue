<template>
  <div class="container d-flex">
    <div class="container w-50">
      <div class="row d-flex mt-4 p-2 rounded shadow-lg">
        <div class="col bg-light rounded text-dark">
          <form @submit.prevent="register">
            <fieldset>
              <h1 class="text-center mt-2 mb-4 overflow-hidden">Register</h1>
              <hr />
              <div class="input-group mt-4 mb-4">
                <input
                  v-model="input.email"
                  type="email"
                  class="form-control"
                  placeholder="email"
                  aria-label="email"
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
              <div class="input-group mt-4 mb-4">
                <input
                  v-model="input.firstName"
                  type="text"
                  class="form-control"
                  placeholder="first name"
                  aria-label="firstName"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mt-4 mb-4">
                <input
                  v-model="input.lastName"
                  type="text"
                  class="form-control"
                  placeholder="last name"
                  aria-label="lastName"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mt-4 mb-4">
                <input
                  v-model="input.phoneNumber"
                  type="text"
                  class="form-control"
                  placeholder="phone number"
                  aria-label="phoneNumber"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mt-4 mb-4">
                <input
                  v-model="input.address"
                  type="text"
                  class="form-control"
                  placeholder="address"
                  aria-label="address"
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
              Already have an account ?
              <router-link to="/login">
                <a class="btn text-danger">Login </a>
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
import { Swal } from "../helpers/alert";
export default {
  name: "Register",
  data() {
    return {
      input: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        username: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        const newUser = await instanceAxios({
          url: "/register",
          method: "POST",
          data: this.input,
        });
        this.$router.push("/login");
      }catch ({ response }) {
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