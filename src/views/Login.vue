<template>
  <section
    class="sign-in-page"
    style="background-image: url('https://cdn.hipwallpaper.com/i/84/18/mBMux5.jpg');"
  >
    <div class="container">
      <div
        class="row justify-content-center align-items-center height-self-center"
      >
        <div class="col-lg-5 col-md-12 align-self-center">
          <div class="sign-user_card ">
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <h3 class="mb-3 text-center">Sign in</h3>
                <form @submit.prevent="login" class="mt-4">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control mb-0"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      autocomplete="off"
                      required
                      v-model="email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control mb-0"
                      id="exampleInputPassword2"
                      placeholder="Password"
                      required
                      v-model="password"
                    />
                  </div>

                  <div class="sign-info">
                    <button type="submit" class="btn btn-hover">Sign in</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex justify-content-center links">
                Don't have an account?
                <router-link to="/register" class="text-primary ml-2"
                  >Sign Up</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const userData = {
        email: this.email,
        password: this.password
      };
      console.log(userData, "userdata");
      this.$store
        .dispatch("login", userData)
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err, "login err");
        });
    }
  }
};
</script>

<style scoped>
.sign-in-page {
  background-color: black;
}
</style>
