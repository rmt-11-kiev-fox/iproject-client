<template>

<div class="wrapper fadeInDown" v-if="$route.name == 'Login'">
  <div id="formContent"> <br>

   <div class="fadeIn first">
   <h5>Fitness Tracker - Login form</h5>
   </div> <br>

   <p style="color: crimson;" align="center">{{ loginErrors }}</p>

   <form>
   <input v-model="email" type="text" id="login" class="fadeIn second" name="login" placeholder="Email/User Name">
   <input v-model="password" type="password" id="password" class="fadeIn third" name="login" placeholder="Password">
   <input @click.prevent="login" type="submit" class="fadeIn fourth" value="Log In">
   </form>

   <div id="formFooter">
     <router-link to="/register">Make your new account here</router-link>
    </div>

  </div>
</div>

</template>

<script>
import axios from '../../api'

export default {
  props: [],
  data() {
    return {
      email: "",
      password: "",
      loginErrors: '',
    };
  },
  methods: {
    login() {
      const payload = {
      email: this.email,
      password: this.password
      };

      axios({
        url: "/user/login",
        method: "post",
        data: {
          userName: payload.email,
          email: payload.email,
          password: payload.password,
        }
      })
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        this.$swal.fire(
          'Login Success!',
          '',
          'success'
        )
        this.$router.push('/')
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.data.message == 'Wrong password') {
            this.$swal.fire({
              icon: 'error',
              title: 'Wrong Password!'
            })
          }
          else if (error.response.data.message == 'Email not registered') {
            this.$swal.fire({
              icon: 'error',
              title: 'Email not registered!'
            })
          } 
          else {
            this.$swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          }
        }
      });
    },
  },
  
};
</script>

<style scoped>
@import '../../css/loginRegister.css'; 
</style>