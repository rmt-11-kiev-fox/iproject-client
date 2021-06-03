<template>
  <div class="LoginPage">
    <div class="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
      <div class="">
        <img src="../assets/Logins.png" alt="" class="lg:block w-full">
        <h1 class="wellcome hidden lg:block w-full">WELLCOME</h1>
      </div>
      <div>
        <form action="" @submit.prevent="Log" class="flex flex-col justify-center items-center">
          <h2 class="Logs" >Login Here</h2>
          <div class="relative mt-2">
            <i class="fa fa-envelope absolute text-3xl text-Pinkky"></i>
            <input v-model="LoginEmail" type="text" placeholder="ex: Fox@email.com" class="pl-10 border-b-2 focus:outline-none rounded-lg hover:border-primarycolor text-2xl focus:bg-Grin focus:placeholder-white">
          </div>
          <div class="relative mt-2">
            <i class="fa fa-unlock-alt absolute text-Pinkky text-3xl" ></i>
            <input v-model="LoginPassword" type="password" placeholder="" class="pl-8 border-b-2 rounded-lg focus:outline-none hover:border-primarycolor text-2xl focus:bg-Grin focus:placeholder-white">
          </div>
            <input type="submit" class="my-3 px-10 bg-Pinkky rounded-lg text-white " value="Login">
        </form>
        <!-- <div class="g-signin2" data-onsuccess="onSignIn" @click.prevent="GoogleLogin"></div> -->
        <button v-google-signin-button="clientId" class="google-signin-button flex flex-col justify-center items-center"> Continue with Google</button>
      </div>
    
    </div>
  </div>
</template>

<script>

export default {
  name:"Login",
  data () {
    return {
      LoginEmail:'',
      LoginPassword:'',
      clientId:'575589970650-fo8gufj1hlcmjfkui292h75f0jnc7k5p.apps.googleusercontent.com'
    }
  },
  methods: {
    Log() {
      this.$store.dispatch('login', {email:this.LoginEmail, password:this.LoginPassword})
      localStorage.setItem()
    },
    OnGoogleAuthSuccess (idToken) {
      // console.log(idToken)
      // Receive the idToken and make your magic with the backend
      this.$store.dispatch('gLogin', idToken)
    },
    OnGoogleAuthFail (error) {
      console.log(error) 
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Sigmar+One&display=swap');
.wellcome {
  font-size: 100px;
font-family: 'Sigmar One', cursive;
  color: gray; 
  margin-top: -450px; 
  margin-left: 300px;
  position: block;
}

.Logs{
  font-family: 'Indie Flower', cursive;
  font-size: 30px; 
}

.google-signin-button {
    width: 30%;
    background: #f6416c;
    border: 3px solid #f6416c;
    color: white;
    padding: 5px;
    font-size: 15px;
    cursor: pointer;
    margin: 10px 0;
    border-radius: 20px;
  }

</style>