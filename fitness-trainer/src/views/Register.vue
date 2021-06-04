<template>

<div class="wrapper fadeInDown" v-if="$route.name == 'Register'">
  <div id="formContent"> <br>

   <div class="fadeIn first">
    <h5>Fitness Tracker</h5>
   <h5>Registration Form</h5>
   </div> <br>

   <p style="color: crimson;" align="center">{{ regErrors }}</p>

   <form>
   <input v-model="userName" type="text" class="fadeIn second" placeholder="User Name">
   <input v-model="email" type="text" class="fadeIn second" placeholder="Email">
   <input v-model="password" type="password" id="password" class="fadeIn second" placeholder="Password">
   <input v-model="birthDate" type="date" class="fadeIn second" placeholder="birtDate">
   <input v-model="weight" type="number" class="fadeIn second" placeholder="weight">
   <input v-model="height" type="number" class="fadeIn second" placeholder="height">
   <input v-model="gender" type="text" class="fadeIn second" placeholder="gender">
   <input @click.prevent="register" type="submit" class="fadeIn fourth" value="Register">
   </form>

   <div id="formFooter">
      <router-link to="/login">Already have an account?</router-link>
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
      userName: '',
      email: '',
      password: '',
      birthDate: '',
      weight: null,
      height: null,
      gender: '',
      regErrors: '',
    };
  },
  methods: {
    register() {
      axios({
        url: "/user/register",
        method: "post",
        data: {
          userName: this.userName,
          email: this.email,
          password: this.password,
          birthDate: this.birthDate,
          weight: this.weight,
          height: this.height,
          gender: this.gender
        }
      })
      .then(({ data }) => {
        this.$swal.fire(
          'Registration completed!',
          '',
          'success'
        )
        this.$router.push('/login')
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
  
};
</script>

<style scoped>
@import '../../css/loginRegister.css'; 
</style>