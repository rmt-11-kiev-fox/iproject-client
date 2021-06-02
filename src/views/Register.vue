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
                <h3 class="mb-3 text-center">Sign Up</h3>
                <form @submit.prevent="register" class="mt-4">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-0"
                      id="exampleInputEmail1"
                      placeholder="Enter UserName"
                      autocomplete="off"
                      required
                      v-model="userName"
                    />
                  </div>
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
                    <button type="submit" class="btn btn-hover">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="mt-3">
              <div class="d-flex justify-content-center links">
                Already have an account?
                <router-link to="/login" class="text-primary ml-2"
                  >Sign In</router-link
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
      userName: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      const userData = {
        userName: this.userName,
        email: this.email,
        password: this.password
      };
      //   console.log(userData, "userdata");
      this.$store
        .dispatch("register", userData)
        .then(({ data }) => {
          this.$router.push("/login");
        })
        .catch(err => {
          console.log(err, "login err");
        });
    }
  }
};
</script>
